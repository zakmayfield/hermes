import { SwitchForm } from "@/features/authentication/molecules";
import { Logo } from "@/shared/components";

export default async function AuthenticationLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-lg mx-auto space-y-3">
      <Logo classNames={{ container: "w-xs mx-auto" }} />

      {children}

      <SwitchForm />
    </main>
  );
}
