import { Link } from 'react-router-dom';
import Aurora from '../components/Aurora';
import Reveal from '../components/Reveal';
import { useSEO } from '../lib/seo';
import { ArrowUpRight } from 'lucide-react';

const categories = ['AI Tools', 'Digital Marketing', 'Website Development', 'Ads Strategy', 'Business Growth', 'Social Media Tips'];

const posts = [
  { slug: 'ai-tools-for-business-india-2025', title: '8 AI tools every Indian business should use in 2025', cat: 'AI Tools', excerpt: 'From content creation to automation, these are the AI tools that move the needle for small and mid-sized businesses.', img: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&w=1200' },
  { slug: 'meta-ads-roi-local-brands', title: 'How local brands in Ahmedabad can get 3x ROI from Meta ads', cat: 'Ads Strategy', excerpt: 'A simple, honest framework for running profitable Meta campaigns without burning your budget.', img: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&w=1200' },
  { slug: 'premium-website-design-principles', title: 'The 5 principles behind every premium business website', cat: 'Website Development', excerpt: 'What separates a ₹4,999 site from a ₹49,000 site? Mostly attention to detail. Here are the five we never skip.', img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=1200' },
  { slug: 'gmb-optimisation-local-seo', title: 'GMB optimisation: the cheapest channel a local business can own', cat: 'Digital Marketing', excerpt: 'If you’re a local business in Ahmedabad, your Google My Business listing is your most undervalued asset.', img: 'https://images.pexels.com/photos/5082580/pexels-photo-5082580.jpeg?auto=compress&w=1200' },
  { slug: 'whatsapp-marketing-india', title: 'WhatsApp marketing in India: a 2025 operator’s guide', cat: 'Social Media Tips', excerpt: 'Click-to-chat ads, broadcast lists, chatbots — a full breakdown of what actually works for Indian buyers.', img: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&w=1200' },
  { slug: 'founder-growth-playbook', title: 'The founder’s growth playbook: compounding attention into revenue', cat: 'Business Growth', excerpt: 'A 12-month plan that combines brand, content, ads and AI systems to build a pipeline that compounds.', img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&w=1200' },
];

export default function Blog() {
  useSEO({
    title: 'Blog | Vyora Growth — Growth, AI & Marketing Insights',
    description: 'Essays and playbooks on AI, digital marketing, websites, and growth for Indian founders.',
    keywords: 'digital marketing blog India, AI tools blog, growth playbook',
  });
  return (
    <div>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <Aurora />
        <div className="container-xl relative z-10">
          <Reveal><div className="text-xs uppercase tracking-[0.28em] text-gold-400">Journal</div></Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95]">
              Writings on <span className="italic text-gradient">growth & AI</span>.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-pad pt-8">
        <div className="container-xl">
          <div className="flex flex-wrap gap-2 mb-12">
            {['All', ...categories].map(c => (
              <button key={c} className="px-4 py-2 rounded-full border border-cream-50/10 text-sm text-cream-50/70 hover:text-cream-50 hover:border-gold-400 transition">
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link to={`/blog/${p.slug}`} className="group block rounded-3xl overflow-hidden border border-cream-50/10 hover-lift bg-ink-900/50 h-full">
                  <div className="aspect-[5/3] overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  </div>
                  <div className="p-7">
                    <div className="text-xs uppercase tracking-[0.2em] text-gold-400">{p.cat}</div>
                    <h3 className="mt-3 font-display text-2xl leading-snug group-hover:text-gold-400 transition-colors">{p.title}</h3>
                    <p className="mt-3 text-cream-50/60 leading-relaxed">{p.excerpt}</p>
                    <div className="mt-6 inline-flex items-center gap-1 text-sm text-cream-50/70">Read more <ArrowUpRight className="w-4 h-4" /></div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
