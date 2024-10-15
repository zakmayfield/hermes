import { Meta, StoryObj } from "@storybook/react";
import { HeadingDemo } from "./Heading.demo";

const meta = {
  title: "Heading",
  component: HeadingDemo
} satisfies Meta<typeof HeadingDemo>;
export default meta;

export const Demo: StoryObj<typeof meta> = {};
