import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { openWhatsAppWithMessage } from '../../lib/whatsapp';
import { Input, Select, TextArea } from './ServiceInquiryForm';

export default function WebsiteQuoteForm() {
  const [state, setState] = useState({ name: '', phone: '', business_type: '', pages_required: '', budget: '', features: '', timeline: '' });
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    openWhatsAppWithMessage('I want a website quote.', [
      ['Name', state.name],
      ['Phone', state.phone],
      ['Business Type', state.business_type],
      ['Pages Required', state.pages_required],
      ['Budget', state.budget],
      ['Timeline', state.timeline],
      ['Features Needed', state.features],
    ]);
  };

  return (
    <form onSubmit={submit} className="grid md:grid-cols-2 gap-4">
      <Input label="Name" value={state.name} onChange={(v) => setState({ ...state, name: v })} required />
      <Input label="Phone" type="tel" value={state.phone} onChange={(v) => setState({ ...state, phone: v })} required />
      <Input label="Business Type" value={state.business_type} onChange={(v) => setState({ ...state, business_type: v })} />
      <Select label="Pages Required" value={state.pages_required} onChange={(v) => setState({ ...state, pages_required: v })} options={['1 (Landing)', '3-5', '5-10', '10+']} />
      <Select label="Budget" value={state.budget} onChange={(v) => setState({ ...state, budget: v })} options={['Rs 999 - Rs 5,000', 'Rs 5,000 - Rs 25,000', 'Rs 25,000 - Rs 1,00,000', 'Rs 1,00,000+']} />
      <Select label="Timeline" value={state.timeline} onChange={(v) => setState({ ...state, timeline: v })} options={['ASAP', '1 Week', '2-4 Weeks', '1-3 Months']} />
      <div className="md:col-span-2">
        <TextArea label="Features Needed" value={state.features} onChange={(v) => setState({ ...state, features: v })} />
      </div>
      <div className="md:col-span-2">
        <button disabled={status === 'loading'} className="btn-primary w-full justify-center">
          {status === 'loading' ? 'Opening WhatsApp...' : 'Get Quote on WhatsApp'} <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
