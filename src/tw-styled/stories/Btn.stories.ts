import { Meta, StoryObj } from "@storybook/react";
import { Btn } from "../components";

const meta = {
  title: "Buttons/Btn",
  component: Btn
} satisfies Meta<typeof Btn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Submit",
    style: {
      button: {
        bg: "bg-green-700",
        padding: "sm",
        rounded: "md"
      }
    }
  }
};
