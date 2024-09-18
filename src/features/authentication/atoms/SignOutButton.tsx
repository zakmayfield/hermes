"use client";

import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <div>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};
