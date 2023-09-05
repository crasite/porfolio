import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { cn } from "../utils";
import Icon from "./Icon";
import { VariantProps, cva } from "class-variance-authority";

export default function Select<T extends { key: {}; label: string }>({
  multiple = false,
  list,
  by,
  label,
  onChange,
  buttonClassName,
  background,
}: Props<T>) {
  const [selected, setSelected] = useState<T>();
  return (
    <Listbox
      multiple={multiple}
      onChange={(v: T) => {
        setSelected(v);
        onChange?.(v);
      }}
      by={by}
    >
      <Listbox.Button
        className={cn(ButtonStyle({ background }), buttonClassName)}
      >
        {label || (selected?.label ?? "Select")}
      </Listbox.Button>
      <Listbox.Options
        className={cn(
          "bg-popover  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
        )}
      >
        {list.map((item) => (
          <Listbox.Option
            value={item}
            className={cn(
              "focus:bg-accent data-[headlessui-state=active]:bg-primary/10 data-[headlessui-state='selected']:bg-primary/20 data-[headlessui-state='active_selected']:bg-primary/30 relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            )}
          >
            {({ selected }) => {
              const checkmark = selected ? (
                <Icon name="checkmark" className="absolute left-2 h-3 w-3" />
              ) : (
                <></>
              );
              return (
                <>
                  {checkmark} {item.label}
                </>
              );
            }}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

const ButtonStyle = cva(
  "border-gray flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      background: {
        default: "bg-background text-text",
        primary:
          "bg-primary/80 ring-offset-background/80 focus:ring-primary text-white",
      },
    },
    defaultVariants: {
      background: "default",
    },
  },
);

type Props<T> = {
  list: T[];
  multiple?: boolean;
  by?: keyof T & string;
  label?: string;

  buttonClassName?: string;
  onChange?: (value: T) => void;
} & VariantProps<typeof ButtonStyle>;
