/*
  Warnings:

  - You are about to drop the column `user_id` on the `Role` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Role" DROP COLUMN "user_id";

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");
