import { StoryObj } from "@storybook/react";
import layoutMeta from "./meta";

const meta = {
  title: "Layout/Default",
  ...layoutMeta
};
export default meta;
export type LayoutStory = StoryObj<typeof meta>;

export const Default: LayoutStory = {
  args: {
    title: "Layout Title",
    children: "Layout Children",
    style: {
      wrapper: {
        border: "sm",
        rounded: "lg",
        height: "screen"
      },
      heading: {
        border: "sm",
        rounded: "md"
      },
      children: {
        border: "sm",
        rounded: "md"
      }
    }
  }
};
