"use client";
import { Children } from "@/tw-styled/types";
import { Box } from "@/tw-styled/ui";

export const DashboardNavLayout = ({ children }: { children?: Children }) => {
  return (
    <Box
      as="nav"
      style={{
        wrapper: {
          display: "flex-row",
          gap: "md",
          padding: "md",
          borderRadius: "lg",
          backgroundColor: "primary"
        }
      }}
    >
      {children}
    </Box>
  );
};
