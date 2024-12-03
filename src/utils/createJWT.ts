"use server";
import { JwtPayload, sign, verify } from "jsonwebtoken";
import { NEXTAUTH_SECRET } from "@/utils/core/constants";

export const createJWT = async (email: string) => {
  const t = sign({ email }, NEXTAUTH_SECRET!, { expiresIn: "48h" });
  const v = verify(t, NEXTAUTH_SECRET!) as JwtPayload;
  const exp_ms = v.exp! * 1000;

  return {
    jwt: t,
    jwt_expiration_date: new Date(exp_ms)
  };
};
