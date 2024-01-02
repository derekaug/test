import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  // currently Next.js doesn't have a way to get the current path in
  // a server component, this throws it into the headers for each
  // request so we can grab it 😮‍💨
  requestHeaders.set(
    "x-current",
    `${request.nextUrl.pathname}${request.nextUrl.search}`
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return response;
}
