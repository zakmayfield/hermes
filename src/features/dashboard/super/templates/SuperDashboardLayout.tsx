"use client";

import { Nav } from "../atoms";

type SuperDashboardLayoutProps = {
  children: React.ReactNode;
};

export const SuperDashboardLayout = (props: SuperDashboardLayoutProps) => {
  const { children } = props;
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};
