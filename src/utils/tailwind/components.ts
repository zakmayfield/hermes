import { TwPluginRules } from "./config";
import { rgb } from "./useRgb";

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

const btn: TwPluginRules = {
  ".btn": {
    padding: "0.25rem 0.5rem",
    borderRadius: "0.375rem",
    "&:hover": {
      filter: "brightness(1.15)"
    },
    "&:disabled": {
      filter: "brightness(1)",
      opacity: "0.7"
    }
  }
};

const btnVariants: TwPluginRules = {
  ".btn-ghost": {
    borderWidth: "1px",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: rgb("--ghost")
    },
    "&:disabled": {
      backgroundColor: "transparent"
    }
  },
  ".btn-blue": {
    backgroundColor: rgb("--theme-blue-base")
  },
  ".btn-red": {
    backgroundColor: rgb("--theme-red-base")
  },
  ".btn-green": {
    backgroundColor: rgb("--theme-green-base")
  }
};

export { demo, btn, btnVariants };
