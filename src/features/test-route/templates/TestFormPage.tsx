"use client";
import { Layout } from "@/shared/components/containers";
import { TestForm } from "../organisms";

export const TestFormPage = () => {
  return (
    <Layout
      heading="h1"
      title="Test Form Page"
      padding="lg"
      contentPadding="lg"
    >
      <TestForm />
    </Layout>
  );
};
