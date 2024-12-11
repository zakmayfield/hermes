/*
  Warnings:

  - You are about to drop the column `cartItemId` on the `OrderItem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[orderId,unitId]` on the table `OrderItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `unitId` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_cartItemId_fkey";

-- DropIndex
DROP INDEX "OrderItem_orderId_cartItemId_key";

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "cartItemId",
ADD COLUMN     "unitId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "OrderItem_orderId_unitId_key" ON "OrderItem"("orderId", "unitId");

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("unitId") ON DELETE RESTRICT ON UPDATE CASCADE;
