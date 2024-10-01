import { Wrapper } from "@/tw-styled/components";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Wrapper",
  component: Wrapper,
  argTypes: {
    children: {
      options: ["a"],
      mapping: {
        a: [
          <div>
            content 1 <div>sub content 1</div>
          </div>,
          <div>
            content 2 <div>sub content 2</div>
          </div>
        ]
      }
    }
  },
  args: {
    children: "Wrapper content"
  }
} satisfies Meta<typeof Wrapper>;

export default meta;
export type WrapperStory = StoryObj<typeof meta>;

export const Col: WrapperStory = {
  args: {
    style: {
      parentWrapper: {
        border: "sm",
        rounded: "sm"
      },
      childrenWrapper: {
        border: "sm",
        rounded: "sm"
      }
    }
  }
};

export const Row: WrapperStory = {
  args: {
    style: {
      parentWrapper: {
        border: "sm",
        rounded: "sm"
      },
      childrenWrapper: {
        border: "sm",
        rounded: "sm",
        flex: "row"
      }
    }
  }
};
