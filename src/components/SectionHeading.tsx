import { ReactNode } from 'react';
import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
}) {
  const centered = align === 'center';
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <Reveal>
          <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold-400 mb-5`}>
            <span className="h-px w-8 bg-gold-400/60" /> {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-cream-50">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className="mt-6 text-lg text-cream-50/65 leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
