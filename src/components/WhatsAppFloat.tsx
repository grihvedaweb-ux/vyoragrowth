import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const msg = encodeURIComponent("Hi Vyora Growth, I'd like to know more about your services.");
  return (
    <a
      href={`https://wa.me/918866531993?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 blur-xl opacity-70 group-hover:opacity-100 transition" />
      <span className="relative flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-400 transition">
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
      </span>
    </a>
  );
}
