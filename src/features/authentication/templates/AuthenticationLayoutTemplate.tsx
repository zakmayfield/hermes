"use client";

import { Wrapper } from "@/shared/components/containers";
import { Logo, SwitchForm } from "@/features/authentication/organisms";

type TAuthenticationLayoutTemplateProps = {
  children: React.ReactNode;
};

export const AuthenticationLayoutTemplate = (
  props: TAuthenticationLayoutTemplateProps
) => {
  const { children } = props;
  return (
    <Wrapper style={{ wrapper: { flex: "col", height: "screen" } }}>
      <Wrapper
        style={{
          wrapper: {
            flex: "col",
            width: "sm",
            flexPosition: "center-center",
            place: "center",
            gap: "lg"
          }
        }}
        className="mt-6"
      >
        <Wrapper
          style={{ wrapper: { flex: "row", padding: "lg" } }}
          className="justify-center w-3/4"
        >
          <Logo />
        </Wrapper>

        {children}

        <SwitchForm />
      </Wrapper>
    </Wrapper>
  );
};
