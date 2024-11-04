import { Meta, StoryObj } from "@storybook/react";
import { ComponentsDemo } from "./Components.demo";

const meta = {
  title: "Components Demo",
  component: ComponentsDemo
} satisfies Meta<typeof ComponentsDemo>;

export default meta;
export type ComponentsDemoStory = StoryObj<typeof meta>;

export const Demo: ComponentsDemoStory = {};
