import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919232366767';
const DEFAULT_MESSAGE = `Hi Sweet Crumbs! I'd like to enquire about ordering a cake.`;

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-[0_6px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_10px_32px_rgba(37,211,102,0.55)] hover:-translate-y-1 transition-all duration-300 group"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2} />
      <span className="text-sm font-semibold tracking-wide hidden sm:inline">Chat with us</span>
    </a>
  );
}
