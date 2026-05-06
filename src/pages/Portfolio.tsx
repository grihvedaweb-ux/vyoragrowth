import Aurora from '../components/Aurora';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { useSEO } from '../lib/seo';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const work = [
  { title: 'Aadiv Tour and Travels', category: 'Tour and Travel Website', url: 'https://aadivtourandtravels.co.in', img: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&w=1200', tag: 'Travel Booking' },
  { title: 'Trishul Tours Travels', category: 'Tours and Travels Website', url: 'https://trishultourstravels.co.in', img: 'https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&w=1200', tag: 'Travel Agency' },
  { title: 'Grihveda Web', category: 'Fully SEO Website and Marketing Agency', url: 'https://grihvedaweb.co.in', img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&w=1200', tag: 'SEO Website' },
  { title: 'Rudra Pure Hygiene', category: 'Cleaning Products Website', url: 'https://rudrapurehygiene.co.in', img: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&w=1200', tag: 'Cleaning Products' },
  { title: 'Best Choice Services', category: 'Home Appliances Services', url: 'https://bestchoiceservices.co.in', img: 'https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&w=1200', tag: 'Repair Services' },
  { title: 'AB Music Company', category: 'Customized Music Distribution Platform', url: 'https://abmusiccompany.grihvedaweb.co.in', img: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&w=1200', tag: 'Music Distribution' },
  { title: 'Al-Eshal', category: 'Passport and Visa Services', url: 'https://www.al-eshal.com', img: 'https://images.pexels.com/photos/7235904/pexels-photo-7235904.jpeg?auto=compress&w=1200', tag: 'Visa Services' },
  { title: 'Buletin India Live News', category: 'News Portal Website', url: 'https://buletinindialivenews.com', img: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&w=1200', tag: 'News Portal' },
  { title: 'CV Makers', category: 'Resume Services Website', url: 'https://cvmakers.co.in', img: 'https://images.pexels.com/photos/5989927/pexels-photo-5989927.jpeg?auto=compress&w=1200', tag: 'Resume Service' },
  { title: 'The Self Drive', category: 'Rent on Vehicle Website', url: 'https://theselfdrive.co.in', img: 'https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg?auto=compress&w=1200', tag: 'Vehicle Rental' },
  { title: 'Property Demo', category: 'Real Estate Website Demo', url: 'https://property.grihvedaweb.co.in', img: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&w=1200', tag: 'Real Estate' },
  { title: 'Salon & Spa Demo', category: 'Salon and Spa Website Demo', url: 'https://salon-spa.grihvedaweb.co.in', img: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&w=1200', tag: 'Beauty Website' },
  { title: 'Woman Garments Demo', category: 'Woman Readymade Garments Website', url: 'https://woman-garments.grihvedaweb.co.in', img: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&w=1200', tag: 'Fashion Demo' },
  { title: "Man's Garments Demo", category: "Men's Readymade Garments Website", url: 'https://mans-garments.grihvedaweb.co.in', img: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&w=1200', tag: 'Fashion Demo' },
  { title: 'Resort and Hotel Demo', category: 'Resort and Hotel Website Demo', url: 'https://resort.grihvedaweb.co.in', img: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&w=1200', tag: 'Hospitality' },
  { title: 'Gym Demo', category: 'Gym and Fitness Website Demo', url: 'https://gym.grihvedaweb.co.in', img: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&w=1200', tag: 'Fitness' },
  { title: 'Restaurant & Food Demo', category: 'Restaurant and Food Website Demo', url: 'https://restaurant.grihvedaweb.co.in', img: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&w=1200', tag: 'Restaurant' },
  { title: 'Universe Furniture', category: 'Furniture Store Website', url: 'https://universefurniture.co.in', img: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&w=1200', tag: 'Furniture Store' },
  { title: 'BMK Foundation', category: 'NGO and Trust Website', url: 'https://bmkfoundation.co.in', img: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&w=1200', tag: 'NGO Website' },
  { title: 'RPS Interior', category: 'Home Interior Business Website', url: 'https://rpsinterior.homes', img: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&w=1200', tag: 'Interior Design' },
  { title: 'Digital Grihveda Web', category: 'Digital Marketing Website', url: 'https://digital.grihvedaweb.co.in', img: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&w=1200', tag: 'Digital Marketing' },
  { title: 'Vansh Logistics', category: 'Transport Services Website', url: 'https://vanshlogistics.grihvedaweb.co.in', img: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&w=1200', tag: 'Transport' },
  { title: 'Maa Laxmi Travels', category: 'Travels Agency Website', url: 'https://maalaxmitravels.in', img: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&w=1200', tag: 'Travel Agency' },
];

export default function Portfolio() {
  useSEO({
    title: 'Website Portfolio | Vyora Growth Work',
    description: 'Explore Vyora Growth website portfolio: travel, SEO, cleaning products, home appliances, music distribution, visa, news, resume, real estate, salon, hotel, gym, restaurant, furniture, NGO, interior, digital marketing and transport websites.',
    keywords: 'Vyora Growth portfolio, website design portfolio Ahmedabad, SEO website portfolio, Grihveda Web websites, business website examples',
  });

  return (
    <div>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <Aurora />
        <div className="container-xl relative z-10">
          <Reveal><div className="text-xs uppercase tracking-[0.28em] text-gold-400">Work</div></Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95]">
              Website <span className="italic text-gradient">portfolio</span>.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-3xl text-lg text-cream-50/65 leading-relaxed">
              Real business websites and niche demos built for SEO, speed, trust and inquiry generation across travel, services, fashion, hospitality, real estate and local businesses.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {work.map((item, i) => (
            <Reveal key={`${item.title}-${item.url}`} delay={i * 35}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group block h-full rounded-3xl overflow-hidden border border-cream-50/10 bg-ink-900/60 hover-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink-900">
                  <img
                    src={item.img}
                    alt={item.category}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 select-none"
                    loading="lazy"
                    draggable={false}
                    onContextMenu={(event) => event.preventDefault()}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-cream-50/15 bg-ink-950/70 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-gold-400">
                    {item.tag}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl leading-tight text-cream-50">{item.title}</h3>
                      <p className="mt-2 text-sm text-cream-50/60 leading-relaxed">{item.category}</p>
                    </div>
                    <ExternalLink className="mt-1 w-5 h-5 shrink-0 text-cream-50/40 group-hover:text-gold-400 transition" />
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl border border-cream-50/10 bg-ink-950/45 px-4 py-3">
                    <span className="min-w-0 break-all text-sm text-cream-50/65">{item.url.replace(/^https?:\/\//, '')}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-gold-400" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-xl">
          <SectionHeading eyebrow="Portfolio coverage" title={<>Websites for <span className="italic text-gradient">real business niches</span>.</>} />
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[{ n: `${work.length}+`, l: 'Websites listed' }, { n: '15+', l: 'Business categories' }, { n: 'SEO', l: 'Search-ready builds' }, { n: 'WhatsApp', l: 'Lead-focused CTAs' }].map((stat, i) => (
              <Reveal key={stat.l} delay={i * 80}>
                <div className="rounded-3xl border border-cream-50/10 p-8 bg-ink-900/50">
                  <div className="font-display text-5xl text-cream-50">{stat.n}</div>
                  <div className="text-sm uppercase tracking-[0.2em] text-cream-50/50 mt-2">{stat.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
