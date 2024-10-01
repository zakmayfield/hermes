import { Meta, StoryObj } from "@storybook/react";
import { LayoutDemo } from "./LayoutDemo";

const meta = {
  title: "Layout",
  component: LayoutDemo,
  argTypes: {
    children: {
      options: ["1", "2", "3"],
      control: {
        type: "select"
      }
    },
    headingAs: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"]
    },
    style: {
      control: {
        disable: true
      }
    }
  },
  args: {
    style: {
      parentWrapper: {
        rounded: "lg",
        height: "screen",
        className: "border-orange-500"
      },
      childrenWrapper: {
        rounded: "md",
        className: "border-blue-500"
      },
      children: {
        rounded: "md",
        className: "border-red-500"
      },
      headingWrapper: {
        rounded: "md",
        flex: "col",
        gap: "sm",
        className: "border-green-500"
      },
      headingChildren: {
        rounded: "md",
        flex: "row",
        flexRowPosition: "center-left",
        className: "border-pink-400"
      }
    }
  }
} satisfies Meta<typeof LayoutDemo>;
export default meta;

export const Demo: StoryObj<typeof meta> = {};

export const DemoWithSpacing: StoryObj<typeof meta> = {
  args: {
    borders: true,
    children: "2",
    style: {
      parentWrapper: {
        ...meta.args.style.parentWrapper,
        padding: "md"
      },
      childrenWrapper: {
        ...meta.args.style.childrenWrapper,
        padding: "md",
        flex: "row",
        flexWrap: "nowrap"
      },
      children: {
        ...meta.args.style.children,
        padding: "md"
      },
      headingWrapper: {
        ...meta.args.style.headingWrapper,
        padding: "md"
      },
      headingChildren: {
        ...meta.args.style.headingChildren,
        padding: "md"
      }
    }
  }
};
