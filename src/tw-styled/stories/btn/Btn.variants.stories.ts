import { StoryObj } from "@storybook/react";
import btnMeta from "./meta";

const meta = {
  title: "Btn/Variants",
  ...btnMeta
};
export default meta;
export type BtnStory = StoryObj<typeof meta>;

export const Primary: BtnStory = {
  args: {
    text: "Submit",
    variant: "primary"
  }
};

export const Warning: BtnStory = {
  args: {
    text: "Submit",
    variant: "warning"
  }
};

export const Ghost: BtnStory = {
  args: {
    text: "Submit",
    variant: "ghost"
  }
};
