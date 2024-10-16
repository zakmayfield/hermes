import { AdminNav } from "@/features/dashboard/admin/atoms";
import { Box } from "@/tw-styled/ui";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      style={{
        wrapper: { display: "flex-col", gap: "md", flexSize: "grow" }
      }}
    >
      <AdminNav />

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
