import { Meta, StoryObj } from "@storybook/react";
import { NavbarDemo } from "./Navbar.demo";

const meta = {
  title: "Nav",
  component: NavbarDemo,
  argTypes: {
    childrenOptions: {
      control: {
        type: "select"
      },
      options: ["a", "b"]
    }
  }
} satisfies Meta<typeof NavbarDemo>;

export default meta;
export type NavStory = StoryObj<typeof meta>;

export const Demo: NavStory = {};
