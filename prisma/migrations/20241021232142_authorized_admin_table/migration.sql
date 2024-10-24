-- CreateTable
CREATE TABLE "AuthorizedAdmin" (
    "authorized_admin_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "AuthorizedAdmin_pkey" PRIMARY KEY ("authorized_admin_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AuthorizedAdmin_email_key" ON "AuthorizedAdmin"("email");
