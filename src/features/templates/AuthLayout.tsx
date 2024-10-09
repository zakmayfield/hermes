"use client";

import { Logo } from "@/features/authentication/atoms";
import { SwitchForm } from "@/features/authentication/molecules";

type AuthenticationLayoutTemplateProps = {
  children: React.ReactNode;
};

export const AuthLayout = (props: AuthenticationLayoutTemplateProps) => {
  const { children } = props;

  const logoWrapper = (
    <div>
      <Logo />
    </div>
  );

  const childrenWrapper = <div>{children}</div>;

  const switchForm = <SwitchForm />;

  return (
    <div>
      {logoWrapper}
      {childrenWrapper}
      {switchForm}
    </div>
  );
};
