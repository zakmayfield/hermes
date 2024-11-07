import { AuthorizedAdmins } from "@/features/dashboard/super/authorized-admins/templates";
import { GrantPermissions } from "@/features/dashboard/super/grant-permissions/templates";
import { Layout } from "@/ui/components";

export default function ManageAdminsPage() {
  return (
    <Layout
      options={{ title: <h2>Manage Admins</h2> }}
      style={{
        parentWrapper: { spaceY: "lg" },
        bodyWrapper: {
          display: "flex-col",
          gap: "lg"
        }
      }}
    >
      <AuthorizedAdmins />
      <GrantPermissions />
    </Layout>
  );
}
