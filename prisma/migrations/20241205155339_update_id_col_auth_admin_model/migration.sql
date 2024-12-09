/*
  Warnings:

  - The primary key for the `AuthorizedAdmin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authorized_admin_id` on the `AuthorizedAdmin` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `AuthorizedAdmin` table. All the data in the column will be lost.
  - The required column `authorizedAdminId` was added to the `AuthorizedAdmin` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "AuthorizedAdmin" DROP CONSTRAINT "AuthorizedAdmin_pkey",
DROP COLUMN "authorized_admin_id",
DROP COLUMN "created_at",
ADD COLUMN     "authorizedAdminId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "AuthorizedAdmin_pkey" PRIMARY KEY ("authorizedAdminId");
