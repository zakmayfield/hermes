/*
  Warnings:

  - You are about to drop the column `email_verified` on the `Onboarding` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Onboarding" DROP COLUMN "email_verified",
ADD COLUMN     "email_verified_at" TIMESTAMP(3),
ADD COLUMN     "has_address" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "has_company" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "has_contact" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
