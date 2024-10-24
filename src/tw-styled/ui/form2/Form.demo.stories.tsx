import { Meta, StoryObj } from "@storybook/react";
import { FormDemo } from "./Form.demo";

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
      text: "Foobar",
      variant: "ghost"
    },
    style: {
      formStyles: {
        place: "center"
      },
      buttonStyles: {
        width: "full"
      }
    }
  }
};
