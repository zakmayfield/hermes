import { AuthLayout } from "@/features/templates";

export default async function AuthenticationLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
