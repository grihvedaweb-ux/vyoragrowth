export default function VideoBackground({ src, fixed = true }: { src: string; fixed?: boolean }) {
  return (
    <div className={`${fixed ? 'fixed' : 'absolute'} inset-0 z-0 overflow-hidden bg-ink-950 pointer-events-none`}>
      <iframe
        title="Vyora Growth background video"
        src={src}
        className="youtube-bg-frame pointer-events-none"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="youtube-bg-crop-top" aria-hidden="true" />
    </div>
  );
}
