/*
  Warnings:

  - The values [APPROVE_USER,CREATE_USER,UPDATE_USER,DELETE_USER] on the enum `Permissions` will be removed. If these variants are still used in the database, this will fail.
  - The values [USER] on the enum `Roles` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Permissions_new" AS ENUM ('APPROVE_CUSTOMER', 'CREATE_CUSTOMER', 'UPDATE_CUSTOMER', 'DELETE_CUSTOMER', 'DELETE_ADMIN', 'GRANT_PERMISSIONS', 'REVOKE_PERMISSIONS');
ALTER TABLE "Permission" ALTER COLUMN "name" TYPE "Permissions_new" USING ("name"::text::"Permissions_new");
ALTER TYPE "Permissions" RENAME TO "Permissions_old";
ALTER TYPE "Permissions_new" RENAME TO "Permissions";
DROP TYPE "Permissions_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Roles_new" AS ENUM ('SUPER', 'ADMIN', 'CUSTOMER');
ALTER TABLE "Role" ALTER COLUMN "name" TYPE "Roles_new" USING ("name"::text::"Roles_new");
ALTER TYPE "Roles" RENAME TO "Roles_old";
ALTER TYPE "Roles_new" RENAME TO "Roles";
DROP TYPE "Roles_old";
COMMIT;
