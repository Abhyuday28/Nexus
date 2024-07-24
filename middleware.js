import { getToken } from "next-auth/jwt";
import { apiRoutePrefix, authRoutes, publicRoutes } from "./routes";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const nextUrl = req.nextUrl;
  const pathname = req.nextUrl.pathname;
  const token = await getToken({ req });
  const isLoggedIn = !!token;

  const isApiRoute = pathname.startsWith(apiRoutePrefix);
  const isAuthRoutes = authRoutes.includes(pathname);
  const isPublicRoute = publicRoutes.includes(pathname);

  if (isApiRoute) return null;

  if (isAuthRoutes) {
    if (isLoggedIn) return NextResponse.redirect(new URL("/academic", nextUrl));
    else return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  return null;
};

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)", "/"],
};
