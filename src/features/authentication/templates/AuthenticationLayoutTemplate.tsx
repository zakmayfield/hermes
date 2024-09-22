"use client";

import { ContentWrapper } from "@/shared/components/containers";
import { Logo, SwitchForm } from "@/features/authentication/organisms";

type TAuthenticationLayoutTemplateProps = {
  children: React.ReactNode;
};

export const AuthenticationLayoutTemplate = (
  props: TAuthenticationLayoutTemplateProps
) => {
  const { children } = props;
  return (
    <ContentWrapper
      style={{ flex: "col" }}
      className="min-h-screen"
    >
      <ContentWrapper
        style={{
          flex: "col",
          width: "sm",
          flexCenter: true,
          position: "center",
          gap: "lg"
        }}
        className="mt-6"
      >
        <ContentWrapper
          style={{ flex: "row", padding: "lg" }}
          className="justify-center w-3/4"
        >
          <Logo />
        </ContentWrapper>

        {children}

        <SwitchForm />
      </ContentWrapper>
    </ContentWrapper>
  );
};
