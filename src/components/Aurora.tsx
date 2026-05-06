export default function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-1/3 -left-1/4 w-[60vw] h-[60vw] rounded-full animate-aurora" style={{ background: 'radial-gradient(circle, rgba(201,166,104,0.18), transparent 60%)', filter: 'blur(80px)' }} />
      <div className="absolute top-1/3 -right-1/4 w-[55vw] h-[55vw] rounded-full animate-aurora" style={{ background: 'radial-gradient(circle, rgba(245,239,226,0.06), transparent 60%)', filter: 'blur(90px)', animationDelay: '6s' }} />
      <div className="absolute -bottom-1/3 left-1/4 w-[50vw] h-[50vw] rounded-full animate-aurora" style={{ background: 'radial-gradient(circle, rgba(176,138,74,0.14), transparent 60%)', filter: 'blur(80px)', animationDelay: '11s' }} />
    </div>
  );
}
