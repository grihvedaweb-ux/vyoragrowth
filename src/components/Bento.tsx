import { ReactNode } from 'react';
import Reveal from './Reveal';

export type BentoItem = {
  title: string;
  body: string;
  icon?: ReactNode;
  span?: string; // tailwind col-span classes
  visual?: ReactNode;
  accentColor?: string;
  highlights?: string[];
  tags?: string[];
};

export default function Bento({ items }: { items: BentoItem[] }) {
  return (
    <div className="grid md:grid-cols-6 auto-rows-[minmax(220px,auto)] gap-5">
      {items.map((it, i) => (
        <Reveal key={i} delay={i * 60} className={`${it.span || 'md:col-span-3'}`}>
          <div className="group relative h-full rounded-[2rem] border border-cream-50/10 bg-ink-900/60 p-7 md:p-8 overflow-hidden hover-lift">
            {it.visual && (
              <div className="absolute inset-0 opacity-80 pointer-events-none">{it.visual}</div>
            )}
            <div className="relative z-10 flex flex-col h-full">
              {it.icon && <div className="w-11 h-11 rounded-2xl bg-cream-50/5 border border-cream-50/10 flex items-center justify-center text-gold-400 mb-5">{it.icon}</div>}
              <h3 className="font-display text-2xl md:text-3xl leading-[1.1] text-cream-50">{it.title}</h3>
              <p className="mt-3 text-cream-50/65 leading-relaxed">{it.body}</p>
              {it.highlights && (
                <ul className="mt-5 space-y-2 text-sm text-cream-50/75">
                  {it.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
              {it.tags && (
                <div className="mt-auto pt-8 flex flex-wrap gap-2">
                  {it.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-cream-50/10 bg-ink-950/60 px-3 py-1.5 text-xs text-cream-50/70">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
