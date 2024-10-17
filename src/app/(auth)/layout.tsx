import { SwitchForm } from "@/features/authentication/molecules";
import { Logo } from "@/shared/components";
import { Box } from "@/tw-styled/ui";

export default async function AuthenticationLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      as="main"
      style={{
        wrapper: { display: "flex-col", gap: "xl", flexColPosition: "top-center" }
      }}
    >
      <Logo style={{ wrapper: { width: "sm" } }} />

      {children}

      <SwitchForm />
    </Box>
  );
}
