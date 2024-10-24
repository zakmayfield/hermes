/*
  Warnings:

  - Changed the type of `name` on the `Permission` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Permissions" AS ENUM ('APPROVE_USER', 'CREATE_USER', 'UPDATE_USER', 'DELETE_USER', 'DELETE_ADMIN', 'GRANT_PERMISSIONS', 'REVOKE_PERMISSIONS');

-- DropForeignKey
ALTER TABLE "RolePermissions" DROP CONSTRAINT "RolePermissions_permission_id_fkey";

-- AlterTable
ALTER TABLE "Permission" ADD COLUMN     "description" TEXT,
ADD COLUMN     "display_name" TEXT,
DROP COLUMN "name",
ADD COLUMN     "name" "Permissions" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Permission_name_key" ON "Permission"("name");

-- AddForeignKey
ALTER TABLE "RolePermissions" ADD CONSTRAINT "RolePermissions_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "Permission"("permission_id") ON DELETE CASCADE ON UPDATE CASCADE;
