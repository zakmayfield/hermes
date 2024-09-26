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
    children: [<p key={0}>Child 1</p>, <p key={1}>Child 2</p>],
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
