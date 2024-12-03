"use server";

import { genSalt, hash } from "bcryptjs";

export const hashPassword = async (password: string) => {
  const salt = await genSalt(12);
  const hashed_password = await hash(password, salt);

  return hashed_password;
};
