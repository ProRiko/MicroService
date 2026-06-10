import { randomUUID } from 'node:crypto';

import type { UserRole } from '@/types/platform';

export const platformSessionCookieName = 'microservice_session';

export const platformSessionMaxAgeSeconds = 60 * 60 * 12;

export interface PlatformSession {
  id: string;
  userId: string;
  tenantId: string;
  role: UserRole;
  name: string;
  email: string;
  expiresAt: string;
}

export function createPlatformSession(input: Omit<PlatformSession, 'id' | 'expiresAt'>): PlatformSession {
  const expiresAt = new Date(Date.now() + platformSessionMaxAgeSeconds * 1000).toISOString();

  return {
    ...input,
    id: randomUUID(),
    expiresAt
  };
}

export function serializePlatformSession(session: PlatformSession) {
  return encodeURIComponent(JSON.stringify(session));
}

export function parsePlatformSession(value?: string | null): PlatformSession | null {
  if (!value) return null;

  try {
    const session = JSON.parse(decodeURIComponent(value)) as PlatformSession;
    if (!session.id || !session.userId || !session.tenantId || !session.role || !session.email) return null;
    if (Date.parse(session.expiresAt) < Date.now()) return null;
    return session;
  } catch {
    return null;
  }
}