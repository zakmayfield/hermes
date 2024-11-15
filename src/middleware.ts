import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

const authenticationRoutes: string[] = ["/sign-up", "/sign-in"];
const publicRoutes: string[] = [...authenticationRoutes];

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
}

export const config = {
  matcher: ["/", "/sign-in", "/sign-up", "/dashboard/:path*", "/quickbooks/:path*"]
};
