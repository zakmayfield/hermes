import { AdminPermissions } from "@/features/dashboard/super/admin-permissions/templates";
import { Layout } from "@/ui/components";

export default async function ManagePermissions() {
  return (
    <Layout
      options={{ title: <h2>Manage Permissions</h2> }}
      style={{
        parentWrapper: { spaceY: "md" },
        bodyWrapper: { display: "flex-col", gap: "lg", place: "center" }
      }}
    >
      <AdminPermissions />
    </Layout>
  );
}
