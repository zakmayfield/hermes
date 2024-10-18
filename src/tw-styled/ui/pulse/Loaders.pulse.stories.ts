import { Meta, StoryObj } from "@storybook/react";
import { Pulse } from "./Pulse";

const meta = {
  title: "Loaders/Pulse",
  component: Pulse
} satisfies Meta<typeof Pulse>;

export default meta;
export type PulseLoaderStory = StoryObj<typeof meta>;

export const Sm: PulseLoaderStory = {};
export const Md: PulseLoaderStory = {
  args: {
    size: "md",
    style: {
      parentWrapper: {
        width: "lg"
      }
    }
  }
};
export const Lg: PulseLoaderStory = {
  args: {
    size: "lg",
    style: {
      parentWrapper: {
        width: "xl"
      }
    }
  }
};
