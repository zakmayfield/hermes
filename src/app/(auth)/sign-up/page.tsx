import { SignUpForm } from "@/features/authentication/molecules";
import { Layout } from "@/tw-styled/ui";

export default function SignUp() {
  return (
    <Layout
      options={{ titleText: "Sign Up" }}
      style={{ parentWrapper: { padding: "none", spaceY: "md" } }}
    >
      <SignUpForm />
    </Layout>
  );
}
