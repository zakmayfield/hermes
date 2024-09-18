"use client";
import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";

export const SignUpPage = () => {
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

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signIn("sign-up", {
      ...formValues
    });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={(e) => handleSignUp(e)}>
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

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
