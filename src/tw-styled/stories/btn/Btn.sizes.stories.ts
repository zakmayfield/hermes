import { StoryObj } from "@storybook/react";
import btnMeta from "./meta";

const meta = {
  title: "Btn/Sizes",
  ...btnMeta
};
export default meta;
export type BtnStory = StoryObj<typeof meta>;

export const Default: BtnStory = {
  args: {
    text: "Submit"
  }
};

export const Sm: BtnStory = {
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

export const Md: BtnStory = {
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

export const Lg: BtnStory = {
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

export const Full: BtnStory = {
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
