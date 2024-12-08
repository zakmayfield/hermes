/*
  Warnings:

  - You are about to drop the column `unit_id` on the `CartItem` table. All the data in the column will be lost.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `product_id` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `Unit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `product_id` on the `Unit` table. All the data in the column will be lost.
  - You are about to drop the column `unit_id` on the `Unit` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cartId,unitId]` on the table `CartItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `unitId` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - The required column `productId` was added to the `Product` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `productId` to the `Unit` table without a default value. This is not possible if the table is not empty.
  - The required column `unitId` was added to the `Unit` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `cartId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_unit_id_fkey";

-- DropForeignKey
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_product_id_fkey";

-- DropIndex
DROP INDEX "CartItem_cartId_unit_id_key";

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "unit_id",
ADD COLUMN     "unitId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "product_id",
ADD COLUMN     "productId" TEXT NOT NULL,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("productId");

-- AlterTable
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_pkey",
DROP COLUMN "product_id",
DROP COLUMN "unit_id",
ADD COLUMN     "productId" TEXT NOT NULL,
ADD COLUMN     "unitId" TEXT NOT NULL,
ADD CONSTRAINT "Unit_pkey" PRIMARY KEY ("unitId");

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "cartId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_cartId_unitId_key" ON "CartItem"("cartId", "unitId");

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("productId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("unitId") ON DELETE RESTRICT ON UPDATE CASCADE;
