-- CreateTable
CREATE TABLE "QuickbooksCustomerSync" (
    "quickbooks_customer_sync_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,

    CONSTRAINT "QuickbooksCustomerSync_pkey" PRIMARY KEY ("quickbooks_customer_sync_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QuickbooksCustomerSync_user_id_key" ON "QuickbooksCustomerSync"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "QuickbooksCustomerSync_customer_id_key" ON "QuickbooksCustomerSync"("customer_id");

-- AddForeignKey
ALTER TABLE "QuickbooksCustomerSync" ADD CONSTRAINT "QuickbooksCustomerSync_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
