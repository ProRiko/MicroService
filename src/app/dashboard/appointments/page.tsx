import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { CalendarDays, Clock3 } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { platformRoutes } from '@/config/platform';
import { parsePlatformSession, platformSessionCookieName } from '@/lib/auth/session';
import { inMemoryPlatformRepository } from '@/services/platform/in-memory-platform-repository';

export default function AppointmentsPage() {
  const session = parsePlatformSession(cookies().get(platformSessionCookieName)?.value);

  if (!session) {
    redirect(platformRoutes.authLogin);
  }

  const appointments = session.role === 'platform-admin' ? [] : inMemoryPlatformRepository.listAppointments(session.tenantId);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container-shell py-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Bookings</p>
            <h1 className="font-display text-3xl font-semibold tracking-tight">Appointments</h1>
          </div>
          <Link href={platformRoutes.dashboard} className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted">
            Back to dashboard
          </Link>
        </div>

        <div className="mt-8 grid gap-4">
          {appointments.map((appointment) => (
            <Card key={appointment.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5" />
                  {appointment.status}
                </CardTitle>
                <CardDescription>{new Date(appointment.scheduledAt).toLocaleString()}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock3 className="h-4 w-4" />
                Appointment ID {appointment.id}
              </CardContent>
            </Card>
          ))}

          {appointments.length === 0 ? (
            <Card className="border-dashed">
              <CardHeader>
                <CardTitle>No appointments yet</CardTitle>
                <CardDescription>The booking module will connect to a calendar workflow later.</CardDescription>
              </CardHeader>
            </Card>
          ) : null}
        </div>
      </div>
    </main>
  );
}