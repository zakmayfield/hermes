import { Text } from "./Text";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam laudantium recusandae, numquam ea quisquam sequi repellat consectetur omnis aut laboriosam nemo explicabo delectus, a corrupti distinctio? Totam, eos nam. Porro!"
  }
} satisfies Meta<typeof Text>;

export default meta;
export type TextStory = StoryObj<typeof meta>;

export const Demo: TextStory = {
  args: {
    style: {
      parentWrapper: {
        border: "sm",
        padding: "lg",
        borderRadius: "lg",
        backgroundColor: "primary",
        lineHeight: "tight"
      }
    }
  }
};
