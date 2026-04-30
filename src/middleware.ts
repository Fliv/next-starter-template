import { NextResponse, type NextRequest } from "next/server";

const workerImagePattern = /^\/ex.*\.png$/i;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (workerImagePattern.test(pathname)) {
    const sourceIp = request.headers.get("cf-connecting-ip") ?? "unknown";

    console.log(`[public-asset] ${request.method} ${pathname} ip=${sourceIp}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
