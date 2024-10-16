"use client";
import { Button } from "@/tw-styled/ui";
import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <div>
      <Button
        text="Logout"
        options={{
          variant: "ghost"
        }}
        handleClick={() => signOut()}
      />
    </div>
  );
};
