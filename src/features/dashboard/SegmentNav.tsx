import { Box } from "@/ui/components";

export const SegmentNav = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Box
      as="nav"
      style={{
        display: "flex-row",
        flexAlign: "center",
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
