import React from "react";
import { Children } from "../types";
import { ThemeCtx } from "./themeCtx";

export const ThemeContext = React.createContext<ThemeCtx | null>(null);

export const ThemeProvider = ({
  theme,
  children
}: {
  theme: any;
  children: Children;
}) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
