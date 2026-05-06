import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Aurora from '../components/Aurora';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import { services } from '../data/services';
import { useSEO } from '../lib/seo';

export default function Services() {
  useSEO({
    title: 'Services | Vyora Growth — Websites, Ads, Social, AI',
    description: 'Explore services: website development, landing pages, Meta & Google Ads, social media, GMB setup, and AI workshops in Ahmedabad.',
    keywords: 'digital marketing services Ahmedabad, website development services, Meta ads, Google ads, AI workshop',
  });

  return (
    <div>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <Aurora />
        <div className="container-xl relative z-10">
          <Reveal><div className="text-xs uppercase tracking-[0.28em] text-gold-400">Services</div></Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95] tracking-tight">
              Everything you need to<br /><span className="italic text-gradient">grow online</span>.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg text-cream-50/65 leading-relaxed">
              Transparent pricing. Senior talent. Measurable outcomes. Pick a service to dive deeper.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl grid md:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={i * 60}>
                <Link to={`/services/${s.slug}`} className="group block gradient-border rounded-3xl p-10 hover-lift relative overflow-hidden">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-cream-50/5 border border-cream-50/10 flex items-center justify-center text-gold-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="mt-6 font-display text-3xl md:text-4xl">{s.title}</h3>
                      <p className="mt-4 text-cream-50/60 leading-relaxed max-w-md">{s.short}</p>
                      <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-cream-50/70">
                        {s.benefits.map(b => <li key={b} className="flex gap-2 before:content-['—'] before:text-gold-400 before:mr-1">{b}</li>)}
                      </ul>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs uppercase tracking-[0.2em] text-cream-50/50">From</div>
                      <div className="font-display text-3xl text-gold-400">{s.price}</div>
                    </div>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-cream-50/70 group-hover:text-gold-400 transition">
                    <span className="text-sm">Explore service</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
