import React, { HTMLProps } from "react";
import { cn } from "../utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export default forwardRef<HTMLInputElement, Props>(function (
  { className, size, type, floatOff, ...props },
  ref,
) {
  return (
    <div className={cn("relative", className)}>
      <input
        type={type}
        className={cn(
          "text-text border-background-400 placeholder:text-text/40 hover:placeholder-text/60 focus:placeholder-text/60 peer w-full rounded-sm border bg-transparent p-2  shadow focus:outline-none",
        )}
        ref={ref}
        {...props}
        placeholder=" "
      />
      <label htmlFor={props.id} className={cn(variants({ floatOff }))}>
        {props.placeholder}
      </label>
    </div>
  );
});

const variants = cva(
  "text-text/40 peer-hover:text-text/60 peer-focus:text-accent-600 absolute left-1 top-2 z-10 origin-[0] scale-75 transform cursor-text  rounded-md bg-transparent px-2 backdrop-blur-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75",
  {
    variants: {
      floatOff: {
        true: "top-1 -translate-y-4 scale-75",
        false: "-translate-y-8",
      },
    },
    defaultVariants: {
      floatOff: false,
    },
  },
);

export type Props = {
  type?: "text" | "password";
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof variants>;
