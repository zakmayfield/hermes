import { Btn } from "@/tw-styled/components";
import { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

const btnMeta = {
  component: Btn,
  argTypes: {
    variant: {
      options: ["primary", "warning", "ghost"]
    },
    isDisabled: {
      options: [true, false]
    },
    isLoading: {
      options: [true, false]
    },
    handleClick: fn()
  }
} satisfies Meta<typeof Btn>;

export default btnMeta;
