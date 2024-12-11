/*
  Warnings:

  - The primary key for the `Permission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `display_name` on the `Permission` table. All the data in the column will be lost.
  - You are about to drop the column `permission_id` on the `Permission` table. All the data in the column will be lost.
  - You are about to drop the column `permission_id` on the `RolePermissions` table. All the data in the column will be lost.
  - You are about to drop the column `granted_at` on the `UserPermissions` table. All the data in the column will be lost.
  - You are about to drop the column `permission_id` on the `UserPermissions` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `UserPermissions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[roleId,permissionId]` on the table `RolePermissions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,permissionId]` on the table `UserPermissions` will be added. If there are existing duplicate values, this will fail.
  - The required column `permissionId` was added to the `Permission` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `permissionId` to the `RolePermissions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `permissionId` to the `UserPermissions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserPermissions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RolePermissions" DROP CONSTRAINT "RolePermissions_permission_id_fkey";

-- DropForeignKey
ALTER TABLE "UserPermissions" DROP CONSTRAINT "UserPermissions_permission_id_fkey";

-- DropForeignKey
ALTER TABLE "UserPermissions" DROP CONSTRAINT "UserPermissions_user_id_fkey";

-- DropIndex
DROP INDEX "RolePermissions_roleId_permission_id_key";

-- DropIndex
DROP INDEX "UserPermissions_user_id_permission_id_key";

-- AlterTable
ALTER TABLE "Permission" DROP CONSTRAINT "Permission_pkey",
DROP COLUMN "display_name",
DROP COLUMN "permission_id",
ADD COLUMN     "displayName" TEXT,
ADD COLUMN     "permissionId" TEXT NOT NULL,
ADD CONSTRAINT "Permission_pkey" PRIMARY KEY ("permissionId");

-- AlterTable
ALTER TABLE "RolePermissions" DROP COLUMN "permission_id",
ADD COLUMN     "permissionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserPermissions" DROP COLUMN "granted_at",
DROP COLUMN "permission_id",
DROP COLUMN "user_id",
ADD COLUMN     "grantedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "permissionId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "RolePermissions_roleId_permissionId_key" ON "RolePermissions"("roleId", "permissionId");

-- CreateIndex
CREATE UNIQUE INDEX "UserPermissions_userId_permissionId_key" ON "UserPermissions"("userId", "permissionId");

-- AddForeignKey
ALTER TABLE "RolePermissions" ADD CONSTRAINT "RolePermissions_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permission"("permissionId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPermissions" ADD CONSTRAINT "UserPermissions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPermissions" ADD CONSTRAINT "UserPermissions_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permission"("permissionId") ON DELETE RESTRICT ON UPDATE CASCADE;
