/*
  Warnings:

  - You are about to drop the column `realmId` on the `QuickbooksToken` table. All the data in the column will be lost.
  - Added the required column `realm_id` to the `QuickbooksToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuickbooksToken" DROP COLUMN "realmId",
ADD COLUMN     "realm_id" TEXT NOT NULL;
