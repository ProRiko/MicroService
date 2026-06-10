import { NextResponse } from 'next/server';

import { platformSessionCookieName, createPlatformSession, serializePlatformSession } from '@/lib/auth/session';
import { createWorkspaceFromSeed } from '@/services/platform/workspace-factory';
import { platformRoutes } from '@/config/platform';

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    businessName?: string;
    industry?: string;
    ownerName?: string;
    email?: string;
  } | null;

  const businessName = body?.businessName?.trim();
  const industry = body?.industry?.trim() ?? 'general';
  const ownerName = body?.ownerName?.trim();
  const email = body?.email?.trim();

  if (!businessName || !ownerName || !email) {
    return NextResponse.json({ error: 'Business name, owner name, and email are required.' }, { status: 400 });
  }

  const workspace = createWorkspaceFromSeed({ businessName, industry, ownerName, ownerEmail: email });
  const session = createPlatformSession({
    userId: workspace.users[0].id,
    tenantId: workspace.tenant.id,
    role: 'business-owner',
    name: ownerName,
    email
  });

  const response = NextResponse.json({ ok: true, redirectTo: platformRoutes.dashboard, workspace, session });

  response.cookies.set(platformSessionCookieName, serializePlatformSession(session), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 12
  });

  return response;
}