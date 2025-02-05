import { SignInForm } from "@/features/authentication/molecules";

export default function SignIn() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl">Sign In</h1>
      <SignInForm />
    </div>
  );
}
