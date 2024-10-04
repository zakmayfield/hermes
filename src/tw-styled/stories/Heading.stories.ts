import { Meta, StoryObj } from "@storybook/react";
import { HeadingDemo } from "./HeadingDemo";

const meta = {
  title: "Heading",
  component: HeadingDemo
} satisfies Meta<typeof HeadingDemo>;
export default meta;

export const All: StoryObj<typeof meta> = {};
