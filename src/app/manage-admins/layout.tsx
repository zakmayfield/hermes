import { Layout } from "@/ui";

export default async function ManageAdminsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // TODO: *** Validate role and redirect or handle in middleware ***

  return (
    <Layout options={{ as: "main", title: <h1>Manage Admins</h1> }}>{children}</Layout>
  );
}
