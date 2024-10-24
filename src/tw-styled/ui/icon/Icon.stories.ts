import { Meta, StoryObj } from "@storybook/react";
import { IconDemo } from "./Icon.demo";

const meta = {
  title: "Icon",
  component: IconDemo,
  argTypes: {
    fontSize: {
      options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"]
    }
  }
} satisfies Meta<typeof IconDemo>;

export default meta;
export type IconStory = StoryObj<typeof meta>;

export const Demo: IconStory = {};
