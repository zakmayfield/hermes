"use server";

import { compare } from "bcryptjs";

export const comparePasswords = async (password: string, compareTo: string) =>
  await compare(password, compareTo);
