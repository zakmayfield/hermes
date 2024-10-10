import { CSSRuleObject } from "tailwindcss/types/config";
import { btnWidth, state, btnSize } from "./utilities";
import { btn, btnVariants, demo } from "./components";

export type TwPluginRules = CSSRuleObject | CSSRuleObject[];

const utilities: TwPluginRules = {
  ...state,
  ...btnSize,
  ...btnWidth
};

const components: TwPluginRules = {
  ...demo,
  ...btn,
  ...btnVariants
};

export { utilities, components };
