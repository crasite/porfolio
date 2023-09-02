import React, { forwardRef } from "react";
import { cn } from "../utils";

export default forwardRef<HTMLDivElement, Props>(function Component(
  { children, name, className, ...rest }: Props,
  ref,
) {
  return (
    <div
      {...rest}
      className={cn("border-gray flex flex-col rounded-md border", className)}
      ref={ref}
    >
      <div className="border-gray border-b p-2">{name}</div>
      {children}
    </div>
  );
});

type Props = {
  name?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
