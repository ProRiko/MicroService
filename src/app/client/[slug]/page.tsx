import React from 'react';
import { notFound } from 'next/navigation';
import clientRegistry from '@/config/clients/registry';
import { bootstrapClientRegistry } from '@/config/clients/bootstrap';
import type { TemplateContent } from '@/types/content';
import { IndustryTemplate } from '@/templates/shared/industry-template';
import { createMetadata } from '@/config/metadata';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const clients = bootstrapClientRegistry().listClients();
  return clients.map((c) => {
    const parts = c.slug.split('/').filter(Boolean);
    return { slug: parts[parts.length - 1] };
  });
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  bootstrapClientRegistry();
  const blueprint = clientRegistry.listClients().find((client) => client.slug.endsWith(`/${slug}`));
  return createMetadata(blueprint?.content.seo);
}

export default async function ClientPage({ params }: Props) {
  const { slug } = await params;

  bootstrapClientRegistry();

  const clients = clientRegistry.listClients();
  const blueprint = clients.find((c) => c.slug.endsWith(`/${slug}`));

  if (!blueprint) return notFound();

  const content = blueprint.content as TemplateContent;

  return <IndustryTemplate content={content} />;
}
