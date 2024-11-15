"use server";

import { compare, genSalt, hash } from "bcryptjs";

export const comparePasswords = async (password: string, compareTo: string) => {
  const isPasswordMatch = await compare(password, compareTo);
  return { isPasswordMatch };
};

export const hashPassword = async (password: string) => {
  const salt = await genSalt(12);
  const hashed_password = await hash(password, salt);

  return hashed_password;
};
