import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { ArrowUpRight, Check } from 'lucide-react';

export default function ServiceInquiryForm({ source = '' }: { source?: string }) {
  const [state, setState] = useState({ name: '', business_name: '', phone: '', service: '', budget: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('service_inquiries').insert({ ...state, source_page: source });
    setStatus(error ? 'error' : 'done');
  };

  if (status === 'done') return <SuccessCard message="Your inquiry is in. Our team will call you within 24 hours." />;

  return (
    <form onSubmit={submit} className="grid md:grid-cols-2 gap-4">
      <Input label="Your Name" value={state.name} onChange={(v) => setState({ ...state, name: v })} required />
      <Input label="Business Name" value={state.business_name} onChange={(v) => setState({ ...state, business_name: v })} />
      <Input label="Phone" type="tel" value={state.phone} onChange={(v) => setState({ ...state, phone: v })} required />
      <Select
        label="Service Required"
        value={state.service}
        onChange={(v) => setState({ ...state, service: v })}
        options={['Website Development', 'Landing Page', 'Ads Management', 'Social Media Management', 'GMB Setup', 'Business Social Setup', 'AI Workshop', 'Ads Training']}
      />
      <Select
        label="Budget"
        value={state.budget}
        onChange={(v) => setState({ ...state, budget: v })}
        options={['Under ₹5,000', '₹5,000 - ₹20,000', '₹20,000 - ₹50,000', '₹50,000 - ₹1,00,000', '₹1,00,000+']}
      />
      <div className="md:col-span-2">
        <TextArea label="Message" value={state.message} onChange={(v) => setState({ ...state, message: v })} />
      </div>
      <div className="md:col-span-2">
        <button disabled={status === 'loading'} className="btn-primary w-full justify-center">
          {status === 'loading' ? 'Submitting…' : 'Submit Inquiry'} <ArrowUpRight className="w-4 h-4" />
        </button>
        {status === 'error' && <p className="mt-3 text-sm text-red-400">Something went wrong. Please try again.</p>}
      </div>
    </form>
  );
}

export function Input({ label, value, onChange, type = 'text', required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-cream-50/50">{label}{required && ' *'}</span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-ink-900/60 border border-cream-50/10 rounded-2xl px-4 py-3 text-cream-50 placeholder:text-cream-50/30 focus:border-gold-400 focus:outline-none transition"
      />
    </label>
  );
}

export function TextArea({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-cream-50/50">{label}</span>
      <textarea
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-ink-900/60 border border-cream-50/10 rounded-2xl px-4 py-3 text-cream-50 placeholder:text-cream-50/30 focus:border-gold-400 focus:outline-none transition resize-none"
      />
    </label>
  );
}

export function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-cream-50/50">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-ink-900/60 border border-cream-50/10 rounded-2xl px-4 py-3 text-cream-50 focus:border-gold-400 focus:outline-none transition"
      >
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o} className="bg-ink-900">{o}</option>)}
      </select>
    </label>
  );
}

export function SuccessCard({ message }: { message: string }) {
  return (
    <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
      <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center">
        <Check className="w-7 h-7 text-emerald-400" />
      </div>
      <h3 className="mt-4 font-display text-2xl text-cream-50">Thank you</h3>
      <p className="mt-2 text-cream-50/65">{message}</p>
    </div>
  );
}
