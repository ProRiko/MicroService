export interface HoursEntry {
  day: string;
  open: string;
  close: string;
}

export function formatHours(hours?: string) {
  if (!hours) return 'Hours not available';
  return hours;
}

export default { formatHours };
