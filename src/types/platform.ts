export type TenantPlan = 'starter' | 'growth' | 'scale';

export type UserRole = 'platform-admin' | 'business-owner' | 'staff-member';

export type LeadStatus = 'new' | 'contacted' | 'active' | 'inactive';

export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface Tenant {
  id: string;
  slug: string;
  name: string;
  industry: string;
  plan: TenantPlan;
  timezone: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserAccount {
  id: string;
  tenantId: string;
  role: UserRole;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerRecord {
  id: string;
  tenantId: string;
  name: string;
  email?: string;
  phone?: string;
  notes?: string;
  lastInteractionAt?: string;
  leadStatus: LeadStatus;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceRecord {
  id: string;
  tenantId: string;
  name: string;
  description?: string;
  durationMinutes?: number;
  price?: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AppointmentRecord {
  id: string;
  tenantId: string;
  customerId: string;
  serviceId?: string;
  scheduledAt: string;
  status: AppointmentStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface WebsiteContentRecord {
  tenantId: string;
  businessName: string;
  logoUrl?: string;
  heroTitle: string;
  heroDescription: string;
  contactEmail?: string;
  contactPhone?: string;
  openingHours?: string;
  serviceHighlights: string[];
  updatedAt: string;
}

export interface ActivityLogRecord {
  id: string;
  tenantId: string;
  actorUserId?: string;
  action: string;
  subjectType: 'customer' | 'appointment' | 'service' | 'website-content' | 'tenant';
  subjectId?: string;
  metadata?: Record<string, string | number | boolean | null>;
  createdAt: string;
}

export interface DashboardSummary {
  customerCount: number;
  upcomingAppointments: number;
  newLeads: number;
  websiteVisits: number;
  recentActivities: ActivityLogRecord[];
}

export interface TenantWorkspace {
  tenant: Tenant;
  users: UserAccount[];
  customers: CustomerRecord[];
  appointments: AppointmentRecord[];
  services: ServiceRecord[];
  websiteContent: WebsiteContentRecord;
  activityLogs: ActivityLogRecord[];
}