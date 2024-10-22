import { Children } from "@/tw-styled/types";
import { Box } from "@/tw-styled/ui";

export const SegmentNav = ({ children }: { children?: Children }) => {
  return (
    <Box
      as="nav"
      style={{
        display: "flex-row",
        gap: "md",
        padding: "md",
        borderRadius: "lg",
        backgroundColor: "primary"
      }}
    >
      {children}
    </Box>
  );
};
