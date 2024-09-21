import { Logo } from "@/features/authentication/organisms";
import { ContentWrapper } from "@/shared/components/containers";

export default async function AuthenticationLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ContentWrapper
      style={{ flex: "col" }}
      className="min-h-screen"
    >
      <ContentWrapper
        style={{
          flex: "col",
          width: "sm",
          flexCenter: true,
          position: "center",
          gap: "lg"
        }}
        className="mt-6"
      >
        <ContentWrapper
          style={{ width: "full", flex: "row", padding: "lg" }}
          className="justify-center"
        >
          <Logo />
        </ContentWrapper>

        {children}
      </ContentWrapper>
    </ContentWrapper>
  );
}
