import { AuthorizedAdmins } from "@/features/dashboard/super/authorized-admins/templates";
import { Layout } from "@/ui/components";

export default function ManageAdminsPage() {
  return (
    <Layout
      options={{ title: <h2>Manage Authorized Admins</h2> }}
      style={{ parentWrapper: { spaceY: "lg" } }}
    >
      <AuthorizedAdmins />
    </Layout>
  );
}
