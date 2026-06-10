import { NextResponse, type NextRequest } from 'next/server';

import { platformSessionCookieName, parsePlatformSession } from '@/lib/auth/session';

export function GET(request: NextRequest) {
  const session = parsePlatformSession(request.cookies.get(platformSessionCookieName)?.value);

  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 200 });
  }

  return NextResponse.json({ authenticated: true, session });
}