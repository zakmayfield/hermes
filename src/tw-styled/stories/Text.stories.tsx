import { Text } from "@/tw-styled/components";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Text/Default",
  component: Text,
  argTypes: {
    children: {
      options: ["a"],
      mapping: {
        a: [<div>text content 1</div>, <div>text content 2</div>]
      }
    }
  },
  args: {
    children: "Text content"
  }
} satisfies Meta<typeof Text>;

export default meta;
export type TextStory = StoryObj<typeof meta>;

export const POrSpan: TextStory = {};
