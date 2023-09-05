import React from "react";
import Component from "./Popover";
import { action } from "@storybook/addon-actions";
import Input from "./Input";
import { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof Component>;

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Advance/Popover",
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    position: {
      control: "select",
      options: ["left", "right", "center"],
    },
    open: {
      control: "select",
      options: [true, false, undefined],
    },
  },
  args: {
    name: "Container",
    children: (
      <>
        <Component.Group
          options={[
            { label: "Opt 1", value: "1" },
            { label: "Opt 2", value: "2" },
            { label: "Opt 3", value: "3" },
          ]}
          onChange={action("onChange")}
          value={["1"]}
        />
        <Component.Group
          label="Group 1"
          options={[
            { label: "Opt 1", value: "A1" },
            { label: "Opt 2", value: "A2" },
            { label: "Opt 3", value: "A3" },
          ]}
          onChange={action("onChange")}
        />
        <Component.Group
          label="Group 2"
          options={[
            { label: "Opt 1", value: "B1" },
            { label: "Opt 2", value: "B2" },
            { label: "Opt 3", value: "B3" },
          ]}
          onChange={action("onChange")}
        />
      </>
    ),
  },
} as Meta<typeof Component>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {},
};
export const CustomToggle = {
  args: {
    onToggle: action("onToggle"),
    open: true,
  },
};
export const CustomLabel = {
  args: {
    label: "Label",
  },
};

export const WithOther = {
  args: {
    children: (
      <>
        <Component.Group
          label="Group 1"
          options={[
            { label: "Opt 1", value: "A1", id: "optA1" },
            { label: "Opt 2", value: "A2", id: "optA2" },
            { label: "Opt 3", value: "A3", id: "optA3" },
          ]}
          onChange={action("onChange")}
        />
        <Component.Other className="p-2">
          <Input placeholder="Other" onChange={action("Input")} />
        </Component.Other>
      </>
    ),
  },
};

export const CustomPositioning: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    position: "center",
    children: (
      <div className="w-[20vw]">
        <Component.Group
          label="Group 1"
          options={[
            { label: "Opt 1", value: "A1", id: "optA1" },
            { label: "Opt 2", value: "A2", id: "optA2" },
            { label: "Opt 3", value: "A3", id: "optA3" },
          ]}
          onChange={action("onChange")}
        />
        <Component.Other className="p-2">
          <Input placeholder="Other" onChange={action("Input")} />
        </Component.Other>
      </div>
    ),
  },
};

export const WithExternalOpen = {
  args: {
    open: true,
    children: (
      <>
        <Component.Group
          options={[
            { label: "Opt 1", value: "A1" },
            { label: "Opt 2", value: "A2" },
            { label: "Opt 3", value: "A3" },
          ]}
          onChange={action("onChange")}
        />
      </>
    ),
  },
};

export const WithoutChevron: Story = {
  args: {
    displayChevron: false,
    children: (
      <>
        <Component.Group
          options={[
            { label: "Opt 1", value: "A1" },
            { label: "Opt 2", value: "A2" },
            { label: "Opt 3", value: "A3" },
          ]}
          onChange={action("onChange")}
        />
      </>
    ),
  },
};
