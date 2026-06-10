'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Building2, Mail, UserRound } from 'lucide-react';

import { Button, ButtonLink } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { platformRoutes } from '@/config/platform';

export default function SignUpPage() {
  const router = useRouter();
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('gym');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const response = await fetch('/api/auth/sign-up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ businessName, industry, ownerName, email })
    });

    setIsSubmitting(false);

    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(body?.error ?? 'Unable to create tenant.');
      return;
    }

    router.push(platformRoutes.dashboard);
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">New tenant</p>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Launch a new workspace in minutes.</h1>
            <p className="max-w-xl text-base leading-7 text-muted-foreground">
              Seed a business tenant, then expand it with CRM, booking, content, and analytics modules.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Building2, title: 'Business profile', text: 'Create the workspace identity and public website content.' },
              { icon: UserRound, title: 'Owner account', text: 'The first user is created as the business owner.' },
              { icon: Mail, title: 'Tenant-ready', text: 'The seeded workspace is ready for future services and appointments.' }
            ].map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title} className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-muted text-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="space-y-1">
                      <h2 className="font-medium">{item.title}</h2>
                      <p className="text-sm leading-6 text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        <Card className="border-border/70 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
          <CardHeader>
            <CardTitle>Create workspace</CardTitle>
            <CardDescription>Use this form to seed a new tenant and sign in automatically.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="block space-y-2">
                <span className="text-sm font-medium">Business name</span>
                <input
                  value={businessName}
                  onChange={(event) => setBusinessName(event.target.value)}
                  className="h-12 w-full rounded-full border border-border bg-background px-4 text-sm outline-none transition focus:border-ring"
                  placeholder="Peak Performance Gym"
                  required
                />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium">Industry</span>
                <input
                  value={industry}
                  onChange={(event) => setIndustry(event.target.value)}
                  className="h-12 w-full rounded-full border border-border bg-background px-4 text-sm outline-none transition focus:border-ring"
                  placeholder="gym"
                  required
                />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium">Owner name</span>
                <input
                  value={ownerName}
                  onChange={(event) => setOwnerName(event.target.value)}
                  className="h-12 w-full rounded-full border border-border bg-background px-4 text-sm outline-none transition focus:border-ring"
                  placeholder="Aarav Mehta"
                  required
                />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium">Email</span>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  className="h-12 w-full rounded-full border border-border bg-background px-4 text-sm outline-none transition focus:border-ring"
                  placeholder="hello@yourbusiness.com"
                  required
                />
              </label>

              {error ? <p className="rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">{error}</p> : null}

              <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? 'Creating workspace...' : 'Create tenant'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <div className="mt-6">
              <ButtonLink href={platformRoutes.authLogin} variant="outline" size="lg" className="w-full">
                Back to sign in
              </ButtonLink>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}