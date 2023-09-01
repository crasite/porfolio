import Component from "./register";
import { Meta } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "SamplePage/Register",
  component: Component,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Component>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {},
};
