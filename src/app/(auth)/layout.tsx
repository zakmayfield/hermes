import { AuthenticationLayoutTemplate } from "@/features/authentication/templates";

export default async function AuthenticationLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <AuthenticationLayoutTemplate>{children}</AuthenticationLayoutTemplate>;
}
