import { useEffect } from 'react';

type SEO = {
  title: string;
  description?: string;
  keywords?: string;
  canonical?: string;
};

export function useSEO({ title, description, keywords }: SEO) {
  useEffect(() => {
    document.title = title;
    if (description) setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);
    setMeta('property', 'og:title', title);
    if (description) setMeta('property', 'og:description', description);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [title, description, keywords]);
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
