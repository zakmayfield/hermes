"use client";

import { Btn } from "@/tw-styled/components";
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
