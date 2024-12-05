/*
  Warnings:

  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `order_id` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Order` table. All the data in the column will be lost.
  - The primary key for the `OrderItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `order_id` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `order_item_id` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `unit_id` on the `OrderItem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[orderId,cartItemId]` on the table `OrderItem` will be added. If there are existing duplicate values, this will fail.
  - The required column `orderId` was added to the `Order` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `userId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cartItemId` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderId` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - The required column `orderItemId` was added to the `OrderItem` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_user_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_order_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_unit_id_fkey";

-- AlterTable
ALTER TABLE "Order" DROP CONSTRAINT "Order_pkey",
DROP COLUMN "created_at",
DROP COLUMN "order_id",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "orderId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "Order_pkey" PRIMARY KEY ("orderId");

-- AlterTable
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_pkey",
DROP COLUMN "order_id",
DROP COLUMN "order_item_id",
DROP COLUMN "quantity",
DROP COLUMN "unit_id",
ADD COLUMN     "cartItemId" TEXT NOT NULL,
ADD COLUMN     "orderId" TEXT NOT NULL,
ADD COLUMN     "orderItemId" TEXT NOT NULL,
ADD CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("orderItemId");

-- CreateTable
CREATE TABLE "Cart" (
    "cartId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("cartId")
);

-- CreateTable
CREATE TABLE "CartItem" (
    "cartItemId" TEXT NOT NULL,
    "cartId" TEXT NOT NULL,
    "unit_id" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("cartItemId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cart_userId_key" ON "Cart"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_cartId_unit_id_key" ON "CartItem"("cartId", "unit_id");

-- CreateIndex
CREATE UNIQUE INDEX "OrderItem_orderId_cartItemId_key" ON "OrderItem"("orderId", "cartItemId");

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("cartId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "Unit"("unit_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("orderId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_cartItemId_fkey" FOREIGN KEY ("cartItemId") REFERENCES "CartItem"("cartItemId") ON DELETE RESTRICT ON UPDATE CASCADE;
