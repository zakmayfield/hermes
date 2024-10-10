import { Meta, StoryObj } from "@storybook/react";
import { BtnDemo } from "./Btn.demo";

const meta = {
  title: "Btn",
  component: BtnDemo
} satisfies Meta<typeof BtnDemo>;

export default meta;
export type BtnDemoStory = StoryObj<typeof meta>;

export const Demo: BtnDemoStory = {};
