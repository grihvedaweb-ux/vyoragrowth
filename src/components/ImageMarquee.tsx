export default function ImageMarquee({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  const doubled = [...images, ...images];
  return (
    <div className="relative overflow-hidden">
      <div className={`marquee-track flex gap-5 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee-slow'}`}>
        {doubled.map((src, i) => (
          <div key={i} className="shrink-0 w-[320px] md:w-[420px] aspect-[5/3] rounded-3xl overflow-hidden border border-cream-50/10">
            <img
              src={src}
              className="w-full h-full object-cover select-none"
              alt=""
              loading="lazy"
              draggable={false}
              onContextMenu={(event) => event.preventDefault()}
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-950 to-transparent" />
    </div>
  );
}
