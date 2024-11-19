/*
  Warnings:

  - Added the required column `realmId` to the `QuickbooksToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuickbooksToken" ADD COLUMN     "realmId" TEXT NOT NULL;
