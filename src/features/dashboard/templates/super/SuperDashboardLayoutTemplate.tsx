"use client";

import { SuperNavigation } from "../../organisms/super";

type SuperDashboardLayoutTemplateProps = {
  children: React.ReactNode;
};

export const SuperDashboardLayoutTemplate = (
  props: SuperDashboardLayoutTemplateProps
) => {
  const { children } = props;
  return (
    <div>
      <SuperNavigation />
      {children}
    </div>
  );
};
