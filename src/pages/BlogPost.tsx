import { useParams, Link } from 'react-router-dom';
import Aurora from '../components/Aurora';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import { useSEO } from '../lib/seo';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const title = (slug || '').replace(/-/g, ' ');
  useSEO({ title: `${title} | Vyora Growth`, description: `Read our article on ${title}.` });
  return (
    <div>
      <section className="relative pt-40 pb-10 overflow-hidden">
        <Aurora />
        <div className="container-xl relative z-10 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-cream-50/60 hover:text-gold-400 transition"><ArrowLeft className="w-4 h-4" /> Back to journal</Link>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05] capitalize">{title}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-cream-50/65">An in-depth article from the Vyora Growth journal.</p>
          </Reveal>
        </div>
      </section>
      <section className="section-pad pt-8">
        <div className="container-xl max-w-3xl prose prose-invert text-cream-50/75 space-y-6 leading-relaxed">
          <p>Our journal is where we share long-form thinking about AI, digital marketing, websites and brand. Each article is written by the operators who run Vyora Growth engagements every day.</p>
          <p>This post is part of our ongoing series helping Indian founders grow without burning their budgets. Subscribe to our newsletter (coming soon) or follow us on Instagram to catch every new piece.</p>
          <p>Want to go deeper? Book a free consultation and we’ll walk you through exactly how the frameworks in this article apply to your business.</p>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
