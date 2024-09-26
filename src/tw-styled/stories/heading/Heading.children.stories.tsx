import { StoryObj } from "@storybook/react";
import headingMeta from "./meta";

const meta = {
  title: "Heading/Children",
  ...headingMeta
};
export default meta;
export type HeadingStory = StoryObj<typeof meta>;

export const WithChildren: HeadingStory = {
  args: {
    children: "Heading Text",
    style: {
      wrapper: {
        height: "md",
        border: "sm",
        flex: "row",
        flexPosition: "bottom-right"
      },
      childrenWrapper: {
        flex: "row",
        flexSpacing: "space-between",
        width: "sm",
        border: "sm"
      }
    }
  }
};