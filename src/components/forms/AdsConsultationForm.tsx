import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { ArrowUpRight } from 'lucide-react';
import { Input, Select, SuccessCard } from './ServiceInquiryForm';

export default function AdsConsultationForm() {
  const [state, setState] = useState({ business_name: '', ad_budget: '', current_platform: '', goal: '', contact_number: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('ads_consultations').insert(state);
    setStatus(error ? 'error' : 'done');
  };

  if (status === 'done') return <SuccessCard message="Consultation booked. We'll reach out to plan your campaign." />;

  return (
    <form onSubmit={submit} className="grid md:grid-cols-2 gap-4">
      <Input label="Business Name" value={state.business_name} onChange={(v) => setState({ ...state, business_name: v })} required />
      <Input label="Contact Number" type="tel" value={state.contact_number} onChange={(v) => setState({ ...state, contact_number: v })} required />
      <Select label="Monthly Ad Budget" value={state.ad_budget} onChange={(v) => setState({ ...state, ad_budget: v })} options={['₹5,000 - ₹15,000', '₹15,000 - ₹50,000', '₹50,000 - ₹2,00,000', '₹2,00,000+']} />
      <Select label="Current Platform" value={state.current_platform} onChange={(v) => setState({ ...state, current_platform: v })} options={['Meta (Facebook/IG)', 'Google Ads', 'YouTube', 'Multiple', 'None yet']} />
      <div className="md:col-span-2">
        <Select label="Primary Goal" value={state.goal} onChange={(v) => setState({ ...state, goal: v })} options={['Lead Generation', 'Sales / eCommerce', 'Brand Awareness', 'App Installs', 'Store Visits']} />
      </div>
      <div className="md:col-span-2">
        <button disabled={status === 'loading'} className="btn-primary w-full justify-center">
          {status === 'loading' ? 'Booking…' : 'Book Free Ads Audit'} <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
