import { Layout } from "./Layout";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Layout",
  component: Layout,
  args: {
    title: "Layout Title",
    headingChildren: "Sub Title",
    children: "Child"
  },
  argTypes: {
    headingAs: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"]
    },
    children: {
      options: ["a", "b", "c"],
      mapping: {
        a: [<div key={0}>Content 1</div>],
        b: [<div key={0}>Content 1</div>, <div key={1}>Content 2</div>],
        c: [
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
    },
    headingChildren: {
      control: {
        disable: true
      }
    }
  }
} satisfies Meta<typeof Layout>;
export default meta;

export const Demo: StoryObj<typeof meta> = {
  args: {
    style: {
      parentWrapper: {
        borderRadius: "lg",
        border: "sm",
        className: "border-orange-500"
      },
      headingWrapper: {
        borderRadius: "lg",
        border: "sm",
        padding: "lg"
      },
      heading: {},
      headingChildren: {},
      childrenWrapper: {
        borderRadius: "lg",
        border: "sm",
        className: "border-blue-500"
      },
      children: {
        borderRadius: "lg",
        border: "sm",
        padding: "sm",
        className: "border-red-500"
      }
    }
  }
};
