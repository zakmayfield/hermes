import { ConfigurePermissions } from "@/features/dashboard/super/configure-permissions/templates";
import { Layout } from "@/ui/components";

export default async function ManagePermissions() {
  return (
    <Layout
      options={{ title: <h2>Configure Permissions</h2> }}
      style={{
        parentWrapper: { spaceY: "md" },
        bodyWrapper: { display: "flex-col", gap: "lg", place: "center" }
      }}
    >
      <ConfigurePermissions />
    </Layout>
  );
}
