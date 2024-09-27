import { SpinLoader } from "@/tw-styled/components";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Loaders/Spin",
  component: SpinLoader
} satisfies Meta<typeof SpinLoader>;

export default meta;
export type SpinLoaderStory = StoryObj<typeof meta>;

export const Default: SpinLoaderStory = {};
