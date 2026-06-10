import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Mail, Phone, Plus } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { platformRoutes } from '@/config/platform';
import { parsePlatformSession, platformSessionCookieName } from '@/lib/auth/session';
import { inMemoryPlatformRepository } from '@/services/platform/in-memory-platform-repository';

export default function CustomersPage() {
  const session = parsePlatformSession(cookies().get(platformSessionCookieName)?.value);

  if (!session) {
    redirect(platformRoutes.authLogin);
  }

  const customers = session.role === 'platform-admin' ? [] : inMemoryPlatformRepository.listCustomers(session.tenantId);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container-shell py-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">CRM</p>
            <h1 className="font-display text-3xl font-semibold tracking-tight">Customers</h1>
          </div>
          <Link href={platformRoutes.dashboard} className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted">
            Back to dashboard
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {customers.map((customer) => (
            <Card key={customer.id}>
              <CardHeader>
                <CardTitle>{customer.name}</CardTitle>
                <CardDescription>Lead status: {customer.leadStatus}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                {customer.email ? <p className="flex items-center gap-2"><Mail className="h-4 w-4" />{customer.email}</p> : null}
                {customer.phone ? <p className="flex items-center gap-2"><Phone className="h-4 w-4" />{customer.phone}</p> : null}
                {customer.notes ? <p>{customer.notes}</p> : null}
              </CardContent>
            </Card>
          ))}

          {customers.length === 0 ? (
            <Card className="border-dashed">
              <CardHeader>
                <CardTitle>No customers yet</CardTitle>
                <CardDescription>Add CRM records once customer management mutations are wired up.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium">
                  <Plus className="h-4 w-4" />
                  Add customer
                </div>
              </CardContent>
            </Card>
          ) : null}
        </div>
      </div>
    </main>
  );
}