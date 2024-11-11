-- CreateTable
CREATE TABLE "Product" (
    "product_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "Unit" (
    "unit_id" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "code" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("unit_id")
);

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;
