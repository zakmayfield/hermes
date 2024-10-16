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
          minHeight: "lg",
          place: "center",
          backgroundColor: "primary",
          spaceY: "lg"
        }
      }}
    >
      {children}
    </Layout>
  );
};
