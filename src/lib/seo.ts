import { useEffect } from 'react';

type SEO = {
  title: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  schema?: Record<string, unknown>;
};

const SITE_URL = 'https://grihvedaweb-ux.github.io/vyoragrowth';

export function useSEO({ title, description, keywords, canonical, schema }: SEO) {
  useEffect(() => {
    const path = window.location.pathname.replace(/^\/vyoragrowth/, '') || '/';
    const pageUrl = canonical || `${SITE_URL}${path === '/' ? '/' : path}`;
    document.title = title;
    if (description) setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('name', 'googlebot', 'index, follow');
    setMeta('property', 'og:title', title);
    if (description) setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', pageUrl);
    setMeta('property', 'og:site_name', 'Vyora Growth');
    setMeta('property', 'og:locale', 'en_IN');
    setMeta('name', 'twitter:title', title);
    if (description) setMeta('name', 'twitter:description', description);
    setCanonical(pageUrl);
    if (schema) setSchema(schema);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [title, description, keywords, canonical, schema]);
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function setCanonical(value: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', value);
}

function setSchema(value: Record<string, unknown>) {
  let el = document.querySelector('script[data-dynamic-schema="true"]') as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.dataset.dynamicSchema = 'true';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(value);
}
