/*
  Warnings:

  - You are about to drop the column `role_id` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_role_id_fkey";

-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "name" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role_id";

-- CreateTable
CREATE TABLE "UserRoles" (
    "user_id" TEXT NOT NULL,
    "role_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRoles_user_id_role_id_key" ON "UserRoles"("user_id", "role_id");

-- AddForeignKey
ALTER TABLE "UserRoles" ADD CONSTRAINT "UserRoles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRoles" ADD CONSTRAINT "UserRoles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
