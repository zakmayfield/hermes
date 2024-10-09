"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const SwitchForm = () => {
  const pathname = usePathname();
  const is_sign_in = pathname.includes("sign-in");

  const switch_text = is_sign_in
    ? "Need to create an account?"
    : "Already have an account?";

  const text = <p>{switch_text}</p>;

  const switch_link = (
    <Link
      href={`/sign-${is_sign_in ? "up" : "in"}`}
      className="underline"
    >
      Sign {is_sign_in ? "Up" : "In"} Here
    </Link>
  );

  return (
    <div>
      {text}
      {switch_link}
    </div>
  );
};
