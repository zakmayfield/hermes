import React from "react";
import { ThemeCtx } from "./theme";
import { Children } from "../types";

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
