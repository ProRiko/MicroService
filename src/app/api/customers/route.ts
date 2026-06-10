import { NextResponse, type NextRequest } from 'next/server';

import { platformSessionCookieName, parsePlatformSession } from '@/lib/auth/session';
import { inMemoryPlatformRepository } from '@/services/platform/in-memory-platform-repository';

export function GET(request: NextRequest) {
  const session = parsePlatformSession(request.cookies.get(platformSessionCookieName)?.value);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (session.role === 'platform-admin') {
    return NextResponse.json({ tenantId: session.tenantId, customers: [] });
  }

  return NextResponse.json({ tenantId: session.tenantId, customers: inMemoryPlatformRepository.listCustomers(session.tenantId) });
}