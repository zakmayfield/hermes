import { Wrapper } from "./Wrapper";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Wrapper",
  component: Wrapper,
  args: {
    children: <div>Wrapper Content</div>
  },
  argTypes: {
    style: {
      control: {
        disable: true
      }
    },
    as: {
      options: ["div", "aside", "section"],
      control: {
        type: "select"
      }
    },
    children: {
      options: ["a"],
      mapping: {
        a: [
          <div key={0}>
            content 1 <div>sub content 1 abcdefg</div>
          </div>,
          <div key={1}>
            content 2 <div>sub content 2 hijklmnop</div>
          </div>
        ]
      }
    }
  }
} satisfies Meta<typeof Wrapper>;

export default meta;
export type WrapperStory = StoryObj<typeof meta>;

export const Demo: WrapperStory = {
  args: {
    style: {
      parentWrapper: {
        border: "sm",
        padding: "lg",
        rounded: "md"
      },
      children: {
        border: "sm",
        padding: "lg",
        rounded: "md"
      },
      childrenWrapper: {
        border: "sm",
        padding: "lg",
        rounded: "md"
      }
    }
  }
};
