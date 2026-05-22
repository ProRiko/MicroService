import { buildHealthSnapshot } from '../src/lib/health';

const snapshot = buildHealthSnapshot();

for (const check of snapshot.checks) {
  console.log(`${check.name}: ${check.ok ? 'ok' : 'fail'}`);
}

if (!snapshot.ok) {
  process.exitCode = 1;
  throw new Error('Validation failed');
}
