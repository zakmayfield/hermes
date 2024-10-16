import { SuperNav } from "@/features/dashboard/super/atoms";
import { Wrapper } from "@/tw-styled/ui";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper style={{ childrenWrapper: { display: "flex-col", gap: "md" } }}>
      <SuperNav />

      <Wrapper
        style={{
          parentWrapper: {
            borderRadius: "lg",
            backgroundColor: "primary",
            padding: "lg"
          }
        }}
      >
        {children}
      </Wrapper>
    </Wrapper>
  );
}
