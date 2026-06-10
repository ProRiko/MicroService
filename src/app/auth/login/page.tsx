'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight, Lock, ShieldCheck, UserRound } from 'lucide-react';

import { Button, ButtonLink } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { platformRoutes } from '@/config/platform';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('owner@peakperformance.example');
  const [password, setPassword] = useState('demo-password');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    setIsSubmitting(false);

    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(body?.error ?? 'Unable to sign in.');
      return;
    }

    router.push(searchParams.get('next') ?? platformRoutes.dashboard);
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">MicroService</p>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Sign in to your business operating system.</h1>
            <p className="max-w-xl text-base leading-7 text-muted-foreground">
              Manage customers, bookings, website content, and activity from one workspace.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, title: 'Role access', text: 'Platform admin, owner, and staff roles are scaffolded.' },
              { icon: UserRound, title: 'Tenant aware', text: 'Each business gets its own isolated workspace.' },
              { icon: Lock, title: 'Protected routes', text: 'Dashboard paths are gated through middleware.' }
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
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>Use a demo account to enter the dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="block space-y-2">
                <span className="text-sm font-medium">Email</span>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  className="h-12 w-full rounded-full border border-border bg-background px-4 text-sm outline-none transition focus:border-ring"
                  placeholder="owner@peakperformance.example"
                  required
                />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium">Password</span>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  className="h-12 w-full rounded-full border border-border bg-background px-4 text-sm outline-none transition focus:border-ring"
                  placeholder="demo-password"
                  required
                />
              </label>

              {error ? <p className="rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">{error}</p> : null}

              <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? 'Signing in...' : 'Enter dashboard'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p>Demo accounts:</p>
              <div className="space-y-1 rounded-2xl bg-muted/40 p-4">
                <p>admin@microservice.example</p>
                <p>owner@peakperformance.example</p>
                <p>staff@peakperformance.example</p>
              </div>
              <ButtonLink href={platformRoutes.authSignUp} variant="outline" size="lg" className="w-full">
                Create a new tenant
              </ButtonLink>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}