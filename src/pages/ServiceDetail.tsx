import { useParams, Navigate, Link } from 'react-router-dom';
import Aurora from '../components/Aurora';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import ServiceInquiryForm from '../components/forms/ServiceInquiryForm';
import WebsiteQuoteForm from '../components/forms/WebsiteQuoteForm';
import AdsConsultationForm from '../components/forms/AdsConsultationForm';
import WorkshopForm from '../components/forms/WorkshopForm';
import { services } from '../data/services';
import { useSEO } from '../lib/seo';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

const contentMap: Record<string, { overview: string; bullets: string[]; process: { t: string; d: string }[]; faqs: { q: string; a: string }[] }> = {
  'website-development': {
    overview: 'We build custom-coded, conversion-focused websites for businesses that want to look serious. Every site is hand-built for speed, SEO and revenue — not stitched together from bloated templates.',
    bullets: ['Custom HTML/CSS/JS, no slow page builders', 'Responsive down to the smallest phone', 'Lighthouse 95+ performance', 'On-page SEO, schema & meta ready', 'Lead capture + WhatsApp integration', 'Mobile-first, cinematic interactions'],
    process: [
      { t: 'Strategy', d: 'One focused call to align on audience, offer and goals.' },
      { t: 'Design', d: 'Editorial design direction with real copy.' },
      { t: 'Build', d: 'Hand-coded, tested on 20+ devices.' },
      { t: 'Launch', d: 'Go live with full SEO setup and 30-day support.' },
    ],
    faqs: [
      { q: 'Why is custom coding better than WordPress?', a: 'Custom code gives you faster sites, cleaner SEO, lower hosting costs and zero plugin-hell. For most small businesses, it ends up cheaper over two years.' },
      { q: 'How long does it take?', a: 'Landing pages: 3–5 days. Standard business sites: 7–14 days. Larger projects: 3–6 weeks.' },
      { q: 'Do I get to edit the site later?', a: 'Yes. We can integrate a simple CMS for content edits or keep it static with a content support retainer.' },
    ],
  },
  'landing-page-design': {
    overview: 'A great landing page is the fastest path from ad spend to revenue. Ours are built in days, copy-first, and engineered for conversion.',
    bullets: ['Conversion copy + design', 'Launch in 3–5 days', 'Facebook pixel + Google Analytics', 'Lead form + WhatsApp CTA', 'A/B testable structure', 'Mobile-first design'],
    process: [ { t: 'Brief', d: 'Quick call on the offer and traffic source.' }, { t: 'Copy', d: 'Conversion copy before design.' }, { t: 'Design & Build', d: 'Handled in parallel, launch-ready.' }, { t: 'Optimise', d: 'Post-launch tweaks based on data.' } ],
    faqs: [
      { q: 'Will it work with Meta ads?', a: 'Yes. We set up pixel and a proper thank-you flow so your ad platforms optimise correctly.' },
      { q: 'Can I host it on my domain?', a: 'Yes. We deploy to your domain or a subdomain you own.' },
    ],
  },
  'ads-management': {
    overview: 'We run Meta and Google ads like operators — focused on ROAS, not reports. Creative, audience, offer and funnel all optimised together.',
    bullets: ['Creative strategy & production', 'Audience + offer research', 'Campaign structure & bidding', 'Daily optimisation', 'Weekly reporting calls', 'Conversion tracking setup'],
    process: [ { t: 'Audit', d: 'Free audit of your existing account.' }, { t: 'Build', d: 'Campaign structure + creative.' }, { t: 'Launch', d: 'Live in 5–7 days.' }, { t: 'Optimise', d: 'Weekly reviews, monthly scaling.' } ],
    faqs: [
      { q: 'What is your minimum ad budget?', a: 'We recommend at least ₹15,000/month in ad spend for meaningful optimisation.' },
      { q: 'Is there a contract?', a: 'We work on 30-day rolling engagements. No long-term lock-in.' },
    ],
  },
  'social-media-management': {
    overview: 'Editorial-grade content systems that turn followers into revenue. We handle calendar, creative, captions, and community.',
    bullets: ['12–20 posts / month', '6–10 reels / month', 'Story strategy', 'Community DMs', 'Analytics + monthly report', 'Content shoot in Ahmedabad'],
    process: [ { t: 'Brand sprint', d: 'Establish voice, visual language and pillars.' }, { t: 'Content plan', d: 'Monthly calendar aligned with business goals.' }, { t: 'Production', d: 'Shoot + design + captions.' }, { t: 'Grow', d: 'Post, engage, analyse, iterate.' } ],
    faqs: [
      { q: 'Do you shoot content?', a: 'Yes. We include a monthly shoot day in most packages for Ahmedabad-based brands.' },
      { q: 'Which platforms do you cover?', a: 'Primarily Instagram, Facebook, YouTube and Google Business. LinkedIn on request.' },
    ],
  },
  'gmb-setup': {
    overview: 'Get discovered on Google Maps. We handle complete Google My Business creation, verification, optimisation and review strategy.',
    bullets: ['Profile creation & verification', 'Category + service optimisation', 'Photo upload pack', 'Posts + Q&A setup', 'Review strategy', 'Linked to your website'],
    process: [ { t: 'Audit', d: 'Check existing presence.' }, { t: 'Setup', d: 'Create/claim + verify.' }, { t: 'Optimise', d: 'Categories, services, photos.' }, { t: 'Grow', d: 'Review & post strategy.' } ],
    faqs: [ { q: 'How long does verification take?', a: 'Google usually takes 5–14 days for postcard verification. Video verification is often faster.' } ],
  },
  'business-social-setup': {
    overview: 'Everything your business needs to start showing up professionally on the internet — in one setup sprint.',
    bullets: ['Facebook Page', 'Instagram Business', 'YouTube Channel', 'Google My Business', 'WhatsApp Business', 'Brand bios + links + artwork'],
    process: [ { t: 'Brand kit', d: 'Bios, links, brand colours.' }, { t: 'Setup', d: 'All 5 platforms configured.' }, { t: 'Artwork', d: 'Profile & cover artwork.' }, { t: 'Handover', d: 'Full credentials + walkthrough.' } ],
    faqs: [ { q: 'Do I need to be in Ahmedabad?', a: 'No. Everything is done remotely with a shared credential handover at the end.' } ],
  },
  'ads-training-workshop': {
    overview: 'A 3-day intensive that teaches you to run profitable Meta & Google ads — with real campaigns on real dashboards.',
    bullets: ['Facebook Ads Manager setup', 'Campaign types & objectives', 'Creative strategy', 'Audience + targeting', 'Lead generation funnels', 'Scaling playbook'],
    process: [ { t: 'Day 1', d: 'Foundations + account setup.' }, { t: 'Day 2', d: 'Creative + campaigns.' }, { t: 'Day 3', d: 'Scaling + reporting.' } ],
    faqs: [ { q: 'Is this for beginners?', a: 'Yes. The workshop is designed for beginners with some intermediate depth on day 3.' } ],
  },
  'ai-workshop': {
    overview: 'A 7-day live online workshop that teaches you to actually monetise AI — posters, logos, websites, content and automation.',
    bullets: ['AI poster & banner design', 'AI logo creation', 'AI website builders', 'Content generation', 'Business automation', 'Earning methods'],
    process: [ { t: 'Days 1–2', d: 'AI design foundations.' }, { t: 'Days 3–4', d: 'AI websites + content.' }, { t: 'Days 5–6', d: 'Automation systems.' }, { t: 'Day 7', d: 'Earning playbook.' } ],
    faqs: [ { q: 'What is the fee?', a: '₹9,999 for the full 7-day live cohort with lifetime access to recordings.' } ],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  const content = service ? contentMap[service.slug] : undefined;

  useSEO({
    title: service ? `${service.title} | Vyora Growth Ahmedabad` : 'Services | Vyora Growth Ahmedabad',
    description: service
      ? `${service.short} From ${service.price}. Vyora Growth — AI-powered digital agency in Ahmedabad.`
      : 'Explore Vyora Growth digital services in Ahmedabad.',
    keywords: service ? `${service.title} Ahmedabad, ${service.title} service, Vyora Growth` : 'Vyora Growth services Ahmedabad',
  });

  if (!service) return <Navigate to="/services" replace />;
  const Icon = service.icon;

  const formFor = () => {
    if (service.slug === 'website-development' || service.slug === 'landing-page-design') return <WebsiteQuoteForm />;
    if (service.slug === 'ads-management') return <AdsConsultationForm />;
    if (service.slug === 'ai-workshop' || service.slug === 'ads-training-workshop') return <WorkshopForm defaultWorkshop={service.title} />;
    return <ServiceInquiryForm source={service.slug} />;
  };

  return (
    <div>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <Aurora />
        <div className="container-xl relative z-10 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.2em]">
                <Icon className="w-3.5 h-3.5 text-gold-400" /> {service.title}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1] tracking-tight">
                {service.title}.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg text-cream-50/70 max-w-2xl leading-relaxed">{content?.overview || service.short}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={250}>
              <div className="gradient-border rounded-3xl p-8">
                <div className="text-xs uppercase tracking-[0.2em] text-cream-50/50">Starting at</div>
                <div className="font-display text-5xl text-gold-400 mt-2">{service.price}</div>
                <ul className="mt-6 space-y-2">
                  {service.benefits.map(b => <li key={b} className="flex items-center gap-2 text-cream-50/75"><CheckCircle2 className="w-4 h-4 text-gold-400" /> {b}</li>)}
                </ul>
                <Link to="/contact" className="btn-primary w-full justify-center mt-8">Book Consultation <ArrowUpRight className="w-4 h-4" /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {content && (
        <>
          <section className="section-pad">
            <div className="container-xl">
              <SectionHeading eyebrow="What’s included" title={<>Everything built for <span className="italic text-gradient">outcomes</span>.</>} />
              <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {content.bullets.map((b, i) => (
                  <Reveal key={b} delay={i * 60}>
                    <div className="flex items-start gap-3 p-6 rounded-2xl border border-cream-50/10 bg-ink-900/40">
                      <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                      <span className="text-cream-50/85">{b}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="section-pad pt-0">
            <div className="container-xl">
              <SectionHeading eyebrow="Process" title={<>How we <span className="italic text-gradient">deliver</span>.</>} />
              <div className="mt-12 grid md:grid-cols-4 gap-6">
                {content.process.map((p, i) => (
                  <Reveal key={p.t} delay={i * 100}>
                    <div className="rounded-3xl border border-cream-50/10 p-7 bg-ink-900/40 h-full">
                      <div className="font-display text-5xl text-gold-400/80">0{i + 1}</div>
                      <h3 className="mt-6 text-xl">{p.t}</h3>
                      <p className="mt-2 text-cream-50/65 leading-relaxed">{p.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="section-pad pt-0">
            <div className="container-xl grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2">
                <SectionHeading eyebrow="Get started" title={<>Tell us about your <span className="italic text-gradient">project</span>.</>} />
                <p className="mt-6 text-cream-50/65 leading-relaxed">Fill in a quick brief and we’ll respond within a business day with next steps.</p>
              </div>
              <div className="lg:col-span-3">
                <div className="gradient-border rounded-3xl p-8 md:p-10">{formFor()}</div>
              </div>
            </div>
          </section>

          <section className="section-pad pt-0">
            <div className="container-xl">
              <SectionHeading eyebrow="FAQ" title="Common questions" />
              <div className="mt-10"><FAQ items={content.faqs} /></div>
            </div>
          </section>
        </>
      )}

      <CTASection />
    </div>
  );
}
