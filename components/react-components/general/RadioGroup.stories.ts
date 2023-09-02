import Component from "./RadioGroup";
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
type Story = StoryObj<typeof Component>;

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "General/RadioGroup",
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
  },
  args: {
    onChange: (e: any) => action("onChange")(e.target.value),
    options: [
      {
        name: "Option 1",
        value: "option1",
      },
      {
        name: "Option 2",
        value: "option2",
      },
      {
        name: "Option 3",
        value: "option3",
      },
    ],
  },
} as Meta<typeof Component>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
