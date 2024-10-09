import { ManagePermissionsLayout } from "@/features/dashboard/super/templates";
import {
  AdminPermissionsList,
  SuperPermissionsList,
  UserPermissionsList
} from "@/features/dashboard/super/molecules";

export default function ManagePermissions() {
  return (
    <ManagePermissionsLayout>
      <SuperPermissionsList />
      <AdminPermissionsList />
      <UserPermissionsList />
    </ManagePermissionsLayout>
  );
}
