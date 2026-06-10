import type { AppointmentStatus, LeadStatus, UserRole } from '@/types/platform';

export const platformProductName = 'MicroService';

export const platformPositioning =
  'A multi-tenant business operating platform that helps small businesses launch their online presence, manage customers, handle appointments, and monitor business activity from a single dashboard.';

export const platformRoles: UserRole[] = ['platform-admin', 'business-owner', 'staff-member'];

export const leadStatuses: LeadStatus[] = ['new', 'contacted', 'active', 'inactive'];

export const appointmentStatuses: AppointmentStatus[] = ['pending', 'confirmed', 'completed', 'cancelled'];

export const platformRoutes = {
  home: '/',
  dashboard: '/dashboard',
  authLogin: '/auth/login',
  authSignUp: '/auth/sign-up',
  customers: '/dashboard/customers',
  appointments: '/dashboard/appointments',
  websiteContent: '/dashboard/content'
} as const;