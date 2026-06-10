import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ArrowRight, CalendarDays, Clock3, LayoutDashboard, LogOut, Settings2, Users2 } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { platformRoutes } from '@/config/platform';
import { parsePlatformSession, platformSessionCookieName } from '@/lib/auth/session';
import { inMemoryPlatformRepository } from '@/services/platform/in-memory-platform-repository';

function getDashboardMetrics(tenantId: string) {
  return inMemoryPlatformRepository.getDashboardSummary(tenantId);
}

export default function DashboardPage() {
  const session = parsePlatformSession(cookies().get(platformSessionCookieName)?.value);

  if (!session) {
    redirect(platformRoutes.authLogin);
  }

  const isPlatformAdmin = session.role === 'platform-admin';
  const workspace = isPlatformAdmin ? null : inMemoryPlatformRepository.getWorkspace(session.tenantId);
  const dashboard = isPlatformAdmin
    ? {
        customerCount: 128,
        upcomingAppointments: 42,
        newLeads: 19,
        websiteVisits: 4821,
        recentActivities: []
      }
    : getDashboardMetrics(session.tenantId);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border/60 bg-muted/20">
        <div className="container-shell py-10 sm:py-14">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Business dashboard</p>
              <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                {isPlatformAdmin ? 'Platform control center' : workspace?.tenant.name ?? session.name}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                {isPlatformAdmin
                  ? 'Monitor tenant growth, operational activity, and product health from one admin surface.'
                  : 'Track customers, appointments, and website changes from your tenant workspace.'}
              </p>
            </div>

            <div className="flex gap-3">
              <Link href="/api/auth/logout" className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted">
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container-shell space-y-10 py-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: Users2, label: 'Total customers', value: dashboard.customerCount },
            { icon: CalendarDays, label: 'Upcoming appointments', value: dashboard.upcomingAppointments },
            { icon: LayoutDashboard, label: 'New leads', value: dashboard.newLeads },
            { icon: Clock3, label: 'Website visits', value: dashboard.websiteVisits }
          ].map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.label} className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="mt-2 font-display text-4xl font-semibold tracking-tight">{item.value}</p>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <CardHeader>
              <CardTitle>Recent activity</CardTitle>
              <CardDescription>Operations events and customer changes appear here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {dashboard.recentActivities.length > 0 ? (
                dashboard.recentActivities.map((activity) => (
                  <div key={activity.id} className="rounded-2xl border border-border/70 p-4">
                    <p className="font-medium text-foreground">{activity.action}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{activity.subjectType}</p>
                  </div>
                ))
              ) : (
                <p className="rounded-2xl border border-dashed border-border/70 p-4 text-sm text-muted-foreground">
                  No recent activity yet. Connect CRM and appointment events to populate this feed.
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Workspace shortcuts</CardTitle>
              <CardDescription>Placeholder navigation for future modules.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: 'Customer CRM', href: '/dashboard/customers' },
                { label: 'Appointments', href: '/dashboard/appointments' },
                { label: 'Website content', href: '/dashboard/content' }
              ].map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center justify-between rounded-2xl border border-border/70 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted/40">
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
              <Link href={platformRoutes.home} className="flex items-center justify-between rounded-2xl border border-border/70 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted/40">
                <span>Public website home</span>
                <Settings2 className="h-4 w-4 text-muted-foreground" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}