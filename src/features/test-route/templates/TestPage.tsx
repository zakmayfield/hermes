"use client";

import { LayoutTemplate } from "@/shared/components/containers";

export const TestPage = () => {
  return (
    <div>
      <LayoutTemplate
        title="Layout"
        heading="h1"
        style={{
          children: {
            border: "sm",
            height: "md",
            flex: "row",
            gap: "lg"
          }
        }}
      >
        <div>content 1</div>
        <div>content 2</div>
      </LayoutTemplate>
    </div>
  );
};
