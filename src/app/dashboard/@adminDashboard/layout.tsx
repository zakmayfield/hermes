import { AdminNav } from "@/features/dashboard/admin/atoms";
import { Wrapper } from "@/tw-styled/ui";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper style={{ childrenWrapper: { display: "flex-col", gap: "md" } }}>
      <AdminNav />

      <Wrapper
        style={{
          parentWrapper: {
            borderRadius: "lg",
            backgroundColor: "secondary",
            padding: "lg"
          }
        }}
      >
        {children}
      </Wrapper>
    </Wrapper>
  );
}
