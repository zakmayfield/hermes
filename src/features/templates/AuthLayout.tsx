"use client";

import { Logo } from "@/shared/components";
import { SwitchForm } from "@/features/authentication/molecules";
import { Layout } from "@/tw-styled/ui";

type AuthenticationLayoutTemplateProps = {
  children: React.ReactNode;
};

export const AuthLayout = (props: AuthenticationLayoutTemplateProps) => {
  const { children } = props;

  return (
    <Layout
      options={{
        as: "main"
      }}
      style={{
        childrenWrapper: {
          display: "flex-col",
          gap: "xl",
          flexColPosition: "top-center"
        }
      }}
    >
      <Logo style={{ wrapper: { width: "sm" } }} />

      {children}

      <SwitchForm />
    </Layout>
  );
};
