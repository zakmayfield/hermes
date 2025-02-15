-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('INVOICE_PENDING', 'INVOICE_CREATED');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "status" "OrderStatus" NOT NULL DEFAULT 'INVOICE_PENDING';
