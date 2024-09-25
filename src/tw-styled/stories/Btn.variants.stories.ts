import { Meta, StoryObj } from "@storybook/react";
import { Btn } from "../components";

const meta = {
  title: "Btn/Variants",
  component: Btn
} satisfies Meta<typeof Btn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Submit",
    variant: "primary",
    style: {
      button: {}
    }
  }
};

export const Warning: Story = {
  args: {
    text: "Submit",
    variant: "warning",
    style: {
      button: {}
    }
  }
};
export const Ghost: Story = {
  args: {
    text: "Submit",
    variant: "ghost",
    style: {
      button: {}
    }
  }
};
