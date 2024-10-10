import { TwPluginRules } from "./config";

const state: TwPluginRules = {
  ".element-disabled": {
    filter: "brightness(1)",
    opacity: "0.6"
  },
  ".element-hovered": {
    filter: "brightness(1.15)"
  }
};

const btnSize: TwPluginRules = {
  ".btn-sm": {
    maxWidth: "10rem",
    width: "100%",
    minHeight: "2.63rem"
  },
  ".btn-md": {
    maxWidth: "15rem",
    width: "100%",
    minHeight: "2.75rem"
  },
  ".btn-lg": {
    maxWidth: "20rem",
    width: "100%",
    minHeight: "2.87rem"
  }
};

const btnWidth: TwPluginRules = {
  ".btn-w-sm": {
    maxWidth: "10rem",
    width: "100%"
  },
  ".btn-w-md": {
    maxWidth: "15rem",
    width: "100%"
  },
  ".btn-w-lg": {
    maxWidth: "20rem",
    width: "100%"
  },
  ".btn-w-full": {
    width: "100%"
  }
};

export { state, btnSize, btnWidth };
