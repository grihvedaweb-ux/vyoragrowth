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
          className="agency-card stack-card mb-5 md:mb-7 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 overflow-hidden"
          style={{
            top: `calc(5.5rem + ${i * 0.8}rem)`,
          }}
        >
          <div className="absolute -top-28 -right-28 w-72 h-72 rounded-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgb(var(--gold-400) / 0.25), transparent 60%)', filter: 'blur(40px)' }} />
          <div className="relative grid md:grid-cols-12 gap-5 md:gap-7 items-center">
            <div className="md:col-span-1">
              <div className="font-display text-3xl md:text-4xl text-gold-400/80">0{i + 1}</div>
            </div>
            <div className="md:col-span-7">
              <div className="text-xs uppercase tracking-[0.25em] text-gold-400">{c.eyebrow}</div>
              <h3 className="mt-3 font-display text-3xl md:text-4xl leading-[1.04] text-cream-50">{c.title}</h3>
              <p className="mt-3 max-w-xl text-cream-50/65 leading-relaxed">{c.body}</p>
            </div>
            <div className="md:col-span-4">{c.accent}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
