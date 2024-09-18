"use client";

import { Btn } from "@/shared/components/buttons";
import { Layout } from "@/shared/components/containers";

export const TestButtonsPage = () => {
  return (
    <Layout
      heading="h1"
      title="Test Buttons Page"
      padding="lg"
      contentPadding="lg"
    >
      <Layout
        heading="h2"
        title="Buttons"
        contentFlex="row"
        contentPadding="lg"
      >
        <Btn text="Button" />
        <Btn
          text="Button"
          width="full"
        />
        <Btn
          text="Button"
          width="sm"
          bgColor="green"
          theme="light"
        />
        <Btn
          text="Button"
          width="md"
          bgColor="red"
        />
        <Btn
          text="Button"
          width="lg"
        />
      </Layout>
    </Layout>
  );
};
