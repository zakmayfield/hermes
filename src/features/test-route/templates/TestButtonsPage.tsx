"use client";

import { Btn } from "@/shared/components/buttons";
import { ContentWrapper, Layout } from "@/shared/components/containers";

export const TestButtonsPage = () => {
  return (
    <Layout
      heading="h1"
      title="Test Buttons Page"
      style={{
        childrenFlex: "row",
        padding: "lg",
        childrenPadding: "lg"
      }}
    >
      <Layout
        heading="h2"
        title="Buttons"
        style={{
          childrenFlex: "row",
          childrenPadding: "lg"
        }}
      >
        <Btn text="Button" />
        <Btn
          text="Button"
          style={{
            width: "full"
          }}
        />
        <Btn
          text="Button"
          style={{
            width: "sm",
            bgColor: "green",
            theme: "light"
          }}
        />
        <Btn
          text="Button"
          style={{
            width: "md",
            bgColor: "red"
          }}
        />
        <Btn
          text="Button"
          style={{
            width: "lg"
          }}
        />
      </Layout>
    </Layout>
  );
};
