import { NextResponse, type NextRequest } from 'next/server';

import { parsePlatformSession, platformSessionCookieName } from '@/lib/auth/session';
import { platformRoutes } from '@/config/platform';

const protectedPrefixes = ['/dashboard'];
const authPrefixes = ['/auth/login', '/auth/sign-up'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = parsePlatformSession(request.cookies.get(platformSessionCookieName)?.value);

  if (authPrefixes.some((prefix) => pathname.startsWith(prefix)) && session) {
    return NextResponse.redirect(new URL(platformRoutes.dashboard, request.url));
  }

  if (protectedPrefixes.some((prefix) => pathname.startsWith(prefix)) && !session) {
    const loginUrl = new URL(platformRoutes.authLogin, request.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/login', '/auth/sign-up']
};