"use server";

import * as crypto from "crypto";
import { encrypt_algo, encrypt_key } from "./constants";

export const encrypt = async (str: string) => {
  if (!encrypt_algo || !encrypt_key) {
    throw new Error("Invalid Encryption Initialization");
  }

  const iv = crypto.randomBytes(16).toString("hex").slice(0, 16);

  const key = crypto
    .createHash("sha256")
    .update(String(encrypt_key))
    .digest("base64")
    .slice(0, 32);

  const cipher = crypto.createCipheriv(encrypt_algo, key, iv);

  let encrypted = cipher.update(str, "utf8", "hex");
  encrypted += cipher.final("hex");

  return { iv: iv, encrypted };
};

export const decrypt = async (encrypted: string, iv: string) => {
  if (!encrypt_algo || !encrypt_key) {
    throw new Error("Invalid Encryption Initialization");
  }

  const key = crypto
    .createHash("sha256")
    .update(String(encrypt_key))
    .digest("base64")
    .slice(0, 32);

  const decipher = crypto.createDecipheriv(encrypt_algo, key, iv);

  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
};
