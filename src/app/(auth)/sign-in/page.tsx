import { SignInForm } from "@/features/authentication/molecules";
import { Layout } from "@/tw-styled/ui";

export default function SignIn() {
  return (
    <Layout
      options={{ titleText: "Sign In" }}
      style={{ parentWrapper: { padding: "none", spaceY: "md" } }}
    >
      <SignInForm />
    </Layout>
  );
}
