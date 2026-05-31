import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Zap, Target, Award, ChevronRight, Star, Code2, Megaphone, Share2, Brain } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Marquee from '../components/Marquee';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import ScaleImage from '../components/ScaleImage';
import StickyStack from '../components/StickyStack';
import ImageMarquee from '../components/ImageMarquee';
import Bento from '../components/Bento';
import { services } from '../data/services';
import { aiSearchAnswers, aiSearchFaqs } from '../data/aiFaqs';
import { useSEO } from '../lib/seo';

const LOGO = 'https://i.ibb.co/60dxwj2m/VYORA-GROWTH-1.png';

const HERO_IMAGE = 'https://i.ibb.co/h1f4Ww0N/Chat-GPT-Image-May-6-2026-07-56-17-PM.webp';

const marqueeImages = [
  'https://i.ibb.co/h1f4Ww0N/Chat-GPT-Image-May-6-2026-07-56-17-PM.webp',
  'https://i.ibb.co/bRNZ9KQr/Chat-GPT-Image-May-6-2026-07-59-04-PM.webp',
  'https://i.ibb.co/sv50q2Yx/Chat-GPT-Image-May-6-2026-08-03-41-PM.webp',
  'https://i.ibb.co/xK0WSWBv/Chat-GPT-Image-May-6-2026-08-05-47-PM.webp',
  'https://i.ibb.co/xK0WSWBv/Chat-GPT-Image-May-6-2026-08-05-47-PM.webp',
  'https://i.ibb.co/ymcsP1qF/Chat-GPT-Image-May-6-2026-08-14-41-PM.webp',
  'https://i.ibb.co/dwyjLzHC/Chat-GPT-Image-May-6-2026-08-18-10-PM.webp',
  'https://i.ibb.co/pjTwXQYQ/Chat-GPT-Image-May-6-2026-08-20-35-PM.webp',
  'https://i.ibb.co/Y77ZqjHM/Chat-GPT-Image-May-6-2026-08-23-34-PM.webp',
];

export default function Home() {
  useSEO({
    title: 'Vyora Growth | AI-Powered Digital Agency Ahmedabad | Brand Banega Business Badhega',
    description: 'Vyora Growth is an AI-powered digital agency in Ahmedabad for SEO websites, Meta and Google Ads, social media, Google Business Profile, AI workshops and WhatsApp lead generation.',
    keywords: 'AI powered digital agency Ahmedabad, Website Development Ahmedabad, Digital Marketing Agency Ahmedabad, AI Workshop Ahmedabad, SEO website design Ahmedabad, Google Ads Management, Meta Ads Ahmedabad, Vyora Growth',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: aiSearchFaqs.slice(0, 6).map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    },
  });

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-1.5rem)] flex items-center overflow-hidden pt-28 pb-12 lg:pt-28 lg:pb-14 bg-[#fff4df]">
        <div className="relative z-10 container-xl w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 max-w-4xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.22em] text-cream-50/80">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" /> AI-Powered Digital Agency • Ahmedabad
              </div>
            </Reveal>
            <h1 className="mt-6 font-display hero-title text-cream-50 mask-reveal">
              <span><i>Grow faster</i></span>{' '}<span><i style={{ animationDelay: '0.12s' }}>with</i></span>{' '}
              <span><i className="italic text-gradient" style={{ animationDelay: '0.24s' }}>AI-powered</i></span>
              <br />
              <span><i style={{ animationDelay: '0.36s' }}>digital solutions.</i></span>
            </h1>
            <Reveal delay={500}>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-cream-50/65 leading-relaxed">
                Vyora Growth helps ambitious brands scale through premium websites, performance marketing,
                AI systems and workshops that turn attention into revenue.
              </p>
            </Reveal>
            <Reveal delay={620}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-primary shine">Book Free Consultation <ArrowUpRight className="w-4 h-4" /></Link>
                <Link to="/services" className="btn-ghost">Explore Services <ChevronRight className="w-4 h-4" /></Link>
              </div>
              <p className="mt-4 text-sm text-cream-50/55">Response within 24 business hours. Strategy-first, no pressure call.</p>
            </Reveal>

            <Reveal delay={720}>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['150+ brands', 'Ahmedabad based', 'SEO + Ads + AI', 'WhatsApp leads'].map((item) => (
                  <div key={item} className="agency-card rounded-2xl px-4 py-2.5 text-sm font-medium text-cream-50/75">
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={260} className="lg:col-span-5 max-w-[520px] lg:ml-auto">
            <div className="agency-card rounded-[2rem] p-4 md:p-5">
              <div className="rounded-[1.5rem] bg-[#16130f] p-4 md:p-5 text-[#fff8ed] shadow-2xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-gold-400">Growth console</div>
                    <div className="font-display text-2xl md:text-3xl mt-1">Vyora OS</div>
                  </div>
                  <div className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">Live</div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    { label: 'SEO health', value: '96%' },
                    { label: 'Lead flow', value: '+38%' },
                    { label: 'Page speed', value: 'A+' },
                    { label: 'WhatsApp CTA', value: 'On' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3.5">
                      <div className="text-xs uppercase tracking-[0.16em] text-white/45">{item.label}</div>
                      <div className="font-display text-2xl md:text-3xl text-gold-400 mt-1.5">{item.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-white/45">
                    <span>Campaign pipeline</span>
                    <span>4 stages</span>
                  </div>
                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {['Strategy', 'Design', 'Build', 'Growth'].map((step, i) => (
                      <div key={step} className="space-y-2">
                        <div className="h-2 rounded-full bg-gold-400" style={{ opacity: 0.35 + i * 0.18 }} />
                        <div className="text-[10px] text-white/50">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[2379004, 2381069, 1222271, 1181686].map((id) => (
                      <div key={id} className="w-9 h-9 rounded-full border-2 border-[#16130f] overflow-hidden">
                        <img src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&w=80&h=80&fit=crop`} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-gold-400">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                    </div>
                    <div className="text-xs md:text-sm text-white/55">Founders growing with Vyora</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden xl:block animate-float opacity-60">
          <img src={LOGO} alt="" className="w-24 h-24 rounded-full ring-1 ring-cream-50/15" />
        </div>
      </section>

      {/* PROMOTO-STYLE SCALE IMAGE REVEAL */}
      <section className="px-6 md:px-10 pb-10">
        <div className="container-xl">
          <ScaleImage src={HERO_IMAGE} alt="Vyora Growth team">
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
            <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:right-12 flex items-end justify-between gap-6">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-cream-50/70">Studio</div>
                <div className="font-display text-3xl md:text-5xl text-cream-50 mt-2">Vatva, Ahmedabad</div>
              </div>
              <Link to="/about" className="hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-full glass-strong text-sm text-cream-50 hover:text-gold-400 transition">
                About us <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </ScaleImage>
        </div>
      </section>

      {/* MARQUEE TAGLINE */}
      <section className="py-10 border-y border-cream-50/10">
        <Marquee items={[
          <span className="font-display text-4xl md:text-6xl">Brand Banega</span>,
          <span className="text-gold-400 font-display text-4xl md:text-6xl italic">• Business Badhega •</span>,
          <span className="font-display text-4xl md:text-6xl">Vyora Growth</span>,
          <span className="text-gold-400 font-display text-4xl md:text-6xl italic">• Est. Ahmedabad •</span>,
        ]} />
      </section>

      {/* STATS */}
      <section className="section-pad">
        <div className="container-xl grid md:grid-cols-4 gap-10">
          {[
            { n: '150+', l: 'Brands scaled' },
            { n: '12M+', l: 'Ad spend managed' },
            { n: '96%', l: 'Client retention' },
            { n: '7 Days', l: 'Avg launch time' },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div>
                <div className="font-display text-6xl text-cream-50">{s.n}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-cream-50/50">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AI SEARCH ANSWERS */}
      <section className="section-pad pt-0">
        <div className="container-xl">
          <SectionHeading
            eyebrow="AI search answers"
            title={<>Direct answers about <span className="italic text-gradient">Vyora Growth</span>.</>}
            description="Clear, structured information for clients, Google snippets and AI search engines looking for a trusted website development and digital marketing agency in Ahmedabad."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {aiSearchAnswers.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <article className="gradient-border rounded-3xl p-7 h-full hover-lift">
                  <h2 className="font-display text-2xl leading-tight text-cream-50">{item.title}</h2>
                  <p className="mt-4 text-cream-50/65 leading-relaxed">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENTO — WHAT WE DO */}
      <section className="section-pad">
        <div className="container-xl">
          <SectionHeading
            eyebrow="What we do"
            title={<>A full stack for <span className="italic text-gradient">modern growth</span>.</>}
            description="Editorial craft meets operator thinking. Every service is priced transparently and delivered by senior hands."
          />
          <div className="mt-16">
            <Bento items={[
              {
                title: 'Custom-coded websites in Ahmedabad',
                body: 'Hand-built, lightning-fast, conversion-tuned. From ₹4,999.',
                icon: <Code2 className="w-5 h-5" />,
                span: 'md:col-span-4 md:row-span-2',
                highlights: ['SEO-ready website structure for Google ranking', 'Mobile responsive design with fast Vite/React performance', 'WhatsApp inquiry flow for faster lead capture'],
                tags: ['Website Development Ahmedabad', 'SEO Website Design', 'Landing Page Design', 'Business Website Gujarat'],
                visual: (
                  <div className="absolute inset-0">
                    <img src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&w=1400" className="w-full h-full object-cover opacity-30" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-transparent" />
                  </div>
                ),
              },
              {
                title: 'Meta & Google ads',
                body: 'Performance marketing for ROAS, not vanity reports.',
                icon: <Megaphone className="w-5 h-5" />,
                span: 'md:col-span-2',
              },
              {
                title: 'Social media that sells',
                body: 'Editorial calendars, reels, community DMs.',
                icon: <Share2 className="w-5 h-5" />,
                span: 'md:col-span-2',
              },
              {
                title: 'AI systems & workshops',
                body: 'Live cohorts and AI automation for modern operators.',
                icon: <Brain className="w-5 h-5" />,
                span: 'md:col-span-3',
                visual: (
                  <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgb(var(--gold-400) / 0.8), transparent 60%)', filter: 'blur(40px)' }} />
                ),
              },
              {
                title: 'Lead generation funnels',
                body: 'Creative, funnel, CRM — stitched to deliver qualified inbox.',
                icon: <Target className="w-5 h-5" />,
                span: 'md:col-span-3',
              },
            ]} />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-pad pt-0">
        <div className="container-xl">
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={i * 60}>
                  <Link to={`/services/${s.slug}`} className="group block h-full gradient-border rounded-3xl p-7 hover-lift relative overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'radial-gradient(circle, rgb(var(--gold-400) / 0.3), transparent 60%)', filter: 'blur(40px)' }} />
                    <div className="relative">
                      <div className="w-12 h-12 rounded-2xl bg-cream-50/5 border border-cream-50/10 flex items-center justify-center text-gold-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="mt-6 font-display text-2xl text-cream-50">{s.title}</h3>
                      <p className="mt-3 text-sm text-cream-50/60 leading-relaxed">{s.short}</p>
                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-xs px-3 py-1.5 rounded-full bg-cream-50/5 border border-cream-50/10 text-cream-50/70">From {s.price}</span>
                        <ArrowUpRight className="w-5 h-5 text-cream-50/40 group-hover:text-gold-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMAGE MARQUEE */}
      <section className="py-16 space-y-6">
        <ImageMarquee images={marqueeImages} />
        <ImageMarquee images={[...marqueeImages].reverse()} reverse />
      </section>

      {/* STICKY STACK PROCESS */}
      <section className="section-pad bg-[#fff8ed] border-y border-cream-50/10 relative">
        <div className="container-xl relative z-10">
          <SectionHeading
            eyebrow="How we work"
            title={<>A calm, structured <span className="italic text-gradient">process</span>.</>}
            description="Every engagement runs through the same four-stage method — refined across 150+ brand launches."
          />
          <div className="mt-10">
            <StickyStack cards={[
              { eyebrow: 'Stage 01', title: 'Discovery & strategy', body: 'Audience, offer, metrics and story locked in a focused sprint.', accent: <Stat n="1-3" l="Days" /> },
              { eyebrow: 'Stage 02', title: 'Design direction', body: 'Copy and design move together so every screen has a clear job.', accent: <Stat n="3-7" l="Days" /> },
              { eyebrow: 'Stage 03', title: 'Build & ship', body: 'SEO, analytics, pixel and WhatsApp wired before launch.', accent: <Stat n="7-14" l="Days" /> },
              { eyebrow: 'Stage 04', title: 'Grow & compound', body: 'Ads, content and AI systems keep improving after launch.', accent: <Stat n="On" l="Growth" /> },
            ]} />
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="section-pad">
        <div className="container-xl">
          <SectionHeading
            eyebrow="The team"
            title={<>Built by operators, for <span className="italic text-gradient">operators</span>.</>}
          />
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="gradient-border rounded-3xl p-8 hover-lift group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-1 ring-cream-50/20 shrink-0">
                    <img src="https://i.ibb.co/4w2sJ4jh/Whats-App-Image-2026-04-19-at-00-43-03.jpg?auto=compress&w=200&h=200&fit=crop" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gold-400">Founder</div>
                    <div className="font-display text-3xl text-cream-50 mt-1">Jafar Khan Pathan</div>
                    <p className="mt-3 text-cream-50/60 leading-relaxed">Brand architect and growth partner. Jafar leads strategy, creative direction and client partnerships at Vyora Growth.</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="gradient-border rounded-3xl p-8 hover-lift group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-1 ring-cream-50/20 shrink-0">
                    <img src="https://i.ibb.co/rK5dvP7Q/AAKASH-PARMAR.jpg?auto=compress&w=200&h=200&fit=crop" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gold-400">AI Coach</div>
                    <div className="font-display text-3xl text-cream-50 mt-1">Akash Parmar</div>
                    <p className="mt-3 text-cream-50/60 leading-relaxed">AI coach, educator and systems builder. Akash runs Vyora’s AI workshops and consults on automation.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad">
        <div className="container-xl">
          <SectionHeading eyebrow="Clients say" title={<>Trusted by founders across <span className="italic text-gradient">Gujarat</span>.</>} />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { q: 'Vyora rebuilt our website and our inbound leads tripled within six weeks.', n: 'Priya Shah', r: 'Founder, Atelier Vastra' },
              { q: 'The AI workshop changed how I work every single day. Worth 10x what I paid.', n: 'Rahul Mehta', r: 'Freelance Designer' },
              { q: 'Proper professionals. Meta ROAS finally consistent for the first time in 2 years.', n: 'Zeeshan Ali', r: 'CEO, Orbit Motors' },
            ].map((t, i) => (
              <Reveal key={t.n} delay={i * 100}>
                <div className="glass rounded-3xl p-8 h-full">
                  <div className="flex gap-1 text-gold-400">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="mt-5 text-cream-50/80 leading-relaxed">“{t.q}”</p>
                  <div className="mt-8 pt-6 border-t border-cream-50/10">
                    <div className="text-cream-50">{t.n}</div>
                    <div className="text-sm text-cream-50/50">{t.r}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-pad border-t border-cream-50/10">
        <div className="container-xl">
          <SectionHeading eyebrow="Why brands choose us" title={<>Built for <span className="italic text-gradient">serious growth</span>, not just pretty pages.</>} description="Every page, campaign and workshop is designed around speed, trust and qualified inquiries." />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { i: Zap, t: 'Built for speed', d: 'Launch in days, not months. Fast Vite builds, sharp copy and clean conversion paths.' },
            { i: Target, t: 'Outcome obsessed', d: 'We measure everything in revenue. Vanity metrics don’t pay bills.' },
            { i: Award, t: 'Agency-level craft', d: 'Premium typography, hierarchy, SEO structure and brand polish without enterprise overhead.' },
          ].map((v, i) => {
            const I = v.i;
            return (
              <Reveal key={v.t} delay={i * 100}>
                <div className="agency-card rounded-3xl p-8 h-full hover-lift">
                  <div className="w-12 h-12 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                    <I className="w-6 h-6 text-gold-400" />
                  </div>
                  <div className="font-display text-2xl text-cream-50 mt-5">{v.t}</div>
                  <p className="mt-3 text-cream-50/60 leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            );
          })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-xl grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="FAQ" title={<>Answers to the <span className="italic text-gradient">essentials</span>.</>} />
          </div>
          <div className="lg:col-span-3">
            <FAQ items={[
              ...aiSearchFaqs.slice(0, 6),
              { q: 'Can I start with a small project?', a: 'Yes. Many clients start with a landing page, GMB setup, or WhatsApp-focused business website before moving into larger ads and growth retainers.' },
            ]} />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="rounded-3xl border border-cream-50/10 p-5 bg-white/70">
      <div className="font-display text-4xl text-gold-400">{n}</div>
      <div className="mt-1.5 text-xs uppercase tracking-[0.2em] text-cream-50/50">{l}</div>
    </div>
  );
}
