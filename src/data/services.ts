import { Code2, LayoutTemplate, Megaphone, Share2, MapPin, Sparkles, GraduationCap, Brain } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  price: string;
  short: string;
  icon: LucideIcon;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: 'website-development',
    title: 'Custom Coding Website',
    price: '₹4999',
    short: 'Hand-coded, lightning fast, conversion-tuned websites engineered to sell.',
    icon: Code2,
    benefits: ['Hand-coded performance', 'SEO-ready structure', 'Mobile perfection', 'Lead capture built-in'],
  },
  {
    slug: 'landing-page-design',
    title: 'Landing Page Design',
    price: '₹999',
    short: 'High-converting landing pages built for paid traffic and quick launches.',
    icon: LayoutTemplate,
    benefits: ['Conversion copy', 'A/B testable', 'Facebook pixel', 'WhatsApp CTA'],
  },
  {
    slug: 'ads-management',
    title: 'Ads Management',
    price: '₹2999/mo',
    short: 'Meta + Google ad campaigns run by operators who care about ROAS.',
    icon: Megaphone,
    benefits: ['Creative strategy', 'Audience research', 'Daily optimisation', 'Weekly reports'],
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    price: '₹11,999/mo',
    short: 'Editorial-grade content systems that turn followers into revenue.',
    icon: Share2,
    benefits: ['Content calendar', 'Reels + carousels', 'Community DMs', 'Monthly analytics'],
  },
  {
    slug: 'gmb-setup',
    title: 'GMB Account Setup',
    price: '₹999',
    short: 'Get discovered on Google Maps with a fully verified GMB listing.',
    icon: MapPin,
    benefits: ['Verification done for you', 'Category optimisation', 'Photo upload pack', 'Review strategy'],
  },
  {
    slug: 'business-social-setup',
    title: 'Business Social Media Setup',
    price: '₹2999',
    short: 'Facebook, Instagram, YouTube, GMB & WhatsApp Business — handled end-to-end.',
    icon: Sparkles,
    benefits: ['5 platforms setup', 'Brand bio + links', 'Pixel + analytics', 'Profile artwork'],
  },
  {
    slug: 'ads-training-workshop',
    title: 'Ads Training Workshop',
    price: 'Enquire',
    short: '3-day intensive to actually run profitable Meta & Google ads.',
    icon: GraduationCap,
    benefits: ['Hands-on campaigns', 'Lead generation', 'Scaling playbook', 'Lifetime replays'],
  },
  {
    slug: 'ai-workshop',
    title: 'AI Earning Workshop',
    price: '₹9999',
    short: '7-day blueprint to monetise AI — posters, websites, automation & more.',
    icon: Brain,
    benefits: ['AI design tools', 'AI website builders', 'Content at scale', 'Income frameworks'],
  },
];
