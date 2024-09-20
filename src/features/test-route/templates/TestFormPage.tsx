"use client";
import { Layout } from "@/shared/components/containers";
import { TestForm } from "../organisms";

export const TestFormPage = () => {
  return (
    <Layout
      heading="h1"
      title="Test Form Page"
      style={{
        padding: "lg",
        childrenPadding: "lg"
      }}
    >
      <TestForm />
    </Layout>
  );
};
