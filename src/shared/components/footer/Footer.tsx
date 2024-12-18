import { FooterItem } from "./FooterItem";
import { Box } from "@/ui/components";

export const Footer = () => {
  return (
    <Box
      as="footer"
      style={{
        backgroundColor: "theme-secondary",
        padding: "lg"
      }}
    >
      <Box
        style={{
          maxWidth: "3xl",
          place: "center",
          display: "flex-col",
          flexSpacing: "space-around",
          gap: "lg",
          padding: "sm",
          className: "md:flex-row"
        }}
      >
        <FooterItem title="Hours">
          <Box>
            <p>hours content</p>
          </Box>
        </FooterItem>

        <FooterItem title="Contact">
          <Box>
            <p>contact content</p>
          </Box>
        </FooterItem>

        <FooterItem title="Address">
          <Box>
            <p>address content</p>
          </Box>
        </FooterItem>
      </Box>
    </Box>
  );
};
