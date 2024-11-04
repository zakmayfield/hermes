import { SignInForm } from "@/features/authentication/molecules";
import { Layout } from "@/ui/components";

export default function SignIn() {
  return (
    <Layout
      options={{ title: <h1>Sign In</h1> }}
      style={{ parentWrapper: { padding: "none", spaceY: "md" } }}
    >
      <SignInForm />
    </Layout>
  );
}
