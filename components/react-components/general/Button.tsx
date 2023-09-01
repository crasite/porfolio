import React from "react";
import Icon, { type Props as IconProps } from "./Icon";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../utils";

export interface Props
  extends React.InputHTMLAttributes<HTMLInputElement>,
    ButtonVariantProps {
  className?: string;
  text?: string;
  icon?: IconProps["name"];
}

export default forwardRef<HTMLButtonElement, Props>(function Component(
  props: Props,
  ref,
) {
  const ButtonIcon = props.icon ? (
    <Icon name={props.icon} className="h-5 w-5" />
  ) : (
    <></>
  );
  const buttonClass = buttonCVA({
    intent: props.intent,
    className: props.className,
  });
  return (
    <button
      {...(props as any)}
      type="button"
      className={cn(buttonClass)}
      ref={ref}
    >
      {ButtonIcon}
      {props.text}
      {props.children}
    </button>
  );
});
const buttonCVA = cva(
  "text-text inline-flex w-full justify-center rounded-md px-4 py-1",
  {
    variants: {
      intent: {
        primary: "bg-primary hover:bg-primary/80 text-white",
        success: "bg-success hover:bg-success/80 text-white",
        danger: "bg-danger hover:bg-danger/80 text-white",
        transparent:
          "hover:border-gray border border-transparent bg-transparent text-black",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  },
);
type ButtonVariantProps = VariantProps<typeof buttonCVA>;
