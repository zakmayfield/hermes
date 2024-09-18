"use client";

import { ContentWrapper, Layout } from "@/shared/components/containers";

export const TestContainersPage = () => {
  return (
    <Layout
      heading="h1"
      title="Test Containers Page"
      contentFlex="col"
      padding="lg"
      contentPadding="lg"
      contentClassname="gap-6"
    >
      <Layout
        heading="h2"
        title="Flex"
        contentFlex="row"
      >
        <Layout
          heading="h3"
          title="Col"
          contentFlex="col"
        >
          <ContentWrapper
            rounded="lg"
            className="border"
            padding="lg"
          >
            Content Wrapper 1
          </ContentWrapper>

          <ContentWrapper
            rounded="lg"
            padding="lg"
            className="border"
          >
            Content Wrapper 2
          </ContentWrapper>
        </Layout>

        <Layout
          heading="h3"
          title="Row"
          contentFlex="row"
        >
          <ContentWrapper
            rounded="lg"
            padding="lg"
            className="border"
          >
            Content Wrapper 3
          </ContentWrapper>
          <ContentWrapper
            rounded="lg"
            padding="lg"
            className="border"
          >
            Content Wrapper 4
          </ContentWrapper>
        </Layout>
      </Layout>

      <Layout
        heading="h2"
        title="Spacing"
        contentFlex="row"
      >
        <Layout
          heading="h3"
          title="Padding"
          contentFlex="col"
        >
          <ContentWrapper
            className="border"
            rounded="lg"
            padding="sm"
            width="auto"
          >
            A
          </ContentWrapper>
          <ContentWrapper
            className="border"
            rounded="lg"
            padding="md"
          >
            B
          </ContentWrapper>
          <ContentWrapper
            className="border"
            rounded="lg"
            padding="lg"
          >
            C
          </ContentWrapper>
        </Layout>

        <Layout
          heading="h3"
          title="Margin"
        >
          <ContentWrapper
            className="border"
            rounded="lg"
            flex="col"
          >
            <ContentWrapper margin="sm">X</ContentWrapper>
            <ContentWrapper margin="md">Y</ContentWrapper>
            <ContentWrapper margin="lg">Z</ContentWrapper>
          </ContentWrapper>
        </Layout>
      </Layout>

      <Layout
        heading="h2"
        title="Width"
        contentFlex="col"
      >
        <ContentWrapper
          className="border"
          rounded="lg"
          padding="lg"
          width="sm"
        >
          A
        </ContentWrapper>
        <ContentWrapper
          className="border"
          rounded="lg"
          padding="lg"
          width="md"
        >
          B
        </ContentWrapper>
        <ContentWrapper
          className="border"
          rounded="lg"
          padding="lg"
          width="lg"
        >
          C
        </ContentWrapper>
        <ContentWrapper
          className="border"
          rounded="lg"
          padding="lg"
        >
          D
        </ContentWrapper>
      </Layout>
    </Layout>
  );
};
