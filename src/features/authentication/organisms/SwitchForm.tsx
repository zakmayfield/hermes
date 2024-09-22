"use client";

import Link from "next/link";
import { ContentWrapper, Text } from "@/shared/components/containers";
import { usePathname } from "next/navigation";

export const SwitchForm = () => {
  const pathname = usePathname();
  const is_sign_in = pathname.includes("sign-in");

  function SwitchLink({ href, text }: { href: string; text: string }) {
    return (
      <Link
        href={href}
        className="underline"
      >
        {text}
      </Link>
    );
  }

  const sign_in_switch = is_sign_in && (
    <Text>
      Need to create an account?{" "}
      <SwitchLink
        href="/sign-up"
        text="Sign Up Here"
      />
    </Text>
  );

  const sign_up_switch = !is_sign_in && (
    <Text>
      Already have an account?{" "}
      <SwitchLink
        href="/sign-in"
        text="Sign In Here"
      />
    </Text>
  );

  return (
    <ContentWrapper>
      {sign_in_switch}
      {sign_up_switch}
    </ContentWrapper>
  );
};
