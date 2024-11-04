import { SignUpForm } from "@/features/authentication/molecules";
import { Layout } from "@/ui/components";

export default function SignUp() {
  return (
    <Layout
      options={{ title: <h1>Sign Up</h1> }}
      style={{ parentWrapper: { padding: "none", spaceY: "md" } }}
    >
      <SignUpForm />
    </Layout>
  );
}
