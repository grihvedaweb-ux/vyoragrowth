import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Zap, Target, Award, ChevronRight, Star, Code2, Megaphone, Share2, Brain } from 'lucide-react';
import Aurora from '../components/Aurora';
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
import { useSEO } from '../lib/seo';

const LOGO = 'https://i.ibb.co/60dxwj2m/VYORA-GROWTH-1.png';

const HERO_IMAGE = 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&w=1800';

const marqueeImages = [
  'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&w=800',
  'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&w=800',
  'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&w=800',
  'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&w=800',
  'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&w=800',
  'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&w=800',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&w=800',
];

export default function Home() {
  useSEO({
    title: 'Vyora Growth | AI-Powered Digital Agency Ahmedabad | Brand Banega Business Badhega',
    description: 'Premium websites, Meta & Google Ads, social media, AI workshops and lead generation in Ahmedabad. Custom coded websites from ₹4,999.',
    keywords: 'Website Development Ahmedabad, Digital Marketing Agency Ahmedabad, AI Workshop Ahmedabad, Google Ads Management, Vyora Growth',
  });

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
        <Aurora />
        <div className="relative z-10 container-xl w-full">
          <div className="max-w-5xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.22em] text-cream-50/80">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" /> AI-Powered Digital Agency • Ahmedabad
              </div>
            </Reveal>
            <h1 className="mt-8 font-display text-[12vw] md:text-[7.5vw] leading-[0.95] tracking-[-0.02em] text-cream-50 mask-reveal">
              <span><i>Grow faster</i></span>{' '}<span><i style={{ animationDelay: '0.12s' }}>with</i></span>{' '}
              <span><i className="italic text-gradient" style={{ animationDelay: '0.24s' }}>AI-powered</i></span>
              <br />
              <span><i style={{ animationDelay: '0.36s' }}>digital solutions.</i></span>
            </h1>
            <Reveal delay={500}>
              <p className="mt-8 max-w-2xl text-lg md:text-xl text-cream-50/65 leading-relaxed">
                Vyora Growth helps ambitious brands scale through premium websites, performance marketing,
                AI systems and workshops that turn attention into revenue.
              </p>
            </Reveal>
            <Reveal delay={620}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-primary shine">Book Free Consultation <ArrowUpRight className="w-4 h-4" /></Link>
                <Link to="/services" className="btn-ghost">Explore Services <ChevronRight className="w-4 h-4" /></Link>
              </div>
            </Reveal>

            <Reveal delay={720}>
              <div className="mt-16 flex items-center gap-6 text-sm text-cream-50/50">
                <div className="flex -space-x-3">
                  {[2379004, 2381069, 1222271, 1181686].map((id) => (
                    <div key={id} className="w-10 h-10 rounded-full border-2 border-ink-950 overflow-hidden">
                      <img src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&w=80&h=80&fit=crop`} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-gold-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <div className="text-cream-50/70">150+ founders growing with Vyora</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 hidden lg:block animate-float opacity-80">
          <img src={LOGO} alt="" className="w-32 h-32 rounded-full ring-1 ring-cream-50/15" />
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
                title: 'Custom-coded websites',
                body: 'Hand-built, lightning-fast, conversion-tuned. From ₹4,999.',
                icon: <Code2 className="w-5 h-5" />,
                span: 'md:col-span-4 md:row-span-2',
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
      <section className="section-pad bg-ink-900/40 border-y border-cream-50/10 relative">
        <Aurora />
        <div className="container-xl relative z-10">
          <SectionHeading
            eyebrow="How we work"
            title={<>A calm, structured <span className="italic text-gradient">process</span>.</>}
            description="Every engagement runs through the same four-stage method — refined across 150+ brand launches."
          />
          <div className="mt-16">
            <StickyStack cards={[
              { eyebrow: 'Stage 01', title: 'Discovery & strategy', body: 'We start with a focused strategy sprint — audience, offer, metrics, and story. One call, one shared document, no fluff.', accent: <Stat n="1–3" l="Days" /> },
              { eyebrow: 'Stage 02', title: 'Editorial design direction', body: 'Design and copy in parallel. Real content, real typography, real decisions — not Lorem Ipsum and placeholder moodboards.', accent: <Stat n="3–7" l="Days" /> },
              { eyebrow: 'Stage 03', title: 'Build & ship', body: 'Hand-coded builds with obsessive QA across every device. SEO, analytics, pixel, and WhatsApp — all wired on day one.', accent: <Stat n="7–14" l="Days" /> },
              { eyebrow: 'Stage 04', title: 'Grow & compound', body: 'Optimisation, ads, content, and AI systems. Month after month, we compound attention into measurable revenue.', accent: <Stat n="∞" l="Ongoing" /> },
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
        <div className="container-xl grid md:grid-cols-3 gap-10">
          {[
            { i: Zap, t: 'Built for speed', d: 'Launch in days, not months. Our process is engineered for momentum.' },
            { i: Target, t: 'Outcome obsessed', d: 'We measure everything in revenue. Vanity metrics don’t pay bills.' },
            { i: Award, t: 'Editorial craft', d: 'Design that feels expensive without a five-figure retainer.' },
          ].map((v, i) => {
            const I = v.i;
            return (
              <Reveal key={v.t} delay={i * 100}>
                <div>
                  <I className="w-6 h-6 text-gold-400" />
                  <div className="font-display text-2xl text-cream-50 mt-5">{v.t}</div>
                  <p className="mt-3 text-cream-50/60 leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            );
          })}
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
              { q: 'Where are you based?', a: 'Vyora Growth is based in Vatva, Ahmedabad. We work with clients across Gujarat and India, both online and in-person.' },
              { q: 'Can I start with a small project?', a: 'Yes. Many clients start with a landing page (₹999) or GMB setup (₹999) before moving into larger engagements.' },
              { q: 'Do you run workshops for beginners?', a: 'Yes. Both the Ads workshop and the AI Earning workshop are beginner-friendly and 100% practical.' },
              { q: 'How do I pay?', a: 'UPI, bank transfer, or card. 50% to start, 50% on delivery for project work. Retainers billed monthly.' },
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
    <div className="rounded-3xl border border-cream-50/10 p-6 bg-ink-950/60">
      <div className="font-display text-5xl text-gold-400">{n}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-cream-50/50">{l}</div>
    </div>
  );
}
