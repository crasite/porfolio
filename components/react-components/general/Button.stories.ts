import Component from "./Button";
import { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof Component>;

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "General/Button",
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Component>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
  },
};
export const Success: Story = {
  args: {
    children: "Button",
    intent: "success",
  },
};
export const Danger: Story = {
  args: {
    children: "Button",
    intent: "danger",
  },
};
export const Ghost: Story = {
  args: {
    children: "Button",
    buttonStyle: "ghost",
  },
};
export const Outline: Story = {
  args: {
    children: "Button",
    intent: "primary",
    buttonStyle: "outline",
  },
};
