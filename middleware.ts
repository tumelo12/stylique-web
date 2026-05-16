import { NextRequest, NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.WAITLIST_ADMIN_PASSWORD;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");

  if (!authHeader) {
    return unauthorized();
  }

  const [scheme, encoded] = authHeader.split(" ");

  if (scheme !== "Basic" || !encoded) {
    return unauthorized();
  }

  const decoded = atob(encoded);
  const password = decoded.split(":")[1];

  if (!ADMIN_PASSWORD || password !== ADMIN_PASSWORD) {
    return unauthorized();
  }

  return NextResponse.next();
}

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Stylique Admin"',
    },
  });
}

export const config = {
  matcher: ["/admin/:path*"],
};