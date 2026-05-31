import { ReactNode } from 'react';

export default function Marquee({ items }: { items: ReactNode[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="marquee-track flex gap-16 animate-marquee whitespace-nowrap">
        {doubled.map((it, i) => (
          <div key={i} className="shrink-0 text-cream-50/40">{it}</div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
    </div>
  );
}
