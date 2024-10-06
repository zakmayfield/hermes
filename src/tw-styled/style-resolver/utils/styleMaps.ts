import { StylePropKeys } from "@/tw-styled/types";

const baseMap = {
  none: ""
};

export type MapGroupKeys =
  | "dimensions"
  | "layout"
  | "space"
  | "padding"
  | "margin"
  | "alignment"
  | "typography"
  | "background"
  | "animations"
  | "button"
  | "other";

export type StyleMap = Record<StylePropKeys, Record<string, string>>;

type Map = Partial<Record<MapGroupKeys, Partial<StyleMap>>>;

const dimensionsMap = {
  dimensions: {
    width: {
      ...baseMap,
      sm: "max-w-sm w-full",
      md: "max-w-lg w-full",
      lg: "max-w-2xl w-full",
      xl: "max-w-4xl w-full",
      "2xl": "max-w-6xl w-full",
      "3xl": "max-w-7xl w-full",
      full: "w-full"
    },
    height: {
      ...baseMap,
      sm: "min-h-[10rem]",
      md: "min-h-[15rem]",
      lg: "min-h-[20rem]",
      screen: "min-h-screen",
      full: "h-full"
    },
    maxHeight: {
      ...baseMap,
      sm: "max-h-[10rem]",
      md: "max-h-[15rem]",
      lg: "max-h-[20rem]"
    }
  }
};

const layoutMap = {
  layout: {
    border: {
      ...baseMap,
      sm: "border",
      md: "border-2",
      lg: "border-4"
    },
    rounded: {
      ...baseMap,
      sm: "rounded",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-3xl"
    },
    display: {
      ...baseMap,
      block: "block",
      inline: "inline",
      "inline-block": "inline-block",
      "inline-flex": "inline-flex",
      hidden: "hidden"
    },
    position: {
      ...baseMap,
      relative: "relative",
      absolute: "absolute",
      fixed: "fixed",
      sticky: "sticky",
      static: "static"
    },
    place: {
      ...baseMap,
      left: "mr-auto",
      center: "mx-auto",
      right: "ml-auto"
    }
  }
} satisfies Map;

const spaceMap = {
  space: {
    spaceY: {
      ...baseMap,
      sm: "space-y-2",
      md: "space-y-4",
      lg: "space-y-6"
    },
    spaceX: {
      ...baseMap,
      sm: "space-x-2",
      md: "space-x-4",
      lg: "space-x-4"
    },
    space: {
      ...baseMap,
      sm: "space-y-2 space-x-2",
      md: "space-y-4 space-x-4",
      lg: "space-y-6 space-x-6"
    }
  }
};

const paddingMap = {
  padding: {
    padding: {
      ...baseMap,
      zero: "p-0",
      sm: "p-2",
      md: "p-4",
      lg: "p-6"
    },

    paddingX: {
      ...baseMap,
      zero: "px-0",
      sm: "px-2",
      md: "px-4",
      lg: "px-6"
    },

    paddingY: {
      ...baseMap,
      zero: "py-0",
      sm: "py-2",
      md: "py-4",
      lg: "py-6"
    },

    paddingTop: {
      ...baseMap,
      zero: "pt-0",
      sm: "pt-2",
      md: "pt-4",
      lg: "pt-6"
    },

    paddingBottom: {
      ...baseMap,
      zero: "pb-0",
      sm: "pb-2",
      md: "pb-4",
      lg: "pb-6"
    },

    paddingLeft: {
      ...baseMap,
      zero: "pl-0",
      sm: "pl-2",
      md: "pl-4",
      lg: "pl-6"
    },

    paddingRight: {
      ...baseMap,
      zero: "pr-0",
      sm: "pr-2",
      md: "pr-4",
      lg: "pr-6"
    }
  }
} satisfies Map;

const marginMap = {
  margin: {
    margin: {
      ...baseMap,
      zero: "m-0",
      sm: "m-2",
      md: "m-4",
      lg: "m-6"
    },

    marginX: {
      ...baseMap,
      zero: "mx-0",
      sm: "mx-2",
      md: "mx-4",
      lg: "mx-6"
    },

    marginY: {
      ...baseMap,
      zero: "my-0",
      sm: "my-2",
      md: "my-4",
      lg: "my-6"
    },

    marginTop: {
      ...baseMap,
      zero: "mt-0",
      sm: "mt-2",
      md: "mt-4",
      lg: "mt-6"
    },

    marginBottom: {
      ...baseMap,
      zero: "mb-0",
      sm: "mb-2",
      md: "mb-4",
      lg: "mb-6"
    },

    marginLeft: {
      ...baseMap,
      zero: "ml-0",
      sm: "ml-2",
      md: "ml-4",
      lg: "ml-6"
    },

    marginRight: {
      ...baseMap,
      zero: "mr-0",
      sm: "mr-2",
      md: "mr-4",
      lg: "mr-6"
    }
  }
} satisfies Map;

const alignmentMap = {
  alignment: {
    flex: {
      ...baseMap,
      row: "flex flex-row",
      col: "flex flex-col"
    },
    flexSpacing: {
      ...baseMap,
      "space-between": "justify-between",
      "space-evenly": "justify-evenly",
      "space-around": "justify-around"
    },
    flexWrap: {
      ...baseMap,
      wrap: "flex-wrap",
      nowrap: "flex-nowrap"
    },
    flexSize: {
      ...baseMap,
      grow: "flex-grow",
      shrink: "flex-shrink",
      nogrow: "flex-grow-0",
      noshrink: "flex-shrink-0"
    },
    gap: {
      ...baseMap,
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6"
    },
    flexRowPosition: {
      ...baseMap,
      "top-left": "items-start",
      "center-left": "items-center justify-start",
      "bottom-left": "items-end",
      "top-center": "items-start justify-center",
      "center-center": "items-center justify-center",
      "bottom-center": "items-end justify-center",
      "top-right": "items-start justify-end",
      "center-right": "items-center justify-end",
      "bottom-right": "items-end justify-end"
    },
    flexColPosition: {
      ...baseMap,
      "top-left": "justify-start",
      "center-left": "justify-center",
      "bottom-left": "justify-end",
      "top-center": "items-center justify-start",
      "center-center": "items-center justify-center",
      "bottom-center": "items-center justify-end",
      "top-right": "items-end justify-start",
      "center-right": "items-end justify-end",
      "bottom-right": "items-end justify-end"
    }
  }
} satisfies Map;

const typographyMap = {
  typography: {
    fontSize: {
      ...baseMap,
      sm: "text-sm",
      md: "text-base",
      lg: "text-xl"
    },
    fontWeight: {
      ...baseMap,
      light: "font-light",
      normal: "font-normal",
      bold: "font-semibold"
    },
    textColor: {
      ...baseMap,
      disabled: "text-disabled"
    },
    textOpacity: {
      ...baseMap,
      light: "text-opacity-30",
      medium: "text-opacity-60",
      dark: "text-opacity-90",
      opaque: "text-opacity-100"
    },
    textDecoration: {
      ...baseMap,
      underline: "underline",
      "line-through": "line-through"
    },
    textAlign: {
      ...baseMap,
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify"
    },
    lineHeight: {
      ...baseMap,
      tight: "leading-tight",
      normal: "leading-normal",
      loose: "leading-loose"
    },
    letterSpacing: {
      ...baseMap,
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide"
    }
  }
} satisfies Map;

const backgroundMap = {
  background: {
    bgColor: {
      ...baseMap,
      primary: "bg-primary",
      "primary-shimmer": "bg-primary-shimmer",

      secondary: "bg-secondary",
      "secondary-shimmer": "bg-secondary-shimmer",

      tertiary: "bg-tertiary",
      "tertiary-shimmer": "bg-tertiary-shimmer",

      accent: "bg-accent",
      "accent-shimmer": "bg-accent-shimmer"
    },
    bgOpacity: {
      ...baseMap,
      light: "bg-opacity-30",
      medium: "bg-opacity-60",
      dark: "bg-opacity-90",
      opaque: "bg-opacity-100"
    }
  }
} satisfies Map;

const animationsMap = {
  animations: {
    animate: {
      ...baseMap,
      spin: "animate-spin",
      pulse: "animate-pulse"
    }
  }
} satisfies Map;

const buttonMap = {
  button: {
    buttonSize: {
      ...baseMap,
      sm: "max-w-[10rem] w-full min-h-[2.63rem]",
      md: "max-w-[15rem] w-full min-h-[2.75rem]",
      lg: "max-w-[20rem] w-full min-h-[2.87rem]",
      full: "w-full min-h-[2.75rem]"
    },
    buttonWidth: {
      ...baseMap,
      sm: "max-w-[10rem] w-full",
      md: "max-w-[15rem] w-full",
      lg: "max-w-[20rem] w-full",
      full: "w-full"
    },
    buttonHeight: {
      ...baseMap,
      sm: "min-h-[2.63rem]",
      md: "min-h-[2.75rem]",
      lg: "min-h-[2.87rem]"
    },
    buttonVariant: {
      ...baseMap,
      ghost: "btn-ghost",
      primary: "btn-primary",
      warning: "btn-warning"
    }
  }
} satisfies Map;

const otherMap = {
  other: {
    cursor: {
      ...baseMap,
      pointer: "cursor-pointer",
      "not-allowed": "cursor-not-allowed"
    },
    opacity: {
      ...baseMap,
      light: "opacity-30",
      medium: "opacity-60",
      dark: "opacity-90",
      opaque: "opacity-100"
    }
  }
} satisfies Map;

export {
  dimensionsMap,
  layoutMap,
  spaceMap,
  paddingMap,
  marginMap,
  alignmentMap,
  typographyMap,
  backgroundMap,
  animationsMap,
  buttonMap,
  otherMap
};
