import { NextResponse } from 'next/server';

import { platformSessionCookieName, createPlatformSession, serializePlatformSession } from '@/lib/auth/session';
import { findDemoAccount } from '@/lib/auth/demo-accounts';
import { platformRoutes } from '@/config/platform';

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { email?: string } | null;
  const email = body?.email?.trim();

  if (!email) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
  }

  const account = findDemoAccount(email);

  if (!account) {
    return NextResponse.json({ error: 'Unknown demo account.' }, { status: 401 });
  }

  const session = createPlatformSession(account);
  const response = NextResponse.json({ ok: true, redirectTo: platformRoutes.dashboard, session });

  response.cookies.set(platformSessionCookieName, serializePlatformSession(session), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 12
  });

  return response;
}