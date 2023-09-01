import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils";
import Icon, { Props as IconProps } from "./Icon";
import { forwardRef, HTMLProps } from "react";

const InputBlock = cva(null, {
  variants: {
    intent: {
      input: "bg-background border-gray rounded-md border p-0.5",
      static:
        "block w-full rounded-lg p-2.5 text-sm dark:text-white dark:placeholder-gray-400",
    },
  },
  defaultVariants: {
    intent: "input",
  },
});

export type Props = {
  className?: string;
  icon?: IconProps["name"];
} & VariantProps<typeof InputBlock> &
  HTMLProps<HTMLInputElement>;
export default forwardRef<HTMLInputElement, Props>(
  function Component(props, ref) {
    const inputClass = InputBlock({ intent: props.intent });
    const { className, icon, ...rest } = props;
    return (
      <div
        className={cn(inputClass, "inline-flex items-center", props.className)}
      >
        {icon && <Icon name={icon} className="pointer-events-none absolute" />}
        <input
          type="text"
          {...rest}
          className={`outline-none ${icon ? "pl-7" : ""}`}
          ref={ref}
        />
      </div>
    );
  },
);
