/*
  Warnings:

  - The primary key for the `CustomerBillAddr` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `customer_bill_addr_id` on the `CustomerBillAddr` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `CustomerBillAddr` table. All the data in the column will be lost.
  - The primary key for the `CustomerShipAddr` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `customer_ship_addr_id` on the `CustomerShipAddr` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `CustomerShipAddr` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `CustomerBillAddr` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `CustomerShipAddr` will be added. If there are existing duplicate values, this will fail.
  - The required column `customerBillAddrId` was added to the `CustomerBillAddr` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `userId` to the `CustomerBillAddr` table without a default value. This is not possible if the table is not empty.
  - The required column `customerShipAddrId` was added to the `CustomerShipAddr` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `userId` to the `CustomerShipAddr` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CustomerBillAddr" DROP CONSTRAINT "CustomerBillAddr_user_id_fkey";

-- DropForeignKey
ALTER TABLE "CustomerShipAddr" DROP CONSTRAINT "CustomerShipAddr_user_id_fkey";

-- DropIndex
DROP INDEX "CustomerBillAddr_user_id_key";

-- DropIndex
DROP INDEX "CustomerShipAddr_user_id_key";

-- AlterTable
ALTER TABLE "CustomerBillAddr" DROP CONSTRAINT "CustomerBillAddr_pkey",
DROP COLUMN "customer_bill_addr_id",
DROP COLUMN "user_id",
ADD COLUMN     "customerBillAddrId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "CustomerBillAddr_pkey" PRIMARY KEY ("customerBillAddrId");

-- AlterTable
ALTER TABLE "CustomerShipAddr" DROP CONSTRAINT "CustomerShipAddr_pkey",
DROP COLUMN "customer_ship_addr_id",
DROP COLUMN "user_id",
ADD COLUMN     "customerShipAddrId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "CustomerShipAddr_pkey" PRIMARY KEY ("customerShipAddrId");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerBillAddr_userId_key" ON "CustomerBillAddr"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerShipAddr_userId_key" ON "CustomerShipAddr"("userId");

-- AddForeignKey
ALTER TABLE "CustomerShipAddr" ADD CONSTRAINT "CustomerShipAddr_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerBillAddr" ADD CONSTRAINT "CustomerBillAddr_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
