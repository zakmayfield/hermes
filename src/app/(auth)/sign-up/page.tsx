import { SignUpForm } from "@/features/authentication/molecules";

export default function SignUp() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-lg w-full lg:items-center lg:w-2xl">
        <h1>Create an Account</h1>
        <SignUpForm />
      </div>
    </div>
  );
}
