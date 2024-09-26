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
    <Wrapper style={{ parentWrapper: { flex: "col", height: "screen" } }}>
      <Wrapper
        style={{
          parentWrapper: {
            flex: "col",
            width: "sm",
            flexPosition: "center-center",
            place: "center",
            gap: "lg",
            className: "mt-6"
          }
        }}
      >
        <Wrapper
          style={{
            childrenWrapper: {
              flex: "row",
              padding: "lg",
              place: "center",
              className: "w-3/4"
            }
          }}
        >
          <Logo />
        </Wrapper>

        {children}

        <SwitchForm />
      </Wrapper>
    </Wrapper>
  );
};
