-- CreateTable
CREATE TABLE "CustomerInfo" (
    "customer_info_id" TEXT NOT NULL,
    "isExistingCustomer" TEXT NOT NULL,
    "givenName" TEXT NOT NULL,
    "familyName" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "CustomerInfo_pkey" PRIMARY KEY ("customer_info_id")
);

-- CreateTable
CREATE TABLE "CustomerShipAddr" (
    "customer_ship_addr_id" TEXT NOT NULL,
    "line1" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "CustomerShipAddr_pkey" PRIMARY KEY ("customer_ship_addr_id")
);

-- CreateTable
CREATE TABLE "CustomerBillAddr" (
    "customer_bill_addr_id" TEXT NOT NULL,
    "line1" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "CustomerBillAddr_pkey" PRIMARY KEY ("customer_bill_addr_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CustomerInfo_user_id_key" ON "CustomerInfo"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerShipAddr_user_id_key" ON "CustomerShipAddr"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerBillAddr_user_id_key" ON "CustomerBillAddr"("user_id");

-- AddForeignKey
ALTER TABLE "CustomerInfo" ADD CONSTRAINT "CustomerInfo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerShipAddr" ADD CONSTRAINT "CustomerShipAddr_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerBillAddr" ADD CONSTRAINT "CustomerBillAddr_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
