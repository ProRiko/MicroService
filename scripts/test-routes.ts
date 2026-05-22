import { getValidationRoutes } from '../src/lib/health';

const baseUrl = process.env.BASE_URL ?? 'http://127.0.0.1:3000';
const routes = Array.from(new Set(getValidationRoutes()));

async function testRoute(path: string) {
  const response = await fetch(`${baseUrl}${path}`);
  const ok = response.ok;
  const text = await response.text();
  return { path, ok, status: response.status, hasBody: text.length > 0 };
}

async function main() {
  const results = [] as Array<{ path: string; ok: boolean; status: number; hasBody: boolean }>;

  for (const route of routes) {
    results.push(await testRoute(route));
  }

  for (const result of results) {
    console.log(`${result.path}: ${result.status} ${result.ok ? 'ok' : 'fail'}`);
  }

  if (results.some((result) => !result.ok)) {
    process.exitCode = 1;
    throw new Error('Route validation failed');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
