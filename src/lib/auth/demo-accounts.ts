import type { UserRole } from '@/types/platform';

export interface DemoAccount {
  userId: string;
  tenantId: string;
  role: UserRole;
  name: string;
  email: string;
}

const demoAccounts: DemoAccount[] = [
  {
    userId: 'platform-admin-001',
    tenantId: 'platform',
    role: 'platform-admin',
    name: 'Platform Admin',
    email: 'admin@microservice.example'
  },
  {
    userId: 'user-owner-001',
    tenantId: 'tenant-gym-001',
    role: 'business-owner',
    name: 'Aarav Mehta',
    email: 'owner@peakperformance.example'
  },
  {
    userId: 'user-staff-001',
    tenantId: 'tenant-gym-001',
    role: 'staff-member',
    name: 'Reception Team',
    email: 'staff@peakperformance.example'
  }
];

export function findDemoAccount(email: string) {
  return demoAccounts.find((account) => account.email.toLowerCase() === email.toLowerCase().trim()) ?? null;
}
