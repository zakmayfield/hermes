import { Meta, StoryObj } from "@storybook/react";
import { Btn } from "../components";

const meta = {
  title: "Btn/State",
  component: Btn
} satisfies Meta<typeof Btn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    variant: "primary",
    isDisabled: true
  }
};

export const Loading: Story = {
  args: {
    variant: "primary",
    isLoading: true
  }
};
