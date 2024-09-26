import { StoryObj } from "@storybook/react";
import btnMeta from "./meta";

const meta = {
  title: "Btn/State",
  ...btnMeta
};
export default meta;
export type BtnStory = StoryObj<typeof meta>;

export const Disabled: BtnStory = {
  args: {
    variant: "primary",
    isDisabled: true
  }
};

export const Loading: BtnStory = {
  args: {
    variant: "primary",
    isLoading: true,
    style: {
      button: {
        buttonSize: "sm"
      }
    }
  }
};
