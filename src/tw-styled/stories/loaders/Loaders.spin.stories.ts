import { Spin } from "@/tw-styled/components";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Loaders/Spin",
  component: Spin
} satisfies Meta<typeof Spin>;

export default meta;
export type SpinLoaderStory = StoryObj<typeof meta>;

export const Default: SpinLoaderStory = {};
