"use client";

import { LayoutTemplate } from "@/shared/components/containers";
import { SuperNavigation } from "../../organisms/super";

type TSuperDashboardLayoutTemplateProps = {
  children: React.ReactNode;
};

export const SuperDashboardLayoutTemplate = (
  props: TSuperDashboardLayoutTemplateProps
) => {
  const { children } = props;
  return (
    <LayoutTemplate
      heading="h2"
      title="Super"
      style={{
        children: {
          flex: "col"
        }
      }}
    >
      <SuperNavigation />
      {children}
    </LayoutTemplate>
  );
};
