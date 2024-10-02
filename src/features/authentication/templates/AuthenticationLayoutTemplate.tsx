"use client";

import { Logo, SwitchForm } from "@/features/authentication/organisms";

type AuthenticationLayoutTemplateProps = {
  children: React.ReactNode;
};

export const AuthenticationLayoutTemplate = (
  props: AuthenticationLayoutTemplateProps
) => {
  const { children } = props;
  return (
    <div>
      <div>
        <div>
          <Logo />
        </div>

        {children}

        <SwitchForm />
      </div>
    </div>
  );
};
