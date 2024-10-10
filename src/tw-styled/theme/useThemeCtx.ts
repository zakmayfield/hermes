import React from "react";
import { ThemeContext } from "./ThemeProvider";
import { ThemeBuckets } from "./themeCtx";

export const useThemeCtx = <Key extends ThemeBuckets>(props?: { key?: Key }) => {
  const theme = React.useContext(ThemeContext);

  if (props?.key) {
    return theme[props.key];
  }

  return theme;
};
