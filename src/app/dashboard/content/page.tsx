import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Globe2, MapPinned, Phone } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { platformRoutes } from '@/config/platform';
import { parsePlatformSession, platformSessionCookieName } from '@/lib/auth/session';
import { inMemoryPlatformRepository } from '@/services/platform/in-memory-platform-repository';

export default function ContentPage() {
  const session = parsePlatformSession(cookies().get(platformSessionCookieName)?.value);

  if (!session) {
    redirect(platformRoutes.authLogin);
  }

  const websiteContent = session.role === 'platform-admin' ? null : inMemoryPlatformRepository.getWebsiteContent(session.tenantId);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container-shell py-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Website content</p>
            <h1 className="font-display text-3xl font-semibold tracking-tight">Business profile</h1>
          </div>
          <Link href={platformRoutes.dashboard} className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted">
            Back to dashboard
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Public website content</CardTitle>
              <CardDescription>These fields should eventually sync with the public-facing business site.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><Globe2 className="h-4 w-4" />{websiteContent?.businessName ?? 'Platform admin view'}</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" />{websiteContent?.contactPhone ?? 'Not set'}</p>
              <p className="flex items-center gap-2"><MapPinned className="h-4 w-4" />{websiteContent?.openingHours ?? 'Not set'}</p>
              <p className="leading-6">{websiteContent?.heroDescription ?? 'No website content available.'}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Editing surface</CardTitle>
              <CardDescription>Wire this form into content mutations and asset uploads next.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-dashed border-border/70 p-4">
                Logo uploads, services, contact details, hours, and gallery updates belong here.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}