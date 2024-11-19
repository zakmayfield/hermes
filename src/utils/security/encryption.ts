import * as crypto from "crypto";

const encryption_algorithm = process.env.ENCRYPTION_ALGO!;
export const encryption_password = process.env.ENCRYPTION_SECRET!;

export function encryptToken(token: string, password: string) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(encryption_algorithm, Buffer.from(password), iv);
  let encrypted = cipher.update(token, "utf8", "hex");
  encrypted += cipher.final("hex");
  return { iv: iv.toString("hex"), encrypted };
}

export function decryptToken(encryptedToken: string, password: string, iv: string) {
  const decipher = crypto.createDecipheriv(
    encryption_algorithm,
    Buffer.from(password),
    Buffer.from(iv, "hex")
  );
  let decrypted = decipher.update(encryptedToken, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
