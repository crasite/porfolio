import React, { forwardRef } from "react";
import { cn } from "../utils";

export default forwardRef<HTMLInputElement, Props>(
  ({ className, label, ...rest }, ref) => {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <input
          type="checkbox"
          {...rest}
          ref={ref}
          className="border-gray text-primary accent-primary h-4 w-4 rounded"
        />
        <label htmlFor={rest.id}>{label}</label>
      </div>
    );
  },
);

type Props = { label?: string } & React.InputHTMLAttributes<HTMLInputElement>;
