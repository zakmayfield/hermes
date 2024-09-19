"use client";

import { ContentWrapper, Layout } from "@/shared/components/containers";
import { Form, Input } from "@/shared/components/form";

export const TestFormPage = () => {
  return (
    <Layout
      heading="h1"
      title="Test Form Page"
      padding="lg"
      contentPadding="lg"
    >
      <ContentWrapper>
        <Form
          submit={() => console.log("submit")}
          className="rounded-md bg-slate-900"
          title="Test Form"
          width="sm"
        >
          <Input
            name="test-1"
            label="Test 1"
          />
          <Input
            label="Test 2"
            name="test-2"
          />
        </Form>
      </ContentWrapper>
    </Layout>
  );
};
