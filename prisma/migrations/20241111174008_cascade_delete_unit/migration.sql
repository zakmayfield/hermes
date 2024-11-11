-- DropForeignKey
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_product_id_fkey";

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;
