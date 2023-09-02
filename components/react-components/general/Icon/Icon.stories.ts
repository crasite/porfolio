import Component from "./index";
import { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof Component>;

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "General/Icon",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof Component>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Close: Story = {
  args: {
    name: "close",
  },
};
export const User: Story = {
  args: {
    name: "user",
  },
};
export const Alert: Story = {
  args: {
    name: "alert",
  },
};
export const Funnel: Story = {
  args: {
    name: "funnel",
  },
};
export const Bin: Story = {
  args: {
    name: "bin",
  },
};
export const ChevronDown: Story = {
  args: {
    name: "chevron-down",
  },
};
export const ChevronUp: Story = {
  args: {
    name: "chevron-up",
  },
};
export const MagnifyingGlass: Story = {
  args: {
    name: "magnifying-glass",
  },
};
export const Pencil: Story = {
  args: {
    name: "pencil",
  },
};
