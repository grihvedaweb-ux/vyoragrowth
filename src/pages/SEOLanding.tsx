import { useParams, Navigate, Link } from 'react-router-dom';
import Aurora from '../components/Aurora';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import ServiceInquiryForm from '../components/forms/ServiceInquiryForm';
import { seoPages } from '../data/seoPages';
import { useSEO } from '../lib/seo';
import { CheckCircle2, Star, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function SEOLanding() {
  const { slug } = useParams();
  const page = seoPages.find(p => p.slug === slug);

  useSEO({
    title: page?.title ?? 'Services | Vyora Growth',
    description: page?.description ?? 'Explore Vyora Growth services.',
    keywords: page
      ? `${page.keyword}, ${page.keyword} India, ${page.keyword} agency, ${page.keyword} service, Vyora Growth`
      : 'Vyora Growth services',
  });

  if (!page) return <Navigate to="/services" replace />;

  return (
    <div>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <Aurora />
        <div className="container-xl relative z-10">
          <Reveal><div className="text-xs uppercase tracking-[0.28em] text-gold-400">{page.keyword}</div></Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1] tracking-tight max-w-5xl">
              {page.h1}.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg text-cream-50/70 leading-relaxed">{page.intro}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-primary">Book Free Consultation <ArrowUpRight className="w-4 h-4" /></Link>
              <a href="https://wa.me/918866531993" className="btn-ghost"><MessageCircle className="w-4 h-4" /> WhatsApp Us</a>
            </div>
          </Reveal>
        </div>
      </section>

      {page.sections.map((s, i) => (
        <section key={i} className={`section-pad ${i % 2 === 0 ? '' : 'bg-ink-900/50 border-y border-cream-50/10'}`}>
          <div className="container-xl grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">{s.heading}</h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <p className="text-cream-50/70 leading-relaxed text-lg">{s.body}</p>
              </Reveal>
              {s.bullets && (
                <div className="mt-8 grid md:grid-cols-2 gap-3">
                  {s.bullets.map((b, j) => (
                    <Reveal key={b} delay={j * 60}>
                      <div className="flex items-start gap-3 p-5 rounded-2xl border border-cream-50/10 bg-ink-900/40">
                        <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                        <span className="text-cream-50/85">{b}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="section-pad">
        <div className="container-xl">
          <SectionHeading eyebrow="Testimonials" title={<>What our clients <span className="italic text-gradient">say</span>.</>} />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { q: 'Vyora gets what a local brand needs. Professional, fast and honest.', n: 'Priya S.', r: 'Boutique Owner' },
              { q: 'Our inbound leads grew 3x in the first two months.', n: 'Zeeshan A.', r: 'Automotive' },
              { q: 'Best agency experience we’ve had in Gujarat.', n: 'Hardik P.', r: 'Coaching Institute' },
            ].map((t, i) => (
              <Reveal key={t.n} delay={i * 100}>
                <div className="glass rounded-3xl p-8">
                  <div className="flex gap-1 text-gold-400">{[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}</div>
                  <p className="mt-5 text-cream-50/80 leading-relaxed">“{t.q}”</p>
                  <div className="mt-6 pt-6 border-t border-cream-50/10"><div className="text-cream-50">{t.n}</div><div className="text-sm text-cream-50/50">{t.r}</div></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-xl grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Lead form" title={<>Start a <span className="italic text-gradient">conversation</span>.</>} />
          </div>
          <div className="lg:col-span-3">
            <div className="gradient-border rounded-3xl p-8 md:p-10">
              <ServiceInquiryForm source={page.slug} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-xl">
          <SectionHeading eyebrow="FAQ" title="Everything you wanted to ask" />
          <div className="mt-10"><FAQ items={page.faqs} /></div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
