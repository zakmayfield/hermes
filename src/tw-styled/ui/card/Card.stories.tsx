import { Meta, StoryObj } from "@storybook/react";
import { CardDemo } from "./Card.demo";

const meta = {
  title: "Card",
  component: CardDemo
} satisfies Meta<typeof CardDemo>;

export default meta;
export type CardStory = StoryObj<typeof meta>;

export const Default: CardStory = {};
