import { UserAnalytics } from "@/features/dashboard/super/user-analytics/templates";
import { Layout } from "@/ui";

export default function Page() {
  return (
    <Layout
      options={{ title: <h2>Overview</h2> }}
      style={{ parentWrapper: { spaceY: "lg" } }}
    >
      <UserAnalytics />
    </Layout>
  );
}
