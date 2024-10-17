import { Meta, StoryObj } from "@storybook/react";
import { Nav } from "./Nav";

const meta = {
  title: "Nav",
  component: Nav
} satisfies Meta<typeof Nav>;

export default meta;
export type NavStory = StoryObj<typeof meta>;

export const Default: NavStory = {};
