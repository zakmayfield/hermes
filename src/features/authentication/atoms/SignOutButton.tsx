"use client";

import { Btn } from "@/tw-styled/ui";
import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <div>
      <Btn
        handleClick={() => signOut()}
        text="Logout"
      />
    </div>
  );
};
