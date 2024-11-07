import React from "react";
import { themeCtx, ThemeCtx } from "./themeCtx";

export const ThemeContext = React.createContext<ThemeCtx>(themeCtx);

export const ThemeProvider = ({
  theme,
  children
}: {
  theme: any;
  children: React.ReactNode;
}) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useThemeCtx = () => {
  const theme = React.useContext(ThemeContext);

  return theme;
};
