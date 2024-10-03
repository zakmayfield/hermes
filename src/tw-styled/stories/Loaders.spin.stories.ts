import { Meta, StoryObj } from "@storybook/react";
import { Spin } from "../ui";

const meta = {
  title: "Loaders/Spin",
  component: Spin
} satisfies Meta<typeof Spin>;

export default meta;
export type SpinLoaderStory = StoryObj<typeof meta>;

export const Default: SpinLoaderStory = {};
