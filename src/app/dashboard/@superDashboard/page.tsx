import { UserAnalytics } from "@/features/dashboard/super/user-analytics/templates";
import { Heading, Layout } from "@/ui";

export default function Page() {
  return (
    <Layout
      options={{ title: <h2>Overview</h2> }}
      style={{ parentWrapper: { spaceY: "lg" }, bodyWrapper: { spaceY: "lg" } }}
    >
      <UserAnalytics />

      <Heading
        as="h3"
        text="Order Analytics"
      />

      <Heading
        as="h3"
        text="Popular Product Analytics"
      />

      <Heading
        as="h3"
        text="Onboarding Analytics"
      />

      <Heading
        as="h3"
        text="Cart Analytics"
      />
    </Layout>
  );
}
