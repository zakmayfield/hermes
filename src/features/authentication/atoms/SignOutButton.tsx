"use client";
import { Button2 } from "@/tw-styled/ui";
import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <div>
      <Button2
        text="Logout"
        options={{
          variant: "ghost"
        }}
        handleClick={() => signOut()}
      />
    </div>
  );
};
