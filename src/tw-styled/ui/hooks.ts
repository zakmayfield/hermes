import React from "react";
import { StyleToClassProps } from "../types";

export const useDefaultStyles = (
  style?: StyleToClassProps,
  cb?: (style?: StyleToClassProps) => StyleToClassProps
) => {
  return React.useMemo(() => {
    return cb?.(style) || { ...style };
  }, [style]);
};
