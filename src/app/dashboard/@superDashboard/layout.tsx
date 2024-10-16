import { SuperNav } from "@/features/dashboard/super/atoms";
import { Box } from "@/tw-styled/ui";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      style={{
        wrapper: { display: "flex-col", gap: "md", flexSize: "grow" }
      }}
    >
      <SuperNav />

      <Box
        style={{
          wrapper: {
            padding: "lg",
            borderRadius: "lg",
            flexSize: "grow",
            backgroundColor: "primary"
          }
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
