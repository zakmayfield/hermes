"use client";

import { useThemeCtx } from "@/tw-styled/theme";
import { useEffect } from "react";

export const TestingContext = () => {
  const theme = useThemeCtx({ key: "colors" });

  useEffect(() => {
    console.log({ theme });
  }, [theme]);

  return <div className="demo">TestingContext</div>;
};
