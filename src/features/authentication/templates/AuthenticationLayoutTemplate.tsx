"use client";

import { Logo, SwitchForm } from "@/features/authentication/organisms";
import { Wrapper } from "@/tw-styled/components";

type TAuthenticationLayoutTemplateProps = {
  children: React.ReactNode;
};

export const AuthenticationLayoutTemplate = (
  props: TAuthenticationLayoutTemplateProps
) => {
  const { children } = props;
  return (
    <Wrapper>
      <Wrapper>
        <Wrapper>
          <Logo />
        </Wrapper>

        {children}

        <SwitchForm />
      </Wrapper>
    </Wrapper>
  );
};
