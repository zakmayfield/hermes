"use client";
import { Layout } from "@/tw-styled/components";

type TDashboardLayoutTemplateProps = {
  children: React.ReactNode;
};

export const DashboardLayoutTemplate = (props: TDashboardLayoutTemplateProps) => {
  const { children } = props;
  return (
    <Layout
      title="Dashboard"
      heading="h1"
    >
      {children}
    </Layout>
  );
};
