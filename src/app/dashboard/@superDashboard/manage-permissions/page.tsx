import { Layout } from "@/tw-styled/ui";
import {
  AdminPermissionsList,
  SuperPermissionsList,
  UserPermissionsList
} from "@/features/dashboard/super/molecules";

export default function ManagePermissions() {
  return (
    <Layout options={{ titleText: "Manage Permissions", titleAs: "h3" }}>
      <SuperPermissionsList />
      <AdminPermissionsList />
      <UserPermissionsList />
    </Layout>
  );
}
