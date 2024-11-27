/*
  Warnings:

  - You are about to drop the column `email_verified_at` on the `Onboarding` table. All the data in the column will be lost.
  - You are about to drop the column `has_address` on the `Onboarding` table. All the data in the column will be lost.
  - You are about to drop the column `has_company` on the `Onboarding` table. All the data in the column will be lost.
  - You are about to drop the column `has_contact` on the `Onboarding` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Onboarding" DROP COLUMN "email_verified_at",
DROP COLUMN "has_address",
DROP COLUMN "has_company",
DROP COLUMN "has_contact",
ADD COLUMN     "email_verified" TIMESTAMP(3);
