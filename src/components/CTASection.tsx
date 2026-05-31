import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import Reveal from './Reveal';

export default function CTASection({
  title = 'Ready to scale faster?',
  subtitle = 'Let’s build your brand into a business that compounds. Book a free 20-minute strategy call.',
}: { title?: string; subtitle?: string }) {
  return (
    <section className="section-pad">
      <div className="container-xl">
        <div className="premium-card relative overflow-hidden rounded-[2.5rem] border border-cream-50/10 p-8 md:p-16">
          <div className="aurora-bg" />
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Reveal>
                <div className="mb-5 inline-flex rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-white/85">Let's collaborate</div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-cream-50">{title}</h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 text-cream-50/65 leading-relaxed max-w-lg">{subtitle}</p>
              </Reveal>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col md:items-end gap-3 md:gap-4">
              <Link to="/contact" className="btn-primary justify-center">Book Free Consultation <ArrowUpRight className="w-4 h-4" /></Link>
              <a href="https://wa.me/918866531993" target="_blank" rel="noreferrer" className="btn-ghost justify-center">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
