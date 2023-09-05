import React from "react";
import Icon, { type Props as IconProps } from "./Icon";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../utils";

export default forwardRef<HTMLButtonElement, Props>(function Component(
  { buttonStyle, className, intent, text, children, ...props }: Props,
  ref,
) {
  const ButtonIcon = props.icon ? (
    <Icon name={props.icon} className="h-5 w-5" />
  ) : (
    <></>
  );
  const buttonClass = buttonCVA({
    intent: intent,
    buttonStyle: buttonStyle,
    className: className,
  });
  return (
    <button {...props} type="button" className={cn(buttonClass)} ref={ref}>
      {ButtonIcon}
      {text}
      {children}
    </button>
  );
});
const buttonCVA = cva(
  "text-text inline-flex w-full justify-center rounded-md px-4 py-1 transition-colors",
  {
    variants: {
      intent: {
        primary: null,
        success: null,
        danger: null,
      },
      buttonStyle: {
        solid: null,
        outline: "border",
        ghost:
          "hover:border-gray hover:bg-gray/10 border border-transparent bg-transparent text-black",
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        buttonStyle: "solid",
        class: "bg-primary hover:bg-primary/80 text-white",
      },
      {
        intent: "success",
        buttonStyle: "solid",
        class: "bg-success hover:bg-success/80 text-white",
      },
      {
        intent: "danger",
        buttonStyle: "solid",
        class: "bg-danger hover:bg-danger/80 text-white",
      },
      {
        intent: "primary",
        buttonStyle: "outline",
        class: "border-primary hover:bg-primary/10",
      },
      {
        intent: "success",
        buttonStyle: "outline",
        class: "border-success hover:bg-success/10",
      },
      {
        intent: "danger",
        buttonStyle: "outline",
        class: "border-danger hover:bg-danger/10",
      },
    ],
    defaultVariants: {
      intent: "primary",
      buttonStyle: "solid",
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonCVA>;

export type Props = {
  className?: string;
  text?: string;
  icon?: IconProps["name"];
} & ButtonVariantProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
