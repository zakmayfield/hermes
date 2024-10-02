"use client";

type DashboardLayoutTemplateProps = {
  children: React.ReactNode;
};

export const DashboardLayoutTemplate = (props: DashboardLayoutTemplateProps) => {
  const { children } = props;
  return <div>{children}</div>;
};
