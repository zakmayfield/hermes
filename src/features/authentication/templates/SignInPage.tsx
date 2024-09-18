"use client";
import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";

export const SignInPage = () => {
  type TFormValues = {
    email: string;
    password: string;
  };

  const [formValues, setFormValues] = useState<TFormValues>({
    email: "",
    password: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    type keys = "email" | "password";
    const name = e.target.name as keys;
    const value = e.target.value;

    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signIn("sign-in", {
      ...formValues
    });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          value={formValues.email}
          placeholder="email"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="text"
          value={formValues.password}
          placeholder="password"
          onChange={(e) => handleChange(e)}
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
