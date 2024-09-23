"use client";
import { LayoutTemplate } from "@/shared/components/containers";

type TDashboardLayoutTemplateProps = {
  children: React.ReactNode;
};

export const DashboardLayoutTemplate = (props: TDashboardLayoutTemplateProps) => {
  const { children } = props;
  return (
    <LayoutTemplate
      title="Dashboard"
      heading="h1"
    >
      {children}
    </LayoutTemplate>
  );
};
