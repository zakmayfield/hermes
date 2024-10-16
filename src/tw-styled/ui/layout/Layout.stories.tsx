import { Layout } from "./Layout";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Layout",
  component: Layout,
  argTypes: {
    children: {
      options: ["a"],
      mapping: {
        a: [
          <div key={0}>Content 1</div>,
          <div key={1}>Content 2</div>,
          <div key={2}>Content 3</div>
        ]
      }
    },
    style: {
      control: {
        disable: true
      }
    }
  }
} satisfies Meta<typeof Layout>;
export default meta;

export const Demo: StoryObj<typeof meta> = {
  args: {
    options: {
      as: "div",
      titleAs: "h1",
      titleText: "Foobar"
    },
    children: <div>Child Content</div>,
    style: {
      parentWrapper: {
        border: "lg",
        borderRadius: "lg",
        height: "screen",
        className: "border-orange-500"
      },
      titleWrapper: {
        border: "lg",
        borderRadius: "lg",
        className: "border-yellow-300"
      },
      title: {
        border: "lg",
        borderRadius: "lg",
        className: "border-indigo-700"
      },
      childrenWrapper: {
        border: "lg",
        borderRadius: "lg",
        className: "border-red-700"
      },
      children: {
        border: "lg",
        borderRadius: "lg",
        padding: "sm",
        className: "border-indigo-700"
      }
    }
  }
};
