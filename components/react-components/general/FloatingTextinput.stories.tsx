import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import FloatingTextinput from "./FloatingTextinput";
type Story = StoryObj<typeof meta>;

const meta: Meta<typeof FloatingTextinput> = {
  title: "general/FloatingTextinput",
  component: FloatingTextinput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: { control: "radio", options: ["text", "password"] },
    onChange: { action: "onChange" },
  },
  args: {
    type: "text",
    id: "floating-textinput",
    placeholder: "Placeholder",
  },
  render: (args) => (
    <div className="bg-gradient-to-r from-red-300 via-blue-500 to-green-300 p-10">
      <FloatingTextinput {...args} />
    </div>
  ),
} as Meta<typeof FloatingTextinput>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};

export const FloatOff: Story = {
  args: {
    floatOff: true,
  },
};
