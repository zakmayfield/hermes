import { Meta, StoryObj } from "@storybook/react";
import { ButtonDemo } from "./Button.demo";

const meta = {
  title: "Button",
  component: ButtonDemo
} satisfies Meta<typeof ButtonDemo>;

export default meta;
export type ButtonDemoStory = StoryObj<typeof meta>;

export const Demo: ButtonDemoStory = {};
