import { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";

const meta = {
  title: "Box",
  component: Box
} satisfies Meta<typeof Box>;

export default meta;
export type BoxStory = StoryObj<typeof meta>;

export const Default: BoxStory = {
  args: {
    children: "Hello World",
    style: {
      wrapper: {
        className: "demo"
      }
    }
  }
};
