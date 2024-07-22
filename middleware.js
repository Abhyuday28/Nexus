import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const middleware = async (req) => {
  try {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    const { pathname } = req.nextUrl;

    const publicUrl = pathname === "/";
    const authUrl = pathname === "/login" || pathname === "/signup";

    if (!publicUrl && !token && !authUrl) {
      return NextResponse.redirect(new URL(`/login`, req.url));
    }

    if (authUrl && token) {
      return NextResponse.redirect(new URL(`/academic`, req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error(error);
  }
};

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|robots.txt|public|images|manifest.json|sw.js|favicon.ico|workbox-*).*)",
    "/",
  ],
};

export default middleware;
