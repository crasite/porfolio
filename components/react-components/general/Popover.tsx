import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";
import { cn } from "../utils";
import Icon from "./Icon";

function Popover(props: Props) {
  const [_open, setOpen] = useState(props.open || false);
  const open = props.open ?? _open;
  const displayChevron = props.displayChevron ?? true;
  const label = props.label || (
    <div className="inline-flex items-center pr-2">
      <Icon name="funnel" className="h-4 w-4 pr-1" />
      Filter
    </div>
  );
  function toggle() {
    if (props.open || props.onToggle) {
      props.onToggle?.(!open);
    } else {
      setOpen((v) => !v);
    }
  }
  return (
    <div>
      <div className="relative">
        <Button onClick={toggle} className="flex w-fit items-center px-1">
          {label}
          {displayChevron && (
            <Icon
              name={open ? "chevron-up" : "chevron-down"}
              className="h-3 w-3"
            />
          )}
        </Button>
        {open && (
          <div className="border-gray bg-background absolute top-[calc(100%+0.5rem)] z-10 flex flex-col rounded-lg border">
            {props.children}
          </div>
        )}
      </div>
      <p>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </p>
    </div>
  );
}

function Group<T>(props: GroupProps<T>) {
  const [value, setValue] = useState<T[]>(props.value || []);
  return (
    <div className="border-gray border-b last:border-none">
      {props.label && (
        <label className="my-1 px-2 text-sm font-light italic">
          {props.label}
        </label>
      )}
      {props.options.map((option) => (
        <Checkbox
          label={option.label}
          className="px-2"
          id={option.id}
          onChange={(e) => {
            setValue((prev) => {
              if (e.target.checked) {
                const newValue = [...prev, option.value];
                props.onChange?.(newValue);
                return newValue;
              }
              const newValue = prev.filter((v) => v !== option.value);
              props.onChange?.(newValue);
              return newValue;
            });
          }}
          checked={value?.includes(option.value)}
        />
      ))}
    </div>
  );
}

function Other({ children, className, ...rest }: OtherProps) {
  return (
    <div
      {...rest}
      className={cn("border-gray border-b last:border-none", className)}
    >
      {children}
    </div>
  );
}

export type GroupProps<T> = {
  label?: string;
  options: {
    label: string;
    value: T;
    id?: string;
  }[];
  onChange?: (value: T[]) => void;
  value?: T[];
};

export type OtherProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export type Props = {
  displayChevron?: boolean;
  children?: React.ReactNode;
  open?: boolean;
  label?: React.ReactNode;
  onToggle?: (isOpen: boolean) => void;
};
export default Object.assign(Popover, { Group, Other });
