"use client";

import { Layout } from "@/tw-styled/ui";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout = (props: DashboardLayoutProps) => {
  const { children } = props;
  return (
    <Layout
      options={{ as: "main", titleText: "Dashboard" }}
      style={{
        parentWrapper: {
          borderRadius: "lg",
          maxWidth: "3xl",
          place: "center",
          backgroundColor: "secondary",
          spaceY: "lg"
        },
        childrenWrapper: {
          minHeight: "md",
          display: "flex-col"
        }
      }}
    >
      {children}
    </Layout>
  );
};
