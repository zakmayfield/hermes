import { SegmentLayout } from "@/features/dashboard";
import { SuperNav } from "@/features/dashboard/super";
import {
  auth_code_base_url,
  client_id,
  redirect_uri,
  scope,
  state
} from "@/features/quickbooks/QuickBooks.utils";

export default async function SuperDashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const authCodeRequestUrl = `${auth_code_base_url}?response_type=code&client_id=${client_id}&redirect_uri=${encodeURIComponent(
    redirect_uri
  )}&scope=${scope}&state=${state}`;

  return (
    <SegmentLayout nav={<SuperNav authCodeRequestUrl={authCodeRequestUrl} />}>
      {children}
    </SegmentLayout>
  );
}
