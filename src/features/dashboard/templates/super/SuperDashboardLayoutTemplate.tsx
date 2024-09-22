"use client";

import { Layout } from "@/shared/components/containers";
import { SuperNavigation } from "../../organisms/super";

type TSuperDashboardLayoutTemplateProps = {
  children: React.ReactNode;
};

export const SuperDashboardLayoutTemplate = (
  props: TSuperDashboardLayoutTemplateProps
) => {
  const { children } = props;
  return (
    <Layout
      heading="h2"
      title="Super"
      style={{
        childrenFlex: "col"
      }}
    >
      <SuperNavigation />
      {children}
    </Layout>
  );
};
