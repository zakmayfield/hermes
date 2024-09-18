"use client";
import { useMemo } from "react";
import { merge } from "@/utils/ui";

type TFlexProps = {
  children?: React.ReactNode;
  className?: string;
  dir?: "row" | "col";
  gap?: "sm" | "md" | "lg";
  padding?: "sm" | "md" | "lg";
  position?: "left" | "center" | "right";
};

export const Flex = (props: TFlexProps) => {
  const {
    children,
    className = "",
    dir = "row",
    gap = "sm",
    padding = "none",
    position = "center"
  } = props;

  const classList = useMemo(() => {
    const dirMap = {
      row: "flex",
      col: "flex flex-col"
    };

    const gapMap = {
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6"
    };

    const paddingMap = {
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
      none: "p-0"
    };

    const positionMap = {
      left: "items-start justify-start",
      center: "items-center justify-center",
      right: "items-end justify-end"
    };

    return merge(`
        ${dirMap[dir]}
        ${gapMap[gap]}
        ${paddingMap[padding]}
        ${positionMap[position]}
        ${className}
      `);
  }, [dir, className]);

  return <div className={classList}>{children}</div>;
};
