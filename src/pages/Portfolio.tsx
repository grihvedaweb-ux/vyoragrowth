import Aurora from '../components/Aurora';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { useSEO } from '../lib/seo';
import { ArrowUpRight } from 'lucide-react';

const work = [
  { t: 'Atelier Vastra', c: 'Luxury Boutique — Ahmedabad', img: 'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&w=1200', tag: 'Website + Ads' },
  { t: 'Orbit Motors', c: 'Automotive — Gujarat', img: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&w=1200', tag: 'Meta Ads' },
  { t: 'Saachi Clinic', c: 'Healthcare — Ahmedabad', img: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&w=1200', tag: 'Website + GMB' },
  { t: 'Nimbu Cafe', c: 'Hospitality — SG Highway', img: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&w=1200', tag: 'Social + Ads' },
  { t: 'Vayu Realty', c: 'Real Estate — Gujarat', img: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&w=1200', tag: 'Lead Gen' },
  { t: 'Sattva Learn', c: 'Coaching Institute', img: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&w=1200', tag: 'Website + Brand' },
];

export default function Portfolio() {
  useSEO({
    title: 'Portfolio | Vyora Growth — Selected Work',
    description: 'Selected work from Vyora Growth — websites, ads & brand systems for Gujarat’s ambitious founders.',
    keywords: 'Vyora Growth portfolio, website design portfolio Ahmedabad',
  });
  return (
    <div>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <Aurora />
        <div className="container-xl relative z-10">
          <Reveal><div className="text-xs uppercase tracking-[0.28em] text-gold-400">Portfolio</div></Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95]">
              Selected <span className="italic text-gradient">work</span>.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl grid md:grid-cols-2 gap-6">
          {work.map((w, i) => (
            <Reveal key={w.t} delay={i * 80}>
              <div className="group relative rounded-3xl overflow-hidden border border-cream-50/10 aspect-[5/4]">
                <img src={w.img} alt={w.t} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-400">{w.tag}</div>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl md:text-4xl">{w.t}</h3>
                      <div className="text-cream-50/60 mt-1">{w.c}</div>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-cream-50/60 group-hover:text-gold-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-xl">
          <SectionHeading eyebrow="Results" title={<>Numbers from recent <span className="italic text-gradient">engagements</span>.</>} />
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[{ n: '3.2x', l: 'Average ROAS uplift' }, { n: '+187%', l: 'Inbound leads' }, { n: '<2s', l: 'Avg page load' }, { n: '4.9/5', l: 'Client CSAT' }].map((s, i) => (
              <Reveal key={s.l} delay={i * 80}>
                <div className="rounded-3xl border border-cream-50/10 p-8 bg-ink-900/50">
                  <div className="font-display text-5xl text-cream-50">{s.n}</div>
                  <div className="text-sm uppercase tracking-[0.2em] text-cream-50/50 mt-2">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
