export type SEOPage = {
  slug: string;
  h1: string;
  title: string;
  description: string;
  keyword: string;
  intro: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
};

const base = (slug: string, keyword: string, h1: string, desc: string, intro: string): SEOPage => ({
  slug,
  keyword,
  h1,
  title: `${h1} | Vyora Growth`,
  description: desc,
  intro,
  sections: [
    {
      heading: `Why Vyora Growth for ${keyword}`,
      body: `We are a boutique AI-powered agency based in Ahmedabad, engineered to help ambitious local businesses grow faster. Every project we ship for ${keyword} is built around three pillars — conversion-first design, editorial branding, and measurable growth.`,
      bullets: ['Senior-only team, no junior handoffs', 'Fixed timelines with weekly check-ins', 'Transparent pricing, no hidden retainers', 'Built for ROI from day one'],
    },
    {
      heading: `Our Process`,
      body: `From the first strategy call to post-launch optimisation, we use a cinematic, structured process refined across 150+ brand engagements.`,
      bullets: ['Discovery & strategy sprint', 'Design & copy in parallel', 'Build, QA & launch', 'Growth & optimisation'],
    },
    {
      heading: `Local expertise across Ahmedabad & Gujarat`,
      body: `We understand the Ahmedabad market — from Vatva to Bopal, SG Highway to Maninagar. Whether you run a clinic, boutique, D2C brand, coaching institute or a local service business, we tailor ${keyword} to the behaviours of buyers in Gujarat.`,
    },
  ],
  faqs: [
    { q: `How much does ${keyword} cost in Ahmedabad?`, a: `Projects start from ₹999 for focused services like landing pages and GMB setup, and scale from there for end-to-end engagements. Every project gets a fixed quote after a free discovery call.` },
    { q: `How long until I see results?`, a: `Websites launch in 7–14 days. Ad campaigns typically show measurable results in the first 14–30 days. AI workshops deliver day-one practical skills you can monetise immediately.` },
    { q: `Do you work with small businesses?`, a: `Absolutely. A large portion of our work is with small and mid-sized businesses across Ahmedabad. Our pricing and workshop-led offerings are specifically designed for founders who want premium without bloated budgets.` },
    { q: `Is support included after launch?`, a: `Yes. Every engagement includes a 30-day post-launch support window. Ongoing care packages are available on request.` },
  ],
});

export const seoPages: SEOPage[] = [
  base('website-development-ahmedabad', 'Website Development Ahmedabad', 'Website Development Ahmedabad', 'Premium website development agency in Ahmedabad. Custom-coded, SEO-ready websites from ₹4,999.', 'We build websites that win customers. No templates, no shortcuts — just clean, custom-coded sites that load fast, rank on Google and convert visitors into leads.'),
  base('website-designer-ahmedabad', 'Website Designer Ahmedabad', 'Website Designer Ahmedabad', 'Award-level website design in Ahmedabad — luxury UI, cinematic motion, premium brands.', 'A website is your most important sales asset. We design experiences that feel premium, tell your story with clarity, and turn attention into revenue.'),
  base('digital-marketing-agency-ahmedabad', 'Digital Marketing Agency Ahmedabad', 'Digital Marketing Agency Ahmedabad', 'Full-stack digital marketing agency in Ahmedabad. Ads, SEO, content, AI systems.', 'Vyora Growth is a boutique digital marketing agency in Ahmedabad combining creative strategy, paid media, and AI systems to compound growth month after month.'),
  base('social-media-management-ahmedabad', 'Social Media Management Ahmedabad', 'Social Media Management Ahmedabad', 'Done-for-you social media management with editorial content and growth strategy.', 'We turn your social presence into a revenue channel. Editorial calendars, reels, carousels and community DMs — all handled by a senior team.'),
  base('facebook-ads-service-ahmedabad', 'Facebook Ads Service Ahmedabad', 'Facebook Ads Service Ahmedabad', 'Profitable Facebook & Meta ads management from ₹2,999/mo in Ahmedabad.', 'We run Meta campaigns with a single obsession — return on ad spend. Creative, audience, offer and funnel all optimised for the Ahmedabad market.'),
  base('instagram-ads-ahmedabad', 'Instagram Ads Ahmedabad', 'Instagram Ads Ahmedabad', 'Instagram ads agency Ahmedabad — reels ads, DM campaigns, lead generation.', 'Instagram is where Ahmedabad buyers discover, compare and decide. Our Instagram ads programs combine scroll-stopping creative with sharp targeting.'),
  base('google-ads-agency-ahmedabad', 'Google Ads Agency Ahmedabad', 'Google Ads Agency Ahmedabad', 'Google Ads agency Ahmedabad — search, YouTube, performance max, local campaigns.', 'Our certified Google Ads team runs search, YouTube and performance max campaigns engineered to capture high-intent buyers in Ahmedabad and across India.'),
  base('landing-page-design-ahmedabad', 'Landing Page Design Ahmedabad', 'Landing Page Design Ahmedabad', 'Conversion-focused landing page design from ₹999 in Ahmedabad.', 'A great landing page is the fastest path from ad spend to revenue. Ours are built in days, launch-ready, and engineered for conversion.'),
  base('business-website-gujarat', 'Business Website Gujarat', 'Business Website Gujarat', 'Business website design across Gujarat — Ahmedabad, Surat, Vadodara & Rajkot.', 'From Ahmedabad to Surat, Vadodara to Rajkot — we build business websites that make Gujarat brands look world-class.'),
  base('gmb-setup-ahmedabad', 'GMB Setup Ahmedabad', 'GMB Setup Ahmedabad', 'Google My Business setup, verification & optimisation in Ahmedabad from ₹999.', 'Get discovered on Google Maps. Complete GMB creation, verification, category mapping and review strategy — done for you.'),
  base('ai-workshop-ahmedabad', 'AI Workshop Ahmedabad', 'AI Workshop Ahmedabad', '7-day AI earning workshop in Ahmedabad — learn to design, build and monetise with AI.', 'The AI Earning Workshop is a 7-day live online cohort that teaches you how to actually use AI to design, build and earn — from posters to full websites.'),
  base('ai-course-ahmedabad', 'AI Course Ahmedabad', 'AI Course Ahmedabad', 'Best AI course in Ahmedabad — practical, live, and earning-focused.', 'Skip the theory. Our AI course is 100% practical — every session leaves you with a tool or workflow you can monetise the same day.'),
  base('ai-training-gujarat', 'AI Training Gujarat', 'AI Training Gujarat', 'AI training for entrepreneurs across Gujarat — online cohorts with live mentorship.', 'Join founders, freelancers and students from across Gujarat in our live AI training cohorts — fully online, with lifetime community access.'),
  base('ai-tools-training-ahmedabad', 'AI Tools Training Ahmedabad', 'AI Tools Training Ahmedabad', 'Learn the best AI tools for business — ChatGPT, Midjourney, Canva AI, Gamma & more.', 'We teach the AI tools that actually move the needle — from ChatGPT for content to Midjourney for creative and AI website builders for rapid launches.'),
  base('lead-generation-service-ahmedabad', 'Lead Generation Service Ahmedabad', 'Lead Generation Service Ahmedabad', 'Qualified lead generation service for Ahmedabad businesses — Meta, Google, WhatsApp.', 'We build complete lead engines — funnel, creative, ad spend and CRM handoff — so your sales team wakes up to qualified inquiries every morning.'),
  base('whatsapp-marketing-ahmedabad', 'WhatsApp Marketing Ahmedabad', 'WhatsApp Marketing Ahmedabad', 'WhatsApp marketing service Ahmedabad — campaigns, chatbots, click-to-WhatsApp ads.', 'WhatsApp is India’s most powerful conversion channel. We design WhatsApp campaigns, click-to-chat ads and automated flows that convert.'),
  base('local-seo-ahmedabad', 'Local SEO Ahmedabad', 'Local SEO Ahmedabad', 'Local SEO agency Ahmedabad — rank in Google Maps and local search.', 'Local SEO is the cheapest channel a local business can own. We handle GMB optimisation, citations, reviews and local landing pages.'),
  base('small-business-website-ahmedabad', 'Small Business Website Ahmedabad', 'Small Business Website Ahmedabad', 'Affordable small business websites in Ahmedabad starting ₹4,999.', 'We’ve built our pricing around small businesses. Premium design, proper development, and the lowest possible time-to-launch.'),
  base('premium-website-design-ahmedabad', 'Premium Website Design Ahmedabad', 'Premium Website Design Ahmedabad', 'Luxury website design Ahmedabad — cinematic, editorial, award-quality.', 'For brands that want to look like the best version of themselves. Editorial typography, cinematic motion, and a design language that signals premium.'),
  base('ai-website-builder-service-india', 'AI Website Builder Service India', 'AI Website Builder Service India', 'AI-assisted website builder service across India — fast, beautiful, production-ready.', 'We combine AI workflows with senior designers to deliver stunning websites in days, not weeks — with a price point no agency can match.'),
];
