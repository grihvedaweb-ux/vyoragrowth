import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { openWhatsAppWithMessage } from '../../lib/whatsapp';
import { Input, Select } from './ServiceInquiryForm';

export default function AdsConsultationForm() {
  const [state, setState] = useState({ business_name: '', ad_budget: '', current_platform: '', goal: '', contact_number: '' });
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    openWhatsAppWithMessage('I want to book a free ads audit.', [
      ['Business Name', state.business_name],
      ['Contact Number', state.contact_number],
      ['Monthly Ad Budget', state.ad_budget],
      ['Current Platform', state.current_platform],
      ['Primary Goal', state.goal],
    ]);
  };

  return (
    <form onSubmit={submit} className="grid md:grid-cols-2 gap-4">
      <Input label="Business Name" value={state.business_name} onChange={(v) => setState({ ...state, business_name: v })} required />
      <Input label="Contact Number" type="tel" value={state.contact_number} onChange={(v) => setState({ ...state, contact_number: v })} required />
      <Select label="Monthly Ad Budget" value={state.ad_budget} onChange={(v) => setState({ ...state, ad_budget: v })} options={['Rs 5,000 - Rs 15,000', 'Rs 15,000 - Rs 50,000', 'Rs 50,000 - Rs 2,00,000', 'Rs 2,00,000+']} />
      <Select label="Current Platform" value={state.current_platform} onChange={(v) => setState({ ...state, current_platform: v })} options={['Meta (Facebook/IG)', 'Google Ads', 'YouTube', 'Multiple', 'None yet']} />
      <div className="md:col-span-2">
        <Select label="Primary Goal" value={state.goal} onChange={(v) => setState({ ...state, goal: v })} options={['Lead Generation', 'Sales / eCommerce', 'Brand Awareness', 'App Installs', 'Store Visits']} />
      </div>
      <div className="md:col-span-2">
        <button disabled={status === 'loading'} className="btn-primary w-full justify-center">
          {status === 'loading' ? 'Opening WhatsApp...' : 'Book Audit on WhatsApp'} <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
