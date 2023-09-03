import Component from "./Calendar";
import { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof Component>;

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Advance/Calendar",
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onSelect: { action: "onSelect" },
  },
  args: {},
} as Meta<typeof Component>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};

export const WithTimePicker: Story = {
  args: {
    showTime: true,
  },
};

export const WithMinMax: Story = {
  args: {
    fromDate: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 7),
    toDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7),
  },
};
