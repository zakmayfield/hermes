"use client";

import { LayoutTemplate } from "@/shared/components/containers";

export const TestPage = () => {
  return (
    <div>
      <LayoutTemplate
        title="Layout"
        heading="h1"
        style={{
          wrapper: {
            width: "full",
            border: "sm"
          },
          heading: {
            padding: "lg",
            width: "sm",
            place: "right"
          },
          children: {
            flex: "row",
            gap: "lg",
            flexPosition: "bottom-left",
            height: "lg",
            padding: "lg",
            rounded: "lg",
            border: "sm",
            margin: "lg",
            bg: "bg-slate-900"
          }
        }}
      >
        <div>content 1</div>
        <div>content 2</div>
      </LayoutTemplate>
    </div>
  );
};
