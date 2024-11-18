import { Layout } from "@/ui";

export default async function ManageUsersLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // TODO: *** Validate role and redirect or handle in middleware ***

  return (
    <Layout options={{ as: "main", title: <h1>Manage Users</h1> }}>{children}</Layout>
  );
}
