import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { openWhatsAppWithMessage } from '../../lib/whatsapp';
import { Input, Select } from './ServiceInquiryForm';

export default function WorkshopForm({ defaultWorkshop = '' }: { defaultWorkshop?: string }) {
  const [state, setState] = useState({ name: '', phone: '', workshop: defaultWorkshop, mode: '', city: '', experience: '' });
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    openWhatsAppWithMessage('I want to register for a workshop.', [
      ['Full Name', state.name],
      ['Phone / WhatsApp', state.phone],
      ['Workshop', state.workshop],
      ['Mode', state.mode],
      ['City', state.city],
      ['Experience Level', state.experience],
    ]);
  };

  return (
    <form onSubmit={submit} className="grid md:grid-cols-2 gap-4">
      <Input label="Full Name" value={state.name} onChange={(v) => setState({ ...state, name: v })} required />
      <Input label="Phone / WhatsApp" type="tel" value={state.phone} onChange={(v) => setState({ ...state, phone: v })} required />
      <Select label="Workshop" value={state.workshop} onChange={(v) => setState({ ...state, workshop: v })} options={['Ads Chalana Seekho (3 Days)', 'AI Se Earning Seekho (7 Days)']} />
      <Select label="Mode" value={state.mode} onChange={(v) => setState({ ...state, mode: v })} options={['Online', 'Offline']} />
      <Input label="City" value={state.city} onChange={(v) => setState({ ...state, city: v })} />
      <Select label="Experience Level" value={state.experience} onChange={(v) => setState({ ...state, experience: v })} options={['Beginner', 'Intermediate', 'Advanced']} />
      <div className="md:col-span-2">
        <button disabled={status === 'loading'} className="btn-primary w-full justify-center">
          {status === 'loading' ? 'Opening WhatsApp...' : 'Register on WhatsApp'} <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
