import type {
  ActivityLogRecord,
  AppointmentRecord,
  CustomerRecord,
  DashboardSummary,
  ServiceRecord,
  TenantWorkspace,
  WebsiteContentRecord
} from '@/types/platform';

export interface PlatformRepository {
  getWorkspace(tenantId: string): TenantWorkspace | undefined;
  getDashboardSummary(tenantId: string): DashboardSummary;
  listCustomers(tenantId: string): CustomerRecord[];
  listAppointments(tenantId: string): AppointmentRecord[];
  listServices(tenantId: string): ServiceRecord[];
  listActivityLogs(tenantId: string): ActivityLogRecord[];
  getWebsiteContent(tenantId: string): WebsiteContentRecord | undefined;
}

const sampleWorkspace: TenantWorkspace = {
  tenant: {
    id: 'tenant-gym-001',
    slug: 'peak-performance-gym',
    name: 'Peak Performance Gym',
    industry: 'gym',
    plan: 'growth',
    timezone: 'Asia/Kolkata',
    createdAt: '2026-06-10T00:00:00.000Z',
    updatedAt: '2026-06-10T00:00:00.000Z'
  },
  users: [
    {
      id: 'user-owner-001',
      tenantId: 'tenant-gym-001',
      role: 'business-owner',
      name: 'Aarav Mehta',
      email: 'owner@peakperformance.example',
      createdAt: '2026-06-10T00:00:00.000Z',
      updatedAt: '2026-06-10T00:00:00.000Z'
    }
  ],
  customers: [
    {
      id: 'customer-001',
      tenantId: 'tenant-gym-001',
      name: 'Priya Singh',
      email: 'priya@example.com',
      phone: '+91 98765 43210',
      notes: 'Interested in personal training plan.',
      lastInteractionAt: '2026-06-09T10:30:00.000Z',
      leadStatus: 'active',
      createdAt: '2026-06-01T10:30:00.000Z',
      updatedAt: '2026-06-09T10:30:00.000Z'
    }
  ],
  appointments: [
    {
      id: 'appointment-001',
      tenantId: 'tenant-gym-001',
      customerId: 'customer-001',
      serviceId: 'service-001',
      scheduledAt: '2026-06-11T08:00:00.000Z',
      status: 'confirmed',
      notes: 'First consultation session.',
      createdAt: '2026-06-08T12:00:00.000Z',
      updatedAt: '2026-06-09T12:00:00.000Z'
    }
  ],
  services: [
    {
      id: 'service-001',
      tenantId: 'tenant-gym-001',
      name: 'Personal Training Assessment',
      description: 'A guided assessment with a trainer to set fitness goals.',
      durationMinutes: 45,
      price: 999,
      isActive: true,
      createdAt: '2026-06-01T00:00:00.000Z',
      updatedAt: '2026-06-01T00:00:00.000Z'
    }
  ],
  websiteContent: {
    tenantId: 'tenant-gym-001',
    businessName: 'Peak Performance Gym',
    logoUrl: '/images/clients/gym-logo.svg',
    heroTitle: 'Train smarter. Track progress. Grow your memberships.',
    heroDescription: 'Manage your business website, customers, and bookings from one platform.',
    contactEmail: 'hello@peakperformance.example',
    contactPhone: '+91 98765 43210',
    openingHours: 'Mon-Sat 6:00 AM - 10:00 PM',
    serviceHighlights: ['Personal Training', 'Fat Loss Plans', 'Strength Coaching'],
    updatedAt: '2026-06-10T00:00:00.000Z'
  },
  activityLogs: [
    {
      id: 'activity-001',
      tenantId: 'tenant-gym-001',
      actorUserId: 'user-owner-001',
      action: 'created appointment',
      subjectType: 'appointment',
      subjectId: 'appointment-001',
      metadata: { status: 'confirmed' },
      createdAt: '2026-06-09T12:00:00.000Z'
    }
  ]
};

const workspaces = new Map<string, TenantWorkspace>([[sampleWorkspace.tenant.id, sampleWorkspace]]);

function getWorkspaceOrThrow(tenantId: string): TenantWorkspace {
  const workspace = workspaces.get(tenantId);

  if (!workspace) {
    throw new Error(`No workspace found for tenant ${tenantId}`);
  }

  return workspace;
}

function buildDashboardSummary(workspace: TenantWorkspace): DashboardSummary {
  return {
    customerCount: workspace.customers.length,
    upcomingAppointments: workspace.appointments.filter((appointment) => appointment.status !== 'cancelled').length,
    newLeads: workspace.customers.filter((customer) => customer.leadStatus === 'new').length,
    websiteVisits: 1284,
    recentActivities: [...workspace.activityLogs].slice(0, 5)
  };
}

export const inMemoryPlatformRepository: PlatformRepository = {
  getWorkspace(tenantId) {
    return workspaces.get(tenantId);
  },
  getDashboardSummary(tenantId) {
    return buildDashboardSummary(getWorkspaceOrThrow(tenantId));
  },
  listCustomers(tenantId) {
    return [...getWorkspaceOrThrow(tenantId).customers];
  },
  listAppointments(tenantId) {
    return [...getWorkspaceOrThrow(tenantId).appointments];
  },
  listServices(tenantId) {
    return [...getWorkspaceOrThrow(tenantId).services];
  },
  listActivityLogs(tenantId) {
    return [...getWorkspaceOrThrow(tenantId).activityLogs];
  },
  getWebsiteContent(tenantId) {
    return getWorkspaceOrThrow(tenantId).websiteContent;
  }
};

export function seedWorkspace(workspace: TenantWorkspace) {
  workspaces.set(workspace.tenant.id, workspace);
}