/*
  Warnings:

  - The primary key for the `VerificationToken` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `VerificationToken` table. All the data in the column will be lost.
  - You are about to drop the column `verification_token_id` on the `VerificationToken` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `VerificationToken` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `VerificationToken` table without a default value. This is not possible if the table is not empty.
  - The required column `verificationTokenId` was added to the `VerificationToken` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "VerificationToken" DROP CONSTRAINT "VerificationToken_user_id_fkey";

-- DropIndex
DROP INDEX "VerificationToken_user_id_key";

-- AlterTable
ALTER TABLE "VerificationToken" DROP CONSTRAINT "VerificationToken_pkey",
DROP COLUMN "user_id",
DROP COLUMN "verification_token_id",
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "verificationTokenId" TEXT NOT NULL,
ADD CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("verificationTokenId");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_userId_key" ON "VerificationToken"("userId");

-- AddForeignKey
ALTER TABLE "VerificationToken" ADD CONSTRAINT "VerificationToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
