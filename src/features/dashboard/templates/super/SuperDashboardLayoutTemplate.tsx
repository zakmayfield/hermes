"use client";

import { SuperNavigation } from "../../organisms/super";
import { Layout } from "@/tw-styled/components";

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
        parentWrapper: {
          border: "sm",
          paddingX: "zero",
          className: "border-blue-400"
        },
        childrenWrapper: {
          flex: "col"
        }
      }}
    >
      <SuperNavigation />
      {children}
    </Layout>
  );
};
