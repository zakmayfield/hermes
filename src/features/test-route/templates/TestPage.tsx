"use client";

import { LayoutTemplate } from "@/shared/components/containers";
import { useClassNames } from "@/tw-styled";

export const TestPage = () => {
  const classes = useClassNames({
    wrapper_one: {
      height: "sm",
      width: "sm",
      border: "sm"
    },
    wrapper_two: {
      height: "md",
      width: "md",
      border: "lg"
    }
  });

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
        <div className={classes.wrapper_one}>content 1</div>
        <div className={classes.wrapper_two}>content 2</div>
      </LayoutTemplate>
    </div>
  );
};
