import { SwitchForm } from "@/features/authentication/molecules";
import { Logo } from "@/shared/components";

export default async function AuthenticationLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col gap-xl justify-start items-center">
      <Logo classNames={{ container: "w-xs" }} />

      {children}

      <SwitchForm />
    </main>
  );
}
