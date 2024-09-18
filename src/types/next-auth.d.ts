import { OnboardingStatus } from "@prisma/client";
import { User } from "next-auth";

declare module "next-auth" {
  interface User {
    onboarding: {
      status: OnboardingStatus;
    } | null;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      email: string;
      onboarding_status?: OnboardingStatus;
      // cart_id: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    onboarding_status?: OnboardingStatus;
    // cart_id: string;
  }
}
