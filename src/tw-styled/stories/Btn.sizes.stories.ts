import { Meta, StoryObj } from "@storybook/react";
import { Btn } from "@/tw-styled/components";

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
    isLoading: false,
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
      parentWrapper: {
        width: "full"
      },
      button: {
        buttonSize: "sm"
      }
    }
  }
};

export const Md: BtnSizesStory = {
  args: {
    text: "Submit",
    style: {
      parentWrapper: {
        width: "full"
      },
      button: {
        buttonSize: "md"
      }
    }
  }
};

export const Lg: BtnSizesStory = {
  args: {
    text: "Submit",
    style: {
      parentWrapper: {
        width: "full"
      },
      button: {
        buttonSize: "lg"
      }
    }
  }
};

export const Full: BtnSizesStory = {
  args: {
    text: "Submit",
    style: {
      parentWrapper: {
        width: "full"
      },
      button: {
        buttonSize: "full"
      }
    }
  }
};
