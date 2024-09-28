import { Btn } from "@/tw-styled/components";
import { Meta } from "@storybook/react";

enum Variants {
  GHOST = "ghost"
}

const btnMeta = {
  component: Btn,
  argTypes: {
    variant: {
      options: ["primary", "warning", "ghost"]
    }
  },
  args: {
    isDisabled: false,
    isLoading: false
  }
} satisfies Meta<typeof Btn>;

export default btnMeta;
