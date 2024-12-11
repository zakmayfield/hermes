/*
  Warnings:

  - The primary key for the `CustomerInfo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `customer_info_id` on the `CustomerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `CustomerInfo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `CustomerInfo` will be added. If there are existing duplicate values, this will fail.
  - The required column `customerInfoId` was added to the `CustomerInfo` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `userId` to the `CustomerInfo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CustomerInfo" DROP CONSTRAINT "CustomerInfo_user_id_fkey";

-- DropIndex
DROP INDEX "CustomerInfo_user_id_key";

-- AlterTable
ALTER TABLE "CustomerInfo" DROP CONSTRAINT "CustomerInfo_pkey",
DROP COLUMN "customer_info_id",
DROP COLUMN "user_id",
ADD COLUMN     "customerInfoId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "CustomerInfo_pkey" PRIMARY KEY ("customerInfoId");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerInfo_userId_key" ON "CustomerInfo"("userId");

-- AddForeignKey
ALTER TABLE "CustomerInfo" ADD CONSTRAINT "CustomerInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
