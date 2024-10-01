import { Meta, StoryObj } from "@storybook/react";
import { Btn } from "@/tw-styled/components";

const meta = {
  title: "Btn/Variant",
  component: Btn,
  argTypes: {
    variant: {
      options: ["primary", "warning", "ghost"]
    }
  },
  args: {
    isDisabled: false,
    isLoading: false,
    text: "Submit"
  }
} satisfies Meta<typeof Btn>;

export default meta;
export type BtnVariantStory = StoryObj<typeof meta>;

export const Primary: BtnVariantStory = {
  args: {
    text: "Submit",
    variant: "primary"
  }
};

export const Warning: BtnVariantStory = {
  args: {
    text: "Submit",
    variant: "warning"
  }
};

export const Ghost: BtnVariantStory = {
  args: {
    text: "Submit",
    variant: "ghost"
  }
};
