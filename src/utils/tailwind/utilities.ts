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
    height: "2.63rem"
  },
  ".btn-md": {
    maxWidth: "15rem",
    width: "100%",
    height: "2.93rem"
  },
  ".btn-lg": {
    maxWidth: "20rem",
    width: "100%",
    height: "3.13rem"
  }
};

export { state, btnSize };
