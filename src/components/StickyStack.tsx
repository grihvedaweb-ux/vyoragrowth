import { ReactNode } from 'react';

export type StackCard = {
  eyebrow: string;
  title: string;
  body: string;
  accent?: ReactNode;
};

export default function StickyStack({ cards }: { cards: StackCard[] }) {
  return (
    <div className="relative">
      {cards.map((c, i) => (
        <div
          key={i}
          className="stack-card mb-6 md:mb-10 rounded-[2rem] md:rounded-[2.5rem] border border-cream-50/10 p-8 md:p-14 overflow-hidden"
          style={{
            top: `calc(6rem + ${i * 1.25}rem)`,
            background: `linear-gradient(135deg, rgb(var(--ink-800) / 0.92), rgb(var(--ink-900) / 0.92))`,
          }}
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-40 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgb(var(--gold-400) / 0.25), transparent 60%)', filter: 'blur(40px)' }} />
          <div className="relative grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="font-display text-4xl md:text-5xl text-gold-400/80">0{i + 1}</div>
            </div>
            <div className="md:col-span-7">
              <div className="text-xs uppercase tracking-[0.25em] text-gold-400">{c.eyebrow}</div>
              <h3 className="mt-4 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-cream-50">{c.title}</h3>
              <p className="mt-6 max-w-xl text-cream-50/65 leading-relaxed text-lg">{c.body}</p>
            </div>
            <div className="md:col-span-4">{c.accent}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
