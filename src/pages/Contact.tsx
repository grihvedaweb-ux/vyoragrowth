import Aurora from '../components/Aurora';
import Reveal from '../components/Reveal';
import { useSEO } from '../lib/seo';
import ServiceInquiryForm from '../components/forms/ServiceInquiryForm';
import { socialLinks } from '../lib/social';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Contact() {
  useSEO({
    title: 'Contact Vyora Growth | Digital Agency Ahmedabad',
    description: 'Call, WhatsApp or submit an inquiry to Vyora Growth. Based in Vatva, Ahmedabad. +91 88665 31993.',
    keywords: 'Contact Vyora Growth, Digital agency Ahmedabad contact, Vyora Growth Instagram, Vyora Growth Facebook, Vyora Growth YouTube',
  });

  return (
    <div>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <Aurora />
        <div className="container-xl relative z-10">
          <Reveal><div className="text-xs uppercase tracking-[0.28em] text-gold-400">Get in touch</div></Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95]">
              Let’s build<br /><span className="italic text-gradient">something real</span>.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-xl grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <div className="gradient-border rounded-3xl p-8">
                <div className="text-xs uppercase tracking-[0.2em] text-gold-400">Studio</div>
                <div className="mt-4 flex gap-4">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-1" />
                  <p className="text-cream-50/75 leading-relaxed">FF/Aviraj, Pinnacle Shopping Mall, Near Divine Life International School, Behind Ocia Mall, Vatva, Ahmedabad, Gujarat 382405</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="gradient-border rounded-3xl p-8 space-y-4">
                <div className="text-xs uppercase tracking-[0.2em] text-gold-400">Talk to us</div>
                <a href="tel:+918866531993" className="flex items-center gap-3 text-cream-50 hover:text-gold-400 transition">
                  <Phone className="w-5 h-5" /> +91 88665 31993 <span className="text-cream-50/40 text-sm">(Main)</span>
                </a>
                <a href="tel:+919173293129" className="flex items-center gap-3 text-cream-50 hover:text-gold-400 transition">
                  <Phone className="w-5 h-5" /> +91 91732 93129 <span className="text-cream-50/40 text-sm">(AI Coach)</span>
                </a>
                <a href="mailto:hello@vyoragrowth.com" className="flex items-center gap-3 text-cream-50 hover:text-gold-400 transition">
                  <Mail className="w-5 h-5" /> hello@vyoragrowth.com
                </a>
                <a href="https://wa.me/918866531993" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition">
                  <MessageCircle className="w-5 h-5" /> WhatsApp us
                </a>
                <div className="pt-4 border-t border-cream-50/10">
                  <div className="text-xs uppercase tracking-[0.18em] text-cream-50/40 mb-3">Follow Vyora Growth</div>
                  <div className="flex items-center gap-3">
                    <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="icon-button w-10 h-10 flex items-center justify-center rounded-full border border-cream-50/15 hover:text-gold-400" aria-label="Instagram">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="icon-button w-10 h-10 flex items-center justify-center rounded-full border border-cream-50/15 hover:text-gold-400" aria-label="Facebook">
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="icon-button w-10 h-10 flex items-center justify-center rounded-full border border-cream-50/15 hover:text-gold-400" aria-label="YouTube">
                      <Youtube className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-3xl overflow-hidden border border-cream-50/10 aspect-[4/3]">
                <iframe
                  title="map"
                  src="https://maps.google.com/maps?q=Vatva%20Ahmedabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full"
                  style={{ filter: 'invert(92%) hue-rotate(180deg) grayscale(0.3)' }}
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-3">
            <Reveal>
              <div className="gradient-border rounded-3xl p-8 md:p-10">
                <h2 className="font-display text-3xl md:text-4xl">Send us an inquiry</h2>
                <p className="mt-3 text-cream-50/60">We respond within 24 business hours.</p>
                <div className="mt-8">
                  <ServiceInquiryForm source="contact" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
