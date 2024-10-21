import { Layout } from "@/tw-styled/ui";
import { AdminPermissions } from "@/features/dashboard/super/templates";

export default async function ManagePermissions() {
  return (
    <Layout
      options={{ titleText: "Manage Permissions", titleAs: "h2" }}
      style={{
        parentWrapper: { spaceY: "md" },
        childrenWrapper: { display: "flex-col", gap: "lg", place: "center" }
      }}
    >
      <AdminPermissions />
    </Layout>
  );
}
