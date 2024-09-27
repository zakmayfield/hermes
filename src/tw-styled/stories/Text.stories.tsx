import { Text } from "@/tw-styled/components";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Text/Default",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam laudantium recusandae, numquam ea quisquam sequi repellat consectetur omnis aut laboriosam nemo explicabo delectus, a corrupti distinctio? Totam, eos nam. Porro!"
  }
} satisfies Meta<typeof Text>;

export default meta;
export type TextStory = StoryObj<typeof meta>;

export const POrSpan: TextStory = {};
