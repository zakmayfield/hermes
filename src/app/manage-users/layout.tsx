import { Layout } from "@/ui";

export default async function ManageUsersLayout({
  approvals,
  onboarding
}: {
  children: React.ReactNode;
  approvals: React.ReactNode;
  onboarding: React.ReactNode;
}) {
  return (
    <Layout
      options={{ as: "main", title: <h1>Manage Users</h1> }}
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
      <div>{approvals}</div>
      <div>{onboarding}</div>
    </Layout>
  );
}
