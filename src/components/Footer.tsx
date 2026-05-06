import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { socialLinks } from '../lib/social';

const LOGO = 'https://i.ibb.co/60dxwj2m/VYORA-GROWTH-1.png';

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-cream-50/10 bg-ink-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <img src={LOGO} alt="Vyora Growth" className="h-12 w-12 rounded-full ring-1 ring-cream-50/20" />
              <div>
                <div className="font-display text-2xl text-cream-50">Vyora Growth</div>
                <div className="text-xs uppercase tracking-[0.25em] text-gold-400">Brand Banega • Business Badhega</div>
              </div>
            </Link>
            <p className="mt-6 text-cream-50/60 max-w-md leading-relaxed">
              A premium AI-powered digital agency helping ambitious brands in Ahmedabad and across India scale with modern websites, performance marketing, and AI systems.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-cream-50/15 hover:border-gold-400 hover:text-gold-400 transition" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
              <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-cream-50/15 hover:border-gold-400 hover:text-gold-400 transition" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-cream-50/15 hover:border-gold-400 hover:text-gold-400 transition" aria-label="YouTube"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-cream-50/40 mb-5">Company</div>
            <ul className="space-y-3 text-cream-50/75">
              <li><Link to="/about" className="hover:text-gold-400 transition">About</Link></li>
              <li><Link to="/services" className="hover:text-gold-400 transition">Services</Link></li>
              <li><Link to="/workshops" className="hover:text-gold-400 transition">Workshops</Link></li>
              <li><Link to="/portfolio" className="hover:text-gold-400 transition">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-gold-400 transition">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-cream-50/40 mb-5">Contact</div>
            <ul className="space-y-4 text-cream-50/75">
              <li className="flex gap-3"><MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" /><span>FF/Aviraj, Pinnacle Shopping Mall, Near Divine Life Intl School, Behind Ocia Mall, Vatva, Ahmedabad 382405</span></li>
              <li className="flex gap-3"><Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" /><a href="tel:+918866531993" className="hover:text-gold-400">+91 88665 31993</a></li>
              <li className="flex gap-3"><Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" /><a href="tel:+919173293129" className="hover:text-gold-400">+91 91732 93129 (AI Coach)</a></li>
              <li className="flex gap-3"><Mail className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" /><a href="mailto:hello@vyoragrowth.com" className="hover:text-gold-400">hello@vyoragrowth.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream-50/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-cream-50/40">© {new Date().getFullYear()} Vyora Growth. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-cream-50/50">
            <Link to="/services/website-development" className="hover:text-gold-400">Websites</Link>
            <Link to="/services/ads-management" className="hover:text-gold-400">Ads</Link>
            <Link to="/services/social-media-management" className="hover:text-gold-400">Social</Link>
            <Link to="/services/ai-workshop" className="inline-flex items-center gap-1 hover:text-gold-400">AI Workshops <ArrowUpRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
