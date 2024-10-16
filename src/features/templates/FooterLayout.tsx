"use client";

import { Wrapper } from "@/tw-styled/ui";
import { FooterItem } from "../footer/atoms";

export const FooterLayout = () => {
  return (
    <Wrapper
      as="footer"
      style={{
        parentWrapper: { backgroundColor: "primary", padding: "lg" },
        childrenWrapper: {
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
        <Wrapper>
          <p>hours content</p>
        </Wrapper>
      </FooterItem>

      <FooterItem title="Contact">
        <p>contact content</p>
      </FooterItem>

      <FooterItem title="Address">
        <p>address content</p>
      </FooterItem>
    </Wrapper>
  );
};
