"use client";
import { ContentWrapper, Layout } from "@/shared/components/containers";
import { utilityHooks } from "@/shared/hooks";

export const TestAccordionPage = () => {
  const obj = {
    id: "1",
    title: "Test title 123",
    body: [
      {
        id: "1",
        child: <div>1</div>
      },
      {
        id: "2",
        child: <div>2</div>
      }
    ]
  };

  const obj2 = {
    id: "2",
    title: "Hello there. General Kenobi.",
    body: [
      {
        id: "1",
        child: <div>1</div>
      },
      {
        id: "2",
        child: <div>2</div>
      }
    ]
  };

  const { Accordion: AOne } = utilityHooks.useAccordion({
    data: [obj, obj2]
  });

  const { Accordion: ATwo } = utilityHooks.useAccordion({
    data: [obj, obj2]
  });

  return (
    <Layout
      heading="h1"
      title="Test Accordion Page"
      style={{
        childrenFlex: "row"
      }}
    >
      <ContentWrapper style={{ width: "full" }}>
        <AOne />
      </ContentWrapper>

      <ContentWrapper style={{ width: "full" }}>
        <ATwo />
      </ContentWrapper>
    </Layout>
  );
};
