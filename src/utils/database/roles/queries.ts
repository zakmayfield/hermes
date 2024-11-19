"use server";
import { db } from "@/lib/prisma";
import { Role } from "@prisma/client";

type GetRoleByIdInput = {
  role_id: string;
};

type GetRoleByIdOutput = Role;

export const getRoleById = async ({
  role_id
}: GetRoleByIdInput): Promise<GetRoleByIdOutput | null> => {
  return await db.role.findUnique({ where: { role_id } });
};
