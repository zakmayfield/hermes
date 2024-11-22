import { Meta, StoryObj } from "@storybook/react";
import { SidebarNavigationDemo } from "./SidebarNavigation.demo";

const meta = {
  title: "Sidebar Navigation Demo",
  component: SidebarNavigationDemo
} satisfies Meta<typeof SidebarNavigationDemo>;

export default meta;
export type SidebarNavigationDemoStory = StoryObj<typeof meta>;

export const Demo: SidebarNavigationDemoStory = {};
