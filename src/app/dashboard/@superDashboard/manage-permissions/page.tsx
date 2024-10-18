import { Layout } from "@/tw-styled/ui";
import {
  AdminPermissions,
  SuperPermissions,
  UserPermissions
} from "@/features/dashboard/super/molecules";

export default async function ManagePermissions() {
  return (
    <Layout
      options={{ titleText: "Manage Permissions", titleAs: "h2" }}
      style={{
        parentWrapper: { spaceY: "md" },
        childrenWrapper: { display: "flex-col", gap: "lg", place: "center" }
      }}
    >
      <UserPermissions />
      <AdminPermissions />
      <SuperPermissions />
    </Layout>
  );
}
