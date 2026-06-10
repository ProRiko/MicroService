import { NextResponse } from 'next/server';

import { platformSessionCookieName } from '@/lib/auth/session';
import { platformRoutes } from '@/config/platform';

export function GET(request: Request) {
  const response = NextResponse.redirect(new URL(platformRoutes.authLogin, request.url));

  response.cookies.set(platformSessionCookieName, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0
  });

  return response;
}