import React, { forwardRef, useId } from "react";
import { cn } from "../utils";

export default forwardRef<HTMLInputElement, Props>(
  ({ className, label, ...rest }, ref) => {
    const id = useId();
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <input
          type="checkbox"
          id={id}
          {...rest}
          ref={ref}
          className="border-gray text-primary accent-primary h-4 w-4 rounded"
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  },
);

type Props = { label?: string } & React.InputHTMLAttributes<HTMLInputElement>;
