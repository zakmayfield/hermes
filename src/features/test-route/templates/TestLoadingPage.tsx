"use client";

import { Layout } from "@/shared/components/containers";
import { PulseLoader, SpinLoader } from "@/shared/components/loaders";

export const TestLoadingPage = () => {
  return (
    <Layout
      heading="h1"
      title="Test Loaders Page"
      padding="lg"
      contentPadding="lg"
      contentFlex="row"
      contentClassname="gap-6"
    >
      <Layout
        heading="h2"
        title="Pulse"
        contentFlex="col"
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
