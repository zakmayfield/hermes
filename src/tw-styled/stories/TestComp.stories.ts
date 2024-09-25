import { Meta, StoryObj } from "@storybook/react";
import { TestComp } from "../components/TestComp";

const meta = {
  title: "Example/Test Comp",
  component: TestComp
} satisfies Meta<typeof TestComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const First: Story = {
  args: {
    style: {
      x: "hello there",
      y: "general kenobi"
    }
  }
};
