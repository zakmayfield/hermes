"use client";

import { ContentWrapper, Layout } from "@/shared/components/containers";

export const TestContainersPage = () => {
  return (
    <Layout
      heading="h1"
      title="Test Containers Page"
      style={{
        childrenFlex: "col",
        padding: "lg",
        childrenPadding: "lg",
        childrenClassname: "gap-6"
      }}
    >
      <Layout
        heading="h2"
        title="Flex"
        style={{
          childrenFlex: "row"
        }}
      >
        <Layout
          heading="h3"
          title="Col"
          style={{
            childrenFlex: "col"
          }}
        >
          <ContentWrapper
            className="border"
            style={{
              rounded: "lg",
              padding: "lg"
            }}
          >
            Content Wrapper 1
          </ContentWrapper>

          <ContentWrapper
            className="border"
            style={{
              rounded: "lg",
              padding: "lg"
            }}
          >
            Content Wrapper 2
          </ContentWrapper>
        </Layout>

        <Layout
          heading="h3"
          title="Row"
          style={{
            childrenFlex: "row"
          }}
        >
          <ContentWrapper
            style={{
              rounded: "lg",
              padding: "lg"
            }}
            className="border"
          >
            Content Wrapper 3
          </ContentWrapper>
          <ContentWrapper
            style={{
              rounded: "lg",
              padding: "lg"
            }}
            className="border"
          >
            Content Wrapper 4
          </ContentWrapper>
        </Layout>
      </Layout>

      <Layout
        heading="h2"
        title="Spacing"
        style={{
          childrenFlex: "row"
        }}
      >
        <Layout
          heading="h3"
          title="Padding"
          style={{
            childrenFlex: "col"
          }}
        >
          <ContentWrapper
            className="border"
            style={{
              rounded: "lg",
              padding: "sm",
              width: "auto"
            }}
          >
            A
          </ContentWrapper>
          <ContentWrapper
            className="border"
            style={{
              rounded: "lg",
              padding: "md"
            }}
          >
            B
          </ContentWrapper>
          <ContentWrapper
            className="border"
            style={{
              rounded: "lg",
              padding: "lg"
            }}
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
            style={{
              rounded: "lg",
              flex: "col"
            }}
          >
            <ContentWrapper style={{ margin: "sm" }}>X</ContentWrapper>
            <ContentWrapper style={{ margin: "md" }}>Y</ContentWrapper>
            <ContentWrapper style={{ margin: "lg" }}>Z</ContentWrapper>
          </ContentWrapper>
        </Layout>
      </Layout>

      <Layout
        heading="h2"
        title="Width"
        style={{
          childrenFlex: "col"
        }}
      >
        <ContentWrapper
          className="border"
          style={{
            rounded: "lg",
            padding: "lg",
            width: "sm"
          }}
        >
          A
        </ContentWrapper>
        <ContentWrapper
          className="border"
          style={{
            rounded: "lg",
            padding: "lg",
            width: "md"
          }}
        >
          B
        </ContentWrapper>
        <ContentWrapper
          className="border"
          style={{
            rounded: "lg",
            padding: "lg",
            width: "lg"
          }}
        >
          C
        </ContentWrapper>
        <ContentWrapper
          className="border"
          style={{
            rounded: "lg",
            padding: "lg"
          }}
        >
          D
        </ContentWrapper>
      </Layout>
    </Layout>
  );
};
