import { CSSRuleObject } from "tailwindcss/types/config";
import { demo } from "./components";

type TwPluginRules = CSSRuleObject | CSSRuleObject[];

const components: TwPluginRules = {
  ...demo
};

export { components };
export type { TwPluginRules };
