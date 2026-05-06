const WHATSAPP_NUMBER = '918866531993';

type WhatsAppField = [label: string, value?: string];

export function openWhatsAppWithMessage(title: string, fields: WhatsAppField[]) {
  const details = fields
    .filter(([, value]) => value && value.trim())
    .map(([label, value]) => `${label}: ${value}`);
  const message = ['Hi Vyora Growth,', '', title, ...details].join('\n');
  window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
