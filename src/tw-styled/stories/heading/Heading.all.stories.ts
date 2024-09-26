import { Meta, StoryObj } from "@storybook/react";
import { Headings } from "./Headings";

const meta = {
  title: "Heading/All",
  component: Headings
} satisfies Meta<typeof Headings>;
export default meta;

export const All: StoryObj<typeof meta> = {};
