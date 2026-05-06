import { useEffect, useRef, ReactNode } from 'react';

export default function ScaleImage({ src, alt, children }: { src: string; alt?: string; children?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('is-visible'); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="scale-reveal relative aspect-[16/9] md:aspect-[21/9] w-full">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      {children}
    </div>
  );
}
