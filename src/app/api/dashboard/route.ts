import { NextResponse, type NextRequest } from 'next/server';

import { platformSessionCookieName, parsePlatformSession } from '@/lib/auth/session';
import { inMemoryPlatformRepository } from '@/services/platform/in-memory-platform-repository';

export function GET(request: NextRequest) {
  const session = parsePlatformSession(request.cookies.get(platformSessionCookieName)?.value);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (session.role === 'platform-admin') {
    return NextResponse.json({
      tenantId: session.tenantId,
      summary: {
        customerCount: 128,
        upcomingAppointments: 42,
        newLeads: 19,
        websiteVisits: 4821,
        recentActivities: []
      }
    });
  }

  return NextResponse.json({
    tenantId: session.tenantId,
    summary: inMemoryPlatformRepository.getDashboardSummary(session.tenantId)
  });
}