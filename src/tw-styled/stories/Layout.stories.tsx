import { Meta, StoryObj } from "@storybook/react";
import { Layout } from "../ui";

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
        a: [<div>Content 1</div>],
        b: [<div>Content 1</div>, <div>Content 2</div>],
        c: [<div>Content 1</div>, <div>Content 2</div>, <div>Content 3</div>]
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

export const Default: StoryObj<typeof meta> = {
  args: {
    style: {
      parentWrapper: {
        rounded: "lg",
        border: "sm",
        className: "border-orange-500"
      },
      headingWrapper: {
        rounded: "lg",
        border: "sm"
      },
      heading: {},
      headingChildren: {},
      childrenWrapper: {
        rounded: "lg",
        border: "sm",
        className: "border-blue-500"
      },
      children: {
        rounded: "lg",
        border: "sm",
        padding: "sm",
        className: "border-red-500"
      }
    }
  }
};
