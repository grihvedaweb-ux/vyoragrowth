import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Aurora from '../components/Aurora';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { services } from '../data/services';
import { useSEO } from '../lib/seo';

export default function Services() {
  useSEO({
    title: 'Services | Vyora Growth — Websites, Ads, Social, AI',
    description: 'Explore services: website development, landing pages, Meta & Google Ads, social media, GMB setup, and AI workshops in Ahmedabad.',
    keywords: 'digital marketing services Ahmedabad, website development services, Meta ads, Google ads, AI workshop',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: services.map((service) => ({
        '@type': 'Service',
        name: service.title,
        description: service.short,
        areaServed: 'Ahmedabad, Gujarat, India',
        provider: { '@type': 'Organization', name: 'Vyora Growth' },
      })),
    },
  });

  return (
    <div>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <Aurora />
        <div className="container-xl relative z-10">
          <Reveal><div className="text-xs uppercase tracking-[0.28em] text-gold-400">Services</div></Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[0.96]">
              Everything you need to<br /><span className="italic text-gradient">grow online</span>.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg text-cream-50/65 leading-relaxed">
              Transparent pricing. Senior talent. Measurable outcomes. Pick a service to dive deeper.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad pt-8">
        <div className="container-xl grid md:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={i * 60}>
                <Link to={`/services/${s.slug}`} className="group block agency-card rounded-3xl p-6 md:p-8 hover-lift relative overflow-hidden h-full">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-cream-50/5 border border-cream-50/10 flex items-center justify-center text-gold-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="mt-5 font-display text-2xl md:text-3xl">{s.title}</h3>
                      <p className="mt-3 text-sm md:text-base text-cream-50/60 leading-relaxed max-w-md">{s.short}</p>
                      <ul className="mt-5 grid sm:grid-cols-2 gap-x-5 gap-y-2 text-sm text-cream-50/70">
                        {s.benefits.map(b => <li key={b} className="flex gap-2 before:content-['—'] before:text-gold-400 before:mr-1">{b}</li>)}
                      </ul>
                    </div>
                    <div className="text-right shrink-0 rounded-2xl bg-white/60 border border-cream-50/10 px-4 py-3">
                      <div className="text-xs uppercase tracking-[0.2em] text-cream-50/50">From</div>
                      <div className="font-display text-2xl text-gold-400">{s.price}</div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-cream-50/70 group-hover:text-gold-400 transition">
                    <span className="text-sm">Explore service</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-xl">
          <SectionHeading
            eyebrow="How to choose"
            title={<>Clear services for <span className="italic text-gradient">clear outcomes</span>.</>}
            description="If you need visibility, start with SEO-ready website pages. If you need demand, add Meta or Google ads. If you need trust, improve social media and Google Business Profile. If you need future-ready skills, join an AI workshop."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: 'For leads', body: 'Website, landing page, WhatsApp CTA, Meta ads and Google ads working together.' },
              { title: 'For trust', body: 'Social media, Google Business Profile, portfolio proof and consistent brand presentation.' },
              { title: 'For capability', body: 'AI workshops and automation systems that help your team create faster.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="agency-card rounded-3xl p-8 h-full">
                  <div className="agency-kicker">Answer</div>
                  <h2 className="mt-5 font-display text-3xl text-cream-50">{item.title}</h2>
                  <p className="mt-3 text-cream-50/65 leading-relaxed">{item.body}</p>
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
