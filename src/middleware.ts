import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";
import { validateRoles } from "./utils/security/role";

const authenticationRoutes: string[] = ["/sign-up", "/sign-in"];
const publicRoutes: string[] = [...authenticationRoutes];
const adminRoutes: string[] = ["/qb", "/quickbooks", "/manage-users"];
const superRoutes: string[] = ["/manage-admins", "/manage-permissions"];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  // Redirect away from protected routes if unauthenticated
  if (!token && !publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
  }

  // Redirect from authentication pages if authenticated
  if (token && authenticationRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  // Role validation
  const { hasValidRole: isAdmin } = await validateRoles(["ADMIN", "SUPER"], token?.role);
  if (!isAdmin && adminRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  const { hasValidRole: isSuper } = await validateRoles(["SUPER"], token?.role);
  if (!isSuper && superRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }
}

export const config = {
  matcher: [
    "/",
    "/sign-in",
    "/sign-up",
    "/dashboard/:path*",
    "/quickbooks/:path*",
    "/qb/:path*",
    "/manage-users",
    "/manage-admins"
  ]
};
