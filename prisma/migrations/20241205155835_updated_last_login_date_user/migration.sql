/*
  Warnings:

  - You are about to drop the column `last_login_date` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "last_login_date",
ADD COLUMN     "lastLoginDate" TIMESTAMP(3);
