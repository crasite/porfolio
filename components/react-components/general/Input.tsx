import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils";
import Icon, { Props as IconProps } from "./Icon";
import { forwardRef, HTMLProps } from "react";

const InputBlock = cva(null, {
  variants: {
    intent: {
      input: "bg-background border-gray rounded-md border",
      static:
        "block w-full rounded-lg p-2.5 text-sm dark:text-white dark:placeholder-gray-400",
    },
    disabled: {
      true: "bg-gray-100 text-gray-800",
    },
    size: {
      compact: "",
      default: "p-2",
    },
  },
  compoundVariants: [
    {
      intent: "input",
      size: "compact",
      className: "p-0.5",
    },
  ],
  defaultVariants: {
    intent: "input",
    size: "default",
  },
});

export type Props = {
  className?: string;
  icon?: IconProps["name"];
  disabled?: boolean;
} & Omit<HTMLProps<HTMLInputElement>, "size"> &
  VariantProps<typeof InputBlock>;
export default forwardRef<HTMLInputElement, Props>(
  function Component(props, ref) {
    const inputClass = InputBlock({
      intent: props.intent,
      disabled: props.disabled,
      size: props.size,
    });
    const { className, icon, ...rest } = props;
    return (
      <div
        className={cn(inputClass, "inline-flex items-center", props.className)}
      >
        {icon && <Icon name={icon} className="pointer-events-none absolute" />}
        <input
          type="text"
          {...rest}
          size={undefined}
          className={`outline-none ${icon ? "pl-7" : ""}`}
          ref={ref}
        />
      </div>
    );
  },
);
