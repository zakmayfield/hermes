/*
  Warnings:

  - You are about to drop the column `expiration_time` on the `QuickbooksToken` table. All the data in the column will be lost.
  - Added the required column `access_token_expiration_time` to the `QuickbooksToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refresh_token_expiration_time` to the `QuickbooksToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuickbooksToken" DROP COLUMN "expiration_time",
ADD COLUMN     "access_token_expiration_time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "refresh_token_expiration_time" TIMESTAMP(3) NOT NULL;
