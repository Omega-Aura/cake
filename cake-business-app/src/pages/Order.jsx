import { useState } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';
import bakerImg from '../assets/order_baker_hands.png';

export default function Order() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', cakeType: '', size: '6-inch', date: '', message: ''
  });

  const WHATSAPP_NUMBER = '+919232366767';

  const handleChange = (field) => (e) => setFormData({ ...formData, [field]: e.target.value });

  const buildWhatsAppMessage = () => {
    const lines = [
      `*New Cake Enquiry*`,
      ``,
      `- *Name:* ${formData.name}`,
      `- *Phone:* ${formData.phone}`,
      `- *Email:* ${formData.email}`,
      `- *Flavour:* ${formData.cakeType}`,
      `- *Size:* ${formData.size}`,
      `- *Event Date:* ${formData.date}`,
    ];
    if (formData.message.trim()) {
      lines.push(``, `- *Details:* ${formData.message}`);
    }
    return lines.join('\n');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = buildWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    const chatUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-6 pt-24">
        <div className="max-w-lg w-full text-center animate-[fade-up_0.8s_both]">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sage-50 mb-8">
            <CheckCircle className="h-10 w-10 text-sage-600" strokeWidth={1.5} />
          </div>
          <h1 className="font-display text-mink-900 text-4xl font-medium mb-4">Request Sent!</h1>
          <p className="text-mink-800/70 text-lg font-light leading-relaxed mb-6">
            Your order details have been sent to our WhatsApp. We'll confirm your commission within 24 hours.
          </p>
          <p className="text-mink-800/50 text-sm font-light leading-relaxed mb-10">
            Didn't open WhatsApp? <a href={chatUrl} target="_blank" rel="noopener noreferrer" className="text-gold-600 font-medium underline">Click here to message us directly</a>.
          </p>
          <button
            onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', cakeType: '', size: '6-inch', date: '', message: '' }); }}
            className="text-xs tracking-[0.2em] uppercase font-semibold text-mink-900 border-b border-mink-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-20 flex flex-col lg:flex-row">

      {/* ─── MOBILE: Compact image banner (no cropping) ─── */}
      <div className="lg:hidden w-full bg-mink-900 relative overflow-hidden" style={{ height: '280px' }}>
        <img src={bakerImg} alt="Baker at work"
          className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-mink-900/80 via-mink-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <Sparkles className="h-5 w-5 text-gold-400 mb-2" strokeWidth={1.5} />
          <h2 className="font-display text-2xl font-medium leading-tight">Your vision, our craft.</h2>
          <p className="text-white/70 text-sm font-light mt-1">We require 5 days notice for custom orders.</p>
        </div>
      </div>

      {/* ─── DESKTOP: Sticky full-height image panel ─── */}
      <div className="hidden lg:block lg:w-5/12 xl:w-1/2 relative overflow-hidden sticky top-20 h-[calc(100vh-5rem)]">
        <img src={bakerImg} alt="Baker at work" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-mink-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-mink-900/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-12 text-white">
          <Sparkles className="h-6 w-6 text-gold-400 mb-4" strokeWidth={1.5} />
          <h2 className="font-display text-4xl xl:text-5xl font-medium leading-tight mb-3">
            Your vision,<br />our craft.
          </h2>
          <p className="text-white/70 text-base font-light max-w-xs leading-relaxed">
            Every masterpiece starts here. Allow us 5 days to bring your dream cake to life.
          </p>
        </div>
      </div>

      {/* ─── Right: Elegant form ─── */}
      <div className="flex-1 lg:w-7/12 xl:w-1/2 overflow-y-auto px-6 sm:px-12 xl:px-20 py-20">
        <div className="max-w-xl mx-auto animate-[fade-up_0.9s_both]">
          <p className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-5">Bespoke Order</p>
          <h1 className="font-display text-mink-900 text-4xl sm:text-5xl font-medium mb-2">
            Commission a cake
          </h1>
          <p className="text-mink-800/60 mb-12 font-light text-base leading-relaxed">
            Tell us everything. The more details, the more spectacular the result.
          </p>

          <form onSubmit={handleSubmit} className="space-y-10">

            {/* Name + Phone */}
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { label: 'Your Name', key: 'name', type: 'text', placeholder: 'Jane Doe' },
                { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key} className="relative">
                  <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-mink-800/70 mb-3">{label}</label>
                  <input
                    required type={type} placeholder={placeholder}
                    value={formData[key]} onChange={handleChange(key)}
                    className="w-full bg-transparent border-0 border-b-2 border-mink-200 pb-3 text-mink-900 placeholder-mink-800/30 focus:outline-none focus:border-gold-500 transition-colors text-base font-light"
                  />
                </div>
              ))}
            </div>

            {/* Email */}
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-mink-800/70 mb-3">Email Address</label>
              <input
                required type="email" placeholder="jane@example.com"
                value={formData.email} onChange={handleChange('email')}
                className="w-full bg-transparent border-0 border-b-2 border-mink-200 pb-3 text-mink-900 placeholder-mink-800/30 focus:outline-none focus:border-gold-500 transition-colors text-base font-light"
              />
            </div>

            {/* Flavor + Size */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-mink-800/70 mb-3">Flavour</label>
                <select
                  required value={formData.cakeType} onChange={handleChange('cakeType')}
                  className="w-full bg-transparent border-0 border-b-2 border-mink-200 pb-3 text-mink-900 focus:outline-none focus:border-gold-500 transition-colors text-base font-light appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a flavour…</option>
                  <option>Vanilla Atelier</option>
                  <option>Midnight Ganache</option>
                  <option>Velvet Rouge</option>
                  <option>Garden Strawberry</option>
                  <option>Salted Caramel Drip</option>
                  <option>Custom / Bespoke</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-mink-800/70 mb-3">Size</label>
                <select
                  required value={formData.size} onChange={handleChange('size')}
                  className="w-full bg-transparent border-0 border-b-2 border-mink-200 pb-3 text-mink-900 focus:outline-none focus:border-gold-500 transition-colors text-base font-light appearance-none cursor-pointer"
                >
                  <option>6-inch (Serves 8–10)</option>
                  <option>8-inch (Serves 12–15)</option>
                  <option>2-Tier (Serves 20–25)</option>
                  <option>3-Tier (Serves 40+)</option>
                  <option>Cupcake Dozen</option>
                </select>
              </div>
            </div>

            {/* Event Date */}
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-mink-800/70 mb-3">Event Date</label>
              <input
                required type="date" value={formData.date} onChange={handleChange('date')}
                className="w-full bg-transparent border-0 border-b-2 border-mink-200 pb-3 text-mink-900 focus:outline-none focus:border-gold-500 transition-colors text-base font-light"
              />
            </div>

            {/* Vision */}
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-mink-800/70 mb-3">Your Vision</label>
              <textarea
                rows="4" placeholder="Describe your colour palette, theme, inscription, allergies, or any other details…"
                value={formData.message} onChange={handleChange('message')}
                className="w-full bg-transparent border-0 border-b-2 border-mink-200 pb-3 text-mink-900 placeholder-mink-800/30 focus:outline-none focus:border-gold-500 transition-colors text-base font-light resize-none leading-relaxed"
              />
            </div>

            {/* Submit */}
            <div className="pt-4 space-y-4">
              <button
                type="submit"
                className="w-full bg-[#25D366] text-white text-sm tracking-[0.12em] uppercase font-semibold py-5 rounded-2xl hover:bg-[#1fb855] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 flex items-center justify-center gap-3"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Send via WhatsApp
              </button>
              <p className="text-center text-xs text-mink-800/40 font-light tracking-wide">
                Your order details will be sent directly to our WhatsApp for confirmation.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}