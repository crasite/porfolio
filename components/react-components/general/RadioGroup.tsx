import React, { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

export default forwardRef<HTMLDivElement, Props>(function RadioGroup(
  { options, ...rest },
  ref,
) {
  return (
    <div ref={ref} className="border-gray flex rounded-md border">
      {options.map((option) => (
        <div className="border-gray flex items-center gap-2 border-r px-4 py-2 ">
          <input
            {...rest}
            type="radio"
            name="radio"
            value={option.value}
            key={option.value}
            id={"opt" + option.name.replace(" ", "-")}
            className="border-gray focus:ring-primary checked:bg-primary bg-gray h-4 w-4 appearance-none rounded-full p-2 ring-offset-2 focus:ring-2"
          />
          <label htmlFor={"opt" + option.name.replace(" ", "-")}>
            {option.name}
          </label>
        </div>
      ))}
    </div>
  );
});

const style = cva(null, {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
  },
  defaultVariants: {
    direction: "row",
  },
});

type Props = {
  options: { name: string; value: string }[];
} & React.HTMLAttributes<HTMLInputElement>;
