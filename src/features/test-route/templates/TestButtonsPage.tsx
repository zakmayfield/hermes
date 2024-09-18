"use client";

import { Btn } from "@/shared/components/buttons";
import { ContentWrapper, Layout } from "@/shared/components/containers";

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
      >
        <ContentWrapper>
          <Btn text="Button" />
        </ContentWrapper>
      </Layout>
    </Layout>
  );
};
