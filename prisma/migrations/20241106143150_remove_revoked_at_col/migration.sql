/*
  Warnings:

  - You are about to drop the column `revoked_at` on the `UserPermissions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserPermissions" DROP COLUMN "revoked_at";
