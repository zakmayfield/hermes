import { Meta, StoryObj } from "@storybook/react";
import { Btn } from "../ui";

const meta = {
  title: "Btn/Size",
  component: Btn,
  argTypes: {
    variant: {
      options: ["primary", "warning", "ghost"]
    }
  },
  args: {
    isDisabled: false,
    text: "Submit"
  }
} satisfies Meta<typeof Btn>;

export default meta;
export type BtnSizesStory = StoryObj<typeof meta>;

export const Default: BtnSizesStory = {
  args: {
    text: "Submit"
  }
};

export const Sm: BtnSizesStory = {
  args: {
    text: "Submit",
    style: {
      parentWrapperStyles: {
        width: "full"
      },
      buttonStyles: {
        buttonSize: "sm"
      }
    }
  }
};

export const Md: BtnSizesStory = {
  args: {
    text: "Submit",
    style: {
      parentWrapperStyles: {
        width: "full"
      },
      buttonStyles: {
        buttonSize: "md"
      }
    }
  }
};

export const Lg: BtnSizesStory = {
  args: {
    text: "Submit",
    style: {
      parentWrapperStyles: {
        width: "full"
      },
      buttonStyles: {
        buttonSize: "lg"
      }
    }
  }
};

export const Full: BtnSizesStory = {
  args: {
    text: "Submit",
    style: {
      parentWrapperStyles: {
        width: "full"
      },
      buttonStyles: {
        buttonSize: "full"
      }
    }
  }
};
