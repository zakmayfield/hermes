-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_productGroupId_fkey";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productGroupId_fkey" FOREIGN KEY ("productGroupId") REFERENCES "ProductGroup"("productGroupId") ON DELETE CASCADE ON UPDATE CASCADE;
