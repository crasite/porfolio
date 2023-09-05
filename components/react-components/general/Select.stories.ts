import Component from "./Select";
import { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof Component>;

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "General/Select",
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: { action: "onChange" },
    background: { control: "select", options: ["default", "primary"] },
  },
  args: {
    list: [
      { key: "1", label: "Option 1" },
      { key: "2", label: "Option 2" },
      { key: "3", label: "Option 3" },
    ],
    by: "key",
    label: "Selection",
    multiple: false,
    buttonClassName: "w-[20vw] justify-center",
  },
} as Meta<typeof Component>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};

export const Multiple: Story = {
  args: {
    multiple: true,
  },
};
