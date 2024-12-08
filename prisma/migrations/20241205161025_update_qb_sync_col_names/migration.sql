/*
  Warnings:

  - The primary key for the `QuickbooksCustomerSync` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `company_name` on the `QuickbooksCustomerSync` table. All the data in the column will be lost.
  - You are about to drop the column `customer_id` on the `QuickbooksCustomerSync` table. All the data in the column will be lost.
  - You are about to drop the column `quickbooks_customer_sync_id` on the `QuickbooksCustomerSync` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `QuickbooksCustomerSync` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `QuickbooksCustomerSync` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `companyName` to the `QuickbooksCustomerSync` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `QuickbooksCustomerSync` table without a default value. This is not possible if the table is not empty.
  - The required column `quickbooksCustomerSyncId` was added to the `QuickbooksCustomerSync` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `userId` to the `QuickbooksCustomerSync` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "QuickbooksCustomerSync" DROP CONSTRAINT "QuickbooksCustomerSync_user_id_fkey";

-- DropIndex
DROP INDEX "QuickbooksCustomerSync_user_id_key";

-- AlterTable
ALTER TABLE "QuickbooksCustomerSync" DROP CONSTRAINT "QuickbooksCustomerSync_pkey",
DROP COLUMN "company_name",
DROP COLUMN "customer_id",
DROP COLUMN "quickbooks_customer_sync_id",
DROP COLUMN "user_id",
ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "customerId" TEXT NOT NULL,
ADD COLUMN     "quickbooksCustomerSyncId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "QuickbooksCustomerSync_pkey" PRIMARY KEY ("quickbooksCustomerSyncId");

-- CreateIndex
CREATE UNIQUE INDEX "QuickbooksCustomerSync_userId_key" ON "QuickbooksCustomerSync"("userId");

-- AddForeignKey
ALTER TABLE "QuickbooksCustomerSync" ADD CONSTRAINT "QuickbooksCustomerSync_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
