import React, { HTMLProps } from "react";
import { forwardRef } from "react";
import { cn } from "../utils";
import { type PropsWithChildren } from "react";

export default forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <button
        {...rest}
        type="button"
        className={cn("border border-black text-xl text-green-300", className)}
        ref={ref}
      >
        {props.children}
      </button>
    );
  },
);

type Props = {} & HTMLProps<HTMLButtonElement>;
