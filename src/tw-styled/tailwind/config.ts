import { CSSRuleObject } from "tailwindcss/types/config";
import { state, btnSize } from "./utilities";
import { btn, btnVariants, demo } from "./components";

type TwPluginRules = CSSRuleObject | CSSRuleObject[];

const utilities: TwPluginRules = {
  ...state,
  ...btnSize
};

const components: TwPluginRules = {
  ...demo,
  ...btn,
  ...btnVariants
};

export { utilities, components };
export type { TwPluginRules };
