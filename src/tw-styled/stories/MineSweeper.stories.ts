import { Meta, StoryObj } from "@storybook/react";
import { MineSweeper } from "./MineSweeper";

const meta = {
  title: "Mine Sweeper",
  component: MineSweeper
} satisfies Meta<typeof MineSweeper>;

export default meta;
export type MineSweeperStory = StoryObj<typeof meta>;

export const Minesweeper: MineSweeperStory = {};
