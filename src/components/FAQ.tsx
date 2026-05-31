import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Reveal from './Reveal';

export type FAQItem = { q: string; a: string };

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-cream-50/10 border-y border-cream-50/10">
      {items.map((it, i) => {
        const active = open === i;
        return (
          <Reveal key={i} delay={i * 60}>
            <button
              onClick={() => setOpen(active ? null : i)}
              className="w-full text-left py-6 flex items-start gap-6 group"
            >
              <div className="flex-1">
                <div className="font-display text-xl md:text-2xl text-cream-50 group-hover:text-gold-400 transition-colors">{it.q}</div>
                <div
                  className="grid transition-all duration-500 overflow-hidden"
                  style={{ gridTemplateRows: active ? '1fr' : '0fr' }}
                >
                  <div className="min-h-0">
                    <p className="pt-4 text-cream-50/65 leading-relaxed max-w-3xl">{it.a}</p>
                  </div>
                </div>
              </div>
              <div className="faq-toggle w-10 h-10 shrink-0 rounded-full border border-cream-50/20 flex items-center justify-center text-cream-50/70">
                {active ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
          </Reveal>
        );
      })}
    </div>
  );
}
