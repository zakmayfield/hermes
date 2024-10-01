import { Meta, StoryObj } from "@storybook/react";
import { Headings } from "./Headings";

const meta = {
  title: "Headings",
  component: Headings
} satisfies Meta<typeof Headings>;
export default meta;

export const All: StoryObj<typeof meta> = {};
