import Component from "./login";
import { Meta } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "SamplePage/Login",
  component: Component,
  parameters: {},
  argTypes: {},
} as Meta<typeof Component>;

export const Primary = {
  args: {},
};
