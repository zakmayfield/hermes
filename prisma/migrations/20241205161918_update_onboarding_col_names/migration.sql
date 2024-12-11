/*
  Warnings:

  - The primary key for the `Onboarding` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email_verified` on the `Onboarding` table. All the data in the column will be lost.
  - You are about to drop the column `is_approved` on the `Onboarding` table. All the data in the column will be lost.
  - You are about to drop the column `onboarding_id` on the `Onboarding` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Onboarding` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Onboarding` will be added. If there are existing duplicate values, this will fail.
  - The required column `onboardingId` was added to the `Onboarding` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `userId` to the `Onboarding` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Onboarding" DROP CONSTRAINT "Onboarding_user_id_fkey";

-- DropIndex
DROP INDEX "Onboarding_user_id_key";

-- AlterTable
ALTER TABLE "Onboarding" DROP CONSTRAINT "Onboarding_pkey",
DROP COLUMN "email_verified",
DROP COLUMN "is_approved",
DROP COLUMN "onboarding_id",
DROP COLUMN "user_id",
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "isApproved" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "onboardingId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "Onboarding_pkey" PRIMARY KEY ("onboardingId");

-- CreateIndex
CREATE UNIQUE INDEX "Onboarding_userId_key" ON "Onboarding"("userId");

-- AddForeignKey
ALTER TABLE "Onboarding" ADD CONSTRAINT "Onboarding_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
