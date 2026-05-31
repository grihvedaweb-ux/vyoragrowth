import FAQ from '../components/FAQ';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { aiSearchFaqs } from '../data/aiFaqs';
import { useSEO } from '../lib/seo';

export default function FAQPage() {
  useSEO({
    title: 'FAQ | Vyora Growth AI Digital Agency Ahmedabad',
    description: 'Answers about Vyora Growth services, website development, digital marketing, AI workshops, local SEO, WhatsApp inquiries, pricing and contact details in Ahmedabad.',
    keywords: 'Vyora Growth FAQ, AI digital agency Ahmedabad FAQ, website development Ahmedabad questions, digital marketing agency Ahmedabad contact',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: aiSearchFaqs.map((item) => ({
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
      <section className="relative pt-40 pb-16 overflow-hidden bg-[#fff4df]">
        <div className="container-xl relative z-10">
          <Reveal><div className="text-xs uppercase tracking-[0.28em] text-gold-400">FAQ</div></Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95]">
              Clear answers for <span className="italic text-gradient">clients & AI search</span>.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 max-w-3xl text-lg text-cream-50/70 leading-relaxed">
              Find direct answers about Vyora Growth, services, location, website development, digital marketing,
              AI workshops, local SEO and WhatsApp inquiry support.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Questions"
              title={<>Everything clients usually <span className="italic text-gradient">ask first</span>.</>}
            />
          </div>
          <div className="lg:col-span-3">
            <FAQ items={aiSearchFaqs} />
          </div>
        </div>
      </section>

      <CTASection title="Need a custom answer?" subtitle="Share your business details on WhatsApp and we will guide you with the right website, ads or AI workshop plan." />
    </div>
  );
}
