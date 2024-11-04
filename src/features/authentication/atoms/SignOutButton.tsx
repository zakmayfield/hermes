"use client";
import { Button } from "@/ui/components";
import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <div>
      <Button
        options={{
          variant: "ghost"
        }}
        handleClick={() => signOut()}
      >
        Logout
      </Button>
    </div>
  );
};
