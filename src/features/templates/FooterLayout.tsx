"use client";

import { Box } from "@/tw-styled/ui";
import { FooterItem } from "../footer/atoms";

export const FooterLayout = () => {
  return (
    <Box
      as="footer"
      style={{
        wrapper: { backgroundColor: "secondary", padding: "lg" }
      }}
    >
      <Box
        style={{
          wrapper: {
            maxWidth: "3xl",
            place: "center",
            display: "flex-col",
            flexSpacing: "space-around",
            gap: "lg",
            padding: "sm",
            className: "md:flex-row"
          }
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
