import Component from "./Input";
import { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof Component>;

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "General/Input",
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    intent: { control: "select", options: ["input", "static"] },
  },
  args: {
    placeholder: "Placeholder",
    intent: "input",
  },
} as Meta<typeof Component>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
export const Compact: Story = {
  args: {
    size: "compact",
  },
};
export const WithIcon: Story = {
  args: {
    icon: "magnifying-glass",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Disabled",
  },
};
