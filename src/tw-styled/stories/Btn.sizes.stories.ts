import { Meta, StoryObj } from "@storybook/react";
import { Btn } from "../components";

const meta = {
  title: "Btn/Sizes",
  component: Btn
} satisfies Meta<typeof Btn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Submit"
  }
};

export const Sm: Story = {
  args: {
    text: "Submit",
    style: {
      wrapper: {
        width: "full"
      },
      button: {
        buttonSize: "sm"
      }
    }
  }
};

export const Md: Story = {
  args: {
    text: "Submit",
    style: {
      wrapper: {
        width: "full"
      },
      button: {
        buttonSize: "md"
      }
    }
  }
};

export const Lg: Story = {
  args: {
    text: "Submit",
    style: {
      wrapper: {
        width: "full"
      },
      button: {
        buttonSize: "lg"
      }
    }
  }
};

export const Full: Story = {
  args: {
    text: "Submit",
    style: {
      wrapper: {
        width: "full"
      },
      button: {
        buttonSize: "full"
      }
    }
  }
};
