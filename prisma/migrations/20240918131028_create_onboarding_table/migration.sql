-- CreateEnum
CREATE TYPE "OnboardingStatus" AS ENUM ('COMPLETE', 'PENDING');

-- CreateTable
CREATE TABLE "Onboarding" (
    "onboarding_id" TEXT NOT NULL,
    "status" "OnboardingStatus" NOT NULL DEFAULT 'PENDING',
    "is_approved" BOOLEAN NOT NULL DEFAULT false,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Onboarding_pkey" PRIMARY KEY ("onboarding_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Onboarding_user_id_key" ON "Onboarding"("user_id");

-- AddForeignKey
ALTER TABLE "Onboarding" ADD CONSTRAINT "Onboarding_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
