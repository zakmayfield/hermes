"use client";

import { useSignInForm } from "@/shared/hooks/forms";

export const SignInForm = () => {
  const {} = useSignInForm();
  return (
    <div>
      <form className="flex flex-col gap-3">
        <div className="w-full">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="name@host.com"
            className="w-full p-2 rounded-md"
          />
        </div>

        <div className="w-full relative">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="w-full p-2 rounded-md"
          />
        </div>

        <button className="bg-theme-green p-2 rounded-md w-full">Sign In</button>
      </form>
    </div>
  );
};
