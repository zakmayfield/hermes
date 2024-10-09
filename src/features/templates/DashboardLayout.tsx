"use client";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout = (props: DashboardLayoutProps) => {
  const { children } = props;
  return <div>{children}</div>;
};
