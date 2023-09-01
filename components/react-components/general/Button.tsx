import React from "react";
import { forwardRef } from "react";
import { type PropsWithChildren } from "react";

export default forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (props, ref) => {
    return (
      <button type="button" ref={ref} {...props}>
        {props.children}
      </button>
    );
  }
);

type Props = {};
