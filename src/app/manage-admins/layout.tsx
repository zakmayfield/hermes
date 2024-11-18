import { Layout } from "@/ui";

export default async function ManageAdminsLayout({
  authorization,
  grant_permissions
}: {
  children: React.ReactNode;
  authorization: React.ReactNode;
  grant_permissions: React.ReactNode;
}) {
  return (
    <Layout
      options={{ as: "main", title: <h1>Manage Admins</h1> }}
      style={{
        parentWrapper: {
          spaceY: "lg"
        },
        bodyWrapper: {
          display: "flex-col",
          gap: "lg"
        }
      }}
    >
      <div>{grant_permissions}</div>
      <div>{authorization}</div>
    </Layout>
  );
}
