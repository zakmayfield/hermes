import { Meta, StoryObj } from "@storybook/react";

import { BtnDemo } from "./BtnDemo";

const meta = {
  title: "Btn/Demo",
  component: BtnDemo
} satisfies Meta<typeof BtnDemo>;

export default meta;
export type BtnDemoStory = StoryObj<typeof meta>;

export const Demo: BtnDemoStory = {};
