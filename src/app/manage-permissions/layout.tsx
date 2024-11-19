import { Layout } from "@/ui";

export default async function ManagePermissionsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout
      options={{ as: "main", title: <h1>Manage Permissions</h1> }}
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
      {children}
    </Layout>
  );
}
