"use client";
import { Children } from "@/tw-styled/types";
import { Wrapper } from "@/tw-styled/ui";

export const DashboardNavLayout = ({ children }: { children?: Children }) => {
  return (
    <Wrapper
      as="nav"
      style={{
        childrenWrapper: {
          display: "flex-row",
          gap: "md",
          padding: "md",
          borderRadius: "lg",
          backgroundColor: "secondary"
        }
      }}
    >
      {children}
    </Wrapper>
  );
};
