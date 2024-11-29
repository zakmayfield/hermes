/*
  Warnings:

  - The `isExistingCustomer` column on the `CustomerInfo` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CustomerInfo" DROP COLUMN "isExistingCustomer",
ADD COLUMN     "isExistingCustomer" BOOLEAN NOT NULL DEFAULT false;
