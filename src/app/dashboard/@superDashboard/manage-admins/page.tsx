import { AuthorizedAdmins } from "@/features/dashboard/super/authorized-admins/templates";
import { Layout } from "@/tw-styled/ui";

export default function ManageAdminsPage() {
  return (
    <Layout
      options={{ titleText: "Manage Authorized Admins", titleAs: "h2" }}
      style={{ parentWrapper: { spaceY: "lg" } }}
    >
      <AuthorizedAdmins />
    </Layout>
  );
}
