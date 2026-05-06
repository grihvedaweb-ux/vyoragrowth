import Aurora from '../components/Aurora';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { useSEO } from '../lib/seo';
import { Target, Compass, Sparkles } from 'lucide-react';

export default function About() {
  useSEO({
    title: 'About Vyora Growth | AI-Powered Digital Agency Ahmedabad',
    description: 'Vyora Growth is a premium AI-powered digital agency in Ahmedabad. Founded by Jafar Khan Pathan & led by AI Coach Akash Parmar.',
    keywords: 'About Vyora Growth, Digital Agency Ahmedabad, Jafar Khan Pathan, Akash Parmar',
  });

  return (
    <div>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <Aurora />
        <div className="container-xl relative z-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.28em] text-gold-400">About Vyora Growth</div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95] tracking-tight">
              Built to <span className="italic text-gradient">compound</span><br />growth.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-3xl text-xl text-cream-50/65 leading-relaxed">
              Vyora Growth is a boutique AI-powered agency born in Ahmedabad. We partner with founders who
              want their brand to feel premium and their pipeline to feel inevitable. Everything we build
              — websites, ad systems, content engines, AI workflows — is designed to compound.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden gradient-border">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=900" className="w-full h-full object-cover" alt="Vyora team" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl">Our story</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 text-cream-50/70 leading-relaxed">
                We started Vyora Growth with a simple observation: India’s small and mid-sized businesses
                deserve the kind of design and growth systems usually reserved for venture-backed startups.
                So we built an agency that delivers premium work at transparent prices — with AI as our force multiplier.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-cream-50/70 leading-relaxed">
                From our studio in Vatva, we’ve partnered with 150+ founders across Gujarat — from family-run retail to
                D2C brands and coaching institutes — and helped each one tell a better story and make more money.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink-900/50 border-y border-cream-50/10">
        <div className="container-xl">
          <SectionHeading eyebrow="Mission & Vision" title={<>What drives <span className="italic text-gradient">us</span>.</>} />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { i: Target, t: 'Mission', d: 'Make premium digital growth accessible to every ambitious founder in India.' },
              { i: Compass, t: 'Vision', d: 'Build Gujarat’s most respected AI-native creative growth agency.' },
              { i: Sparkles, t: 'Values', d: 'Editorial craft, operator thinking, transparency, speed, and long-term partnership.' },
            ].map((v, i) => {
              const I = v.i;
              return (
                <Reveal key={v.t} delay={i * 100}>
                  <div className="rounded-3xl border border-cream-50/10 p-8 h-full bg-ink-950/60">
                    <I className="w-6 h-6 text-gold-400" />
                    <h3 className="mt-5 font-display text-2xl">{v.t}</h3>
                    <p className="mt-3 text-cream-50/65 leading-relaxed">{v.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <SectionHeading eyebrow="Leadership" title={<>Meet the <span className="italic text-gradient">people</span>.</>} />
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {[
              { n: 'Jafar Khan Pathan', r: 'Founder', b: 'Jafar is a brand builder and growth operator. He leads strategy, client partnerships, and creative direction at Vyora Growth, with a decade of experience across digital, retail and service businesses.', img: 'https://i.ibb.co/4w2sJ4jh/Whats-App-Image-2026-04-19-at-00-43-03.jpg?auto=compress&w=800' },
              { n: 'Akash Parmar', r: 'AI Coach & Digital Trainer', b: 'Akash leads Vyora’s AI workshops and automation practice. He has trained hundreds of founders, freelancers and students to build, design and earn with AI tools.', img: 'https://i.ibb.co/rK5dvP7Q/AAKASH-PARMAR.jpg?auto=compress&w=800' },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <div className="gradient-border rounded-3xl overflow-hidden hover-lift">
                  <div className="aspect-[5/3] overflow-hidden">
                    <img src={p.img} alt={p.n} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8">
                    <div className="text-xs uppercase tracking-[0.2em] text-gold-400">{p.r}</div>
                    <div className="font-display text-3xl mt-2">{p.n}</div>
                    <p className="mt-4 text-cream-50/65 leading-relaxed">{p.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Want to work with us?" subtitle="We take on a small number of new engagements each month. Book a free consultation to see if we’re a fit." />
    </div>
  );
}
