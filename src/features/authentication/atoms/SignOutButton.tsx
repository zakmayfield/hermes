"use client";

import { signOut } from "next-auth/react";

type TSignOutButtonProps = {};

export const SignOutButton = (props: TSignOutButtonProps) => {
  return (
    <div>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};
