import { OnboardingStatus, Roles, User } from "@prisma/client";
import { User as NextAuthUser } from "next-auth";

export type SessionUser = NextAuthUser & {
  email: string;
  onboarding_status?: OnboardingStatus;
  role: Roles;
};

export type CoreSessionUser = Pick<SessionUser, "id" | "email" | "role">;

export type SecureUser = Omit<User, "password">;

export type UserWithOnboardingStatus = SecureUser & {
  onboarding: {
    status: OnboardingStatus;
  } | null;
};
