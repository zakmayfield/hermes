import { Meta, StoryObj } from "@storybook/react";
import { FormFieldDemo } from "./FormField.demo";

const meta = {
  title: "Form Field",
  component: FormFieldDemo
} satisfies Meta<typeof FormFieldDemo>;
export default meta;

export const Demo: StoryObj<typeof meta> = {
  argTypes: {
    errorMessage: {
      control: "boolean"
    }
  }
};
