import React, { forwardRef } from "react";

export default forwardRef<HTMLInputElement, {}>((props, ref) => {
  return <input type="checkbox" ref={ref} {...props} />;
});
