import { Meta, StoryObj } from "@storybook/react";
import { StylesDemo } from "./StylesDemo";

const meta = {
  title: "Styles",
  component: StylesDemo
} satisfies Meta<typeof StylesDemo>;

export default meta;
export type StylesDemoStory = StoryObj<typeof meta>;

export const Demo: StylesDemoStory = {};
