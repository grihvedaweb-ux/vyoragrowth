import Aurora from '../components/Aurora';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import WorkshopForm from '../components/forms/WorkshopForm';
import FAQ from '../components/FAQ';
import { useSEO } from '../lib/seo';
import { Calendar, Clock, MapPin, CheckCircle2, Brain, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Workshops() {
  useSEO({
    title: 'Workshops | Ads & AI Earning Workshops in Ahmedabad — Vyora Growth',
    description: '3-day Ads Chalana Seekho workshop & 7-day AI Se Earning Seekho workshop. Online + offline cohorts in Ahmedabad.',
    keywords: 'AI Workshop Ahmedabad, Ads Training Ahmedabad, AI Course Gujarat, AI Earning Workshop',
  });

  return (
    <div>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <Aurora />
        <div className="container-xl relative z-10">
          <Reveal><div className="text-xs uppercase tracking-[0.28em] text-gold-400">Workshops</div></Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95]">
              Learn. Build. <span className="italic text-gradient">Earn</span>.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg text-cream-50/65 leading-relaxed">
              Live cohorts led by senior operators. Every session is practical — walk out with work you can ship and skills you can bill for.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-xl grid lg:grid-cols-2 gap-8">
          {/* ADS WORKSHOP */}
          <Reveal>
            <div className="gradient-border rounded-3xl p-8 md:p-10 relative overflow-hidden h-full">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-40" style={{ background: 'radial-gradient(circle, rgba(201,166,104,0.3), transparent 60%)', filter: 'blur(40px)' }} />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <Megaphone className="w-6 h-6 text-gold-400" />
                  <div className="text-xs uppercase tracking-[0.22em] text-gold-400">Cohort 01</div>
                </div>
                <h2 className="mt-4 font-display text-4xl md:text-5xl">Ads Chalana Seekho</h2>
                <p className="mt-4 text-cream-50/65 leading-relaxed">A 3-day intensive on Meta & Google ads. Real campaigns, real budgets, real outcomes — taught hands-on.</p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="glass rounded-2xl p-4"><Calendar className="w-4 h-4 text-gold-400 mb-2" /><div className="text-cream-50/50 text-xs uppercase tracking-widest">Duration</div><div className="text-cream-50 mt-1">3 Days · 2 Hours/Day</div></div>
                  <div className="glass rounded-2xl p-4"><MapPin className="w-4 h-4 text-gold-400 mb-2" /><div className="text-cream-50/50 text-xs uppercase tracking-widest">Offline</div><div className="text-cream-50 mt-1">Fri–Sun · 2–4 PM</div></div>
                  <div className="glass rounded-2xl p-4 col-span-2"><Clock className="w-4 h-4 text-gold-400 mb-2" /><div className="text-cream-50/50 text-xs uppercase tracking-widest">Online</div><div className="text-cream-50 mt-1">Evening · 7–9 PM</div></div>
                </div>
                <div className="mt-6 space-y-2">
                  {['Facebook Ads', 'Instagram Ads', 'Lead Generation', 'Campaign Setup', 'Ad Creative Strategy', 'Audience Targeting', 'Scaling Techniques'].map(t => (
                    <div key={t} className="flex items-center gap-2 text-cream-50/75"><CheckCircle2 className="w-4 h-4 text-gold-400" /> {t}</div>
                  ))}
                </div>
                <Link to="#register" className="btn-primary mt-8 w-full justify-center">Register Now</Link>
              </div>
            </div>
          </Reveal>

          {/* AI WORKSHOP */}
          <Reveal delay={100}>
            <div className="gradient-border rounded-3xl p-8 md:p-10 relative overflow-hidden h-full">
              <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full opacity-40" style={{ background: 'radial-gradient(circle, rgba(201,166,104,0.3), transparent 60%)', filter: 'blur(40px)' }} />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <Brain className="w-6 h-6 text-gold-400" />
                  <div className="text-xs uppercase tracking-[0.22em] text-gold-400">Cohort 02</div>
                </div>
                <h2 className="mt-4 font-display text-4xl md:text-5xl">AI Se Earning Seekho</h2>
                <p className="mt-4 text-cream-50/65 leading-relaxed">A 7-day live cohort that teaches you how to actually monetise AI — posters, logos, websites, content and automation.</p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="glass rounded-2xl p-4"><Calendar className="w-4 h-4 text-gold-400 mb-2" /><div className="text-cream-50/50 text-xs uppercase tracking-widest">Duration</div><div className="text-cream-50 mt-1">7 Days · Mon–Sun</div></div>
                  <div className="glass rounded-2xl p-4"><Clock className="w-4 h-4 text-gold-400 mb-2" /><div className="text-cream-50/50 text-xs uppercase tracking-widest">Time</div><div className="text-cream-50 mt-1">10–11 AM</div></div>
                  <div className="glass rounded-2xl p-4"><MapPin className="w-4 h-4 text-gold-400 mb-2" /><div className="text-cream-50/50 text-xs uppercase tracking-widest">Mode</div><div className="text-cream-50 mt-1">Online</div></div>
                  <div className="glass rounded-2xl p-4"><div className="text-cream-50/50 text-xs uppercase tracking-widest">Fee</div><div className="font-display text-2xl text-gold-400 mt-1">₹9,999</div></div>
                </div>
                <div className="mt-6 space-y-2">
                  {['AI poster design', 'AI logo creation', 'AI offer banners', 'AI website creation', 'AI content generation', 'AI business automation', 'AI marketing tools', 'Earning methods using AI'].map(t => (
                    <div key={t} className="flex items-center gap-2 text-cream-50/75"><CheckCircle2 className="w-4 h-4 text-gold-400" /> {t}</div>
                  ))}
                </div>
                <Link to="#register" className="btn-primary mt-8 w-full justify-center">Register Now</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="register" className="section-pad">
        <div className="container-xl grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Register" title={<>Claim your <span className="italic text-gradient">seat</span>.</>} description="Cohort seats are limited so every participant gets direct attention. Fill in your details and we’ll WhatsApp you the joining link." />
          </div>
          <div className="lg:col-span-3">
            <div className="gradient-border rounded-3xl p-8 md:p-10">
              <WorkshopForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-xl">
          <SectionHeading eyebrow="FAQ" title="Workshop questions" />
          <div className="mt-10">
            <FAQ items={[
              { q: 'Do I need prior experience?', a: 'No. Both workshops are designed for beginners while offering enough depth to benefit intermediate learners.' },
              { q: 'Will I get recordings?', a: 'Yes. All live sessions are recorded and accessible to participants.' },
              { q: 'What if I miss a session?', a: 'Recordings are posted within 24 hours. You can also ask your doubts in the dedicated community group.' },
              { q: 'Is there a certificate?', a: 'Yes. Every completed cohort receives a Vyora Growth completion certificate.' },
            ]} />
          </div>
        </div>
      </section>

      <CTASection title="Still deciding?" subtitle="WhatsApp us and we’ll help you pick the right workshop for where you are." />
    </div>
  );
}
