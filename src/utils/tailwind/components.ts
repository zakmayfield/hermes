import { TwPluginRules } from "./config";

const demo: TwPluginRules = {
  ".demo": {
    padding: "1.5rem",
    borderRadius: "0.375rem",
    borderWidth: "1px"
  },
  ".demo-col": {
    padding: "1.5rem",
    borderRadius: "0.375rem",
    borderWidth: "1px",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  },
  ".demo-row": {
    padding: "1.5rem",
    borderRadius: "0.375rem",
    borderWidth: "1px",
    display: "flex",
    flexDirection: "row",
    gap: "0.75rem"
  }
};

export { demo };
