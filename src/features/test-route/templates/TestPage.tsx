"use client";
import { Layout } from "@/tw-styled/components";
import { useClasses } from "@/tw-styled/hooks";

export const TestPage = () => {
  const { classes } = useClasses({
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
      <Layout
        title="Layout"
        heading="h1"
        style={{
          parentWrapper: {
            width: "full",
            border: "sm"
          },
          heading: {
            padding: "lg",
            width: "sm",
            place: "right"
          },
          childrenWrapper: {
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
      </Layout>
    </div>
  );
};
