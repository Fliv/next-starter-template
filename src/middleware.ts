import { NextResponse, type NextRequest } from "next/server";

const workerImagePattern = /^\/ex.*\.png$/i;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (workerImagePattern.test(pathname)) {
    console.log(`[public-asset] ${request.method} ${pathname}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
