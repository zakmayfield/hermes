"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const SwitchForm = () => {
  const pathname = usePathname();
  const is_sign_in = pathname.includes("sign-in");

  const switch_text = is_sign_in
    ? "Need to create an account?"
    : "Already have an account?";

  return (
    <div className="flex gap-3 justify-center">
      <p>{switch_text}</p>

      <Link
        href={`/sign-${is_sign_in ? "up" : "in"}`}
        className="underline"
      >
        Sign {is_sign_in ? "Up" : "In"} Here
      </Link>
    </div>
  );
};
