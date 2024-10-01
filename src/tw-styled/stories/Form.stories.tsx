import { Form } from "@/tw-styled/components";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Form",
  component: Form
} satisfies Meta<typeof Form>;

export default meta;
export type FormStory = StoryObj<typeof meta>;

export const Default: FormStory = {};
