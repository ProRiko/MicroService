import { randomUUID } from 'node:crypto';

import { seedWorkspace } from '@/services/platform/in-memory-platform-repository';
import type { TenantWorkspace } from '@/types/platform';

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 32);
}

export interface TenantSeedInput {
  businessName: string;
  industry: string;
  ownerName: string;
  ownerEmail: string;
}

export function createWorkspaceFromSeed(input: TenantSeedInput): TenantWorkspace {
  const now = new Date().toISOString();
  const tenantId = `tenant-${randomUUID()}`;
  const tenantSlug = slugify(input.businessName) || `tenant-${tenantId.slice(0, 8)}`;

  const workspace: TenantWorkspace = {
    tenant: {
      id: tenantId,
      slug: tenantSlug,
      name: input.businessName,
      industry: input.industry,
      plan: 'starter',
      timezone: 'Asia/Kolkata',
      createdAt: now,
      updatedAt: now
    },
    users: [
      {
        id: `user-${randomUUID()}`,
        tenantId,
        role: 'business-owner',
        name: input.ownerName,
        email: input.ownerEmail,
        createdAt: now,
        updatedAt: now
      }
    ],
    customers: [],
    appointments: [],
    services: [],
    websiteContent: {
      tenantId,
      businessName: input.businessName,
      heroTitle: `${input.businessName} runs on MicroService`,
      heroDescription: 'Launch your public website, manage customers, and track appointments from a single workspace.',
      contactEmail: input.ownerEmail,
      serviceHighlights: [],
      updatedAt: now
    },
    activityLogs: []
  };

  seedWorkspace(workspace);
  return workspace;
}
