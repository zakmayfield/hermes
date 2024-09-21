"use client";

import { ContentWrapper } from "@/shared/components/containers";
import { SignInForm } from "../organisms";

export const SignInPage = () => {
  return (
    <ContentWrapper
      style={{ flex: "col" }}
      className="border min-h-screen"
    >
      <ContentWrapper
        style={{ flex: "col", width: "sm", flexCenter: true, position: "center" }}
        className="mt-6"
      >
        <ContentWrapper
          style={{ width: "full", padding: "lg", flex: "row" }}
          className="border justify-center"
        >
          LOGO
        </ContentWrapper>

        <SignInForm />
      </ContentWrapper>
    </ContentWrapper>
  );
};
