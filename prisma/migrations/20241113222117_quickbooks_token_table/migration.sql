-- CreateTable
CREATE TABLE "QuickbooksToken" (
    "user_quickbooks_token_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiration_time" TIMESTAMP(3) NOT NULL,
    "encrypted_access_token" TEXT NOT NULL,
    "encrypted_refresh_token" TEXT NOT NULL,

    CONSTRAINT "QuickbooksToken_pkey" PRIMARY KEY ("user_quickbooks_token_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QuickbooksToken_user_id_key" ON "QuickbooksToken"("user_id");

-- AddForeignKey
ALTER TABLE "QuickbooksToken" ADD CONSTRAINT "QuickbooksToken_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
