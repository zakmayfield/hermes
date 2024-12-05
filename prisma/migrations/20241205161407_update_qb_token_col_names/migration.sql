/*
  Warnings:

  - The primary key for the `QuickbooksToken` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `access_token_expiration_time` on the `QuickbooksToken` table. All the data in the column will be lost.
  - You are about to drop the column `access_token_iv` on the `QuickbooksToken` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `QuickbooksToken` table. All the data in the column will be lost.
  - You are about to drop the column `encrypted_access_token` on the `QuickbooksToken` table. All the data in the column will be lost.
  - You are about to drop the column `encrypted_refresh_token` on the `QuickbooksToken` table. All the data in the column will be lost.
  - You are about to drop the column `realm_id` on the `QuickbooksToken` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token_expiration_time` on the `QuickbooksToken` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token_iv` on the `QuickbooksToken` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `QuickbooksToken` table. All the data in the column will be lost.
  - You are about to drop the column `user_quickbooks_token_id` on the `QuickbooksToken` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `QuickbooksToken` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accessTokenExpirationTime` to the `QuickbooksToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accessTokenIv` to the `QuickbooksToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `encryptedAccessToken` to the `QuickbooksToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `encryptedRefreshToken` to the `QuickbooksToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `realmId` to the `QuickbooksToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refreshTokenExpirationTime` to the `QuickbooksToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refreshTokenIv` to the `QuickbooksToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `QuickbooksToken` table without a default value. This is not possible if the table is not empty.
  - The required column `userQuickbooksTokenId` was added to the `QuickbooksToken` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "QuickbooksToken" DROP CONSTRAINT "QuickbooksToken_user_id_fkey";

-- DropIndex
DROP INDEX "QuickbooksToken_user_id_key";

-- AlterTable
ALTER TABLE "QuickbooksToken" DROP CONSTRAINT "QuickbooksToken_pkey",
DROP COLUMN "access_token_expiration_time",
DROP COLUMN "access_token_iv",
DROP COLUMN "created_at",
DROP COLUMN "encrypted_access_token",
DROP COLUMN "encrypted_refresh_token",
DROP COLUMN "realm_id",
DROP COLUMN "refresh_token_expiration_time",
DROP COLUMN "refresh_token_iv",
DROP COLUMN "user_id",
DROP COLUMN "user_quickbooks_token_id",
ADD COLUMN     "accessTokenExpirationTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "accessTokenIv" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "encryptedAccessToken" TEXT NOT NULL,
ADD COLUMN     "encryptedRefreshToken" TEXT NOT NULL,
ADD COLUMN     "realmId" TEXT NOT NULL,
ADD COLUMN     "refreshTokenExpirationTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "refreshTokenIv" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "userQuickbooksTokenId" TEXT NOT NULL,
ADD CONSTRAINT "QuickbooksToken_pkey" PRIMARY KEY ("userQuickbooksTokenId");

-- CreateIndex
CREATE UNIQUE INDEX "QuickbooksToken_userId_key" ON "QuickbooksToken"("userId");

-- AddForeignKey
ALTER TABLE "QuickbooksToken" ADD CONSTRAINT "QuickbooksToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
