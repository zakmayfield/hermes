"use client";

import { ContentWrapper, Layout } from "@/shared/components/containers";
import { Form } from "@/shared/components/form";

export const TestFormPage = () => {
  return (
    <Layout
      heading="h1"
      title="Test Form Page"
      padding="lg"
      contentPadding="lg"
    >
      <ContentWrapper>
        <Form submit={() => console.log("submit")}>form content</Form>
      </ContentWrapper>
    </Layout>
  );
};
