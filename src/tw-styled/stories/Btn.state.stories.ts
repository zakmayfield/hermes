import { Meta, StoryObj } from "@storybook/react";
import { Btn } from "../ui";

const meta = {
  title: "Btn/State",
  component: Btn,
  argTypes: {
    variant: {
      options: ["primary", "warning", "ghost"]
    }
  },
  args: {
    isDisabled: false,
    text: "Submit"
  }
} satisfies Meta<typeof Btn>;

export default meta;
export type BtnStateStory = StoryObj<typeof meta>;

export const Disabled: BtnStateStory = {
  args: {
    variant: "primary",
    isDisabled: true
  }
};
