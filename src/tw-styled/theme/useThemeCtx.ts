import React from "react";
import { ThemeContext } from "./ThemeProvider";

export const useThemeCtx = () => {
  const theme = React.useContext(ThemeContext);

  return theme;
};
