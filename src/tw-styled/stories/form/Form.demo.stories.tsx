import { Meta, StoryObj } from "@storybook/react";
import { FormDemo } from "./FormDemo";

const meta = {
  title: "Form",
  component: FormDemo,
  argTypes: {
    fieldError: {
      options: [true, false],
      control: {
        type: "boolean"
      }
    },
    isPending: {
      options: [true, false],
      control: {
        type: "boolean"
      }
    },
    style: {
      control: {
        disable: true
      }
    },
    buttonProps: {
      control: {
        disable: true
      }
    }
  }
} satisfies Meta<typeof FormDemo>;

export default meta;
export type FormDemoStory = StoryObj<typeof meta>;

export const Demo: FormDemoStory = {
  args: {
    title: "Form Title",
    buttonProps: {
      width: "full",
      text: "Foobar",
      variant: "ghost"
    },
    style: {
      formStyles: {
        place: "center"
      }
    }
  }
};
