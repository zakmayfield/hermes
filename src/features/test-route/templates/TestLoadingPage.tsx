"use client";

import { Layout } from "@/shared/components/containers";
import { PulseLoader, SpinLoader } from "@/shared/components/loaders";

export const TestLoadingPage = () => {
  return (
    <Layout
      heading="h1"
      title="Test Loaders Page"
      style={{
        padding: "lg",
        childrenFlex: "row",
        childrenPadding: "lg",
        childrenClassname: "gap-6"
      }}
    >
      <Layout
        heading="h2"
        title="Pulse"
        style={{
          childrenFlex: "col"
        }}
      >
        <PulseLoader />
        <PulseLoader size="md" />
        <PulseLoader size="lg" />
      </Layout>
      <Layout
        heading="h2"
        title="Spin"
      >
        <SpinLoader spinnerClassName="text-white" />
      </Layout>
    </Layout>
  );
};
