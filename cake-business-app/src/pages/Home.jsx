import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import heroCake      from '../assets/hero_cake_full.png';
import chocolateCake from '../assets/menu_chocolate_slice.png';
import vanillaCake   from '../assets/menu_vanilla_cake.png';
import lemonCake     from '../assets/lemon_blueberry_cake.png';

// ─── Marquee strip ───────────────────────────────────────────────────────────
const MARQUEE_ITEMS = ['Handcrafted with Love', 'Locally Sourced', 'Bespoke Designs', 'Same-Day Pickup'];

export default function Home() {
  return (
    <main className="bg-cream pt-20 overflow-x-hidden">

      {/* ─────────────────────────────────────────────
          HERO
          Mobile  : portrait card (60vh), full cake visible, text below
          Desktop : full-bleed cinematic, text pinned bottom-left
      ───────────────────────────────────────────── */}

      {/* MOBILE HERO (shown below sm) */}
      <section className="sm:hidden px-4 pt-8 pb-12">
        {/* Image card — portrait, no cropping */}
        <div className="w-full rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.12)] mb-8"
             style={{ aspectRatio: '3/4' }}>
          <img
            src={heroCake}
            alt="Signature wedding cake by Sweet Crumbs"
            className="w-full h-full object-contain bg-mink-50"
          />
        </div>
        {/* Text block */}
        <p className="text-gold-500 text-[10px] tracking-[0.3em] uppercase font-medium mb-4">✦ Est. 2019 ✦</p>
        <h1 className="font-display text-mink-900 text-4xl font-medium leading-[1.1] tracking-tight mb-5">
          Where every crumb tells a story
        </h1>
        <p className="text-mink-800/60 text-base font-light leading-relaxed mb-8">
          Exquisite, handcrafted cakes using the finest local ingredients — designed to elevate your most cherished celebrations.
        </p>
        <div className="flex flex-col gap-3">
          <Link to="/menu"
            className="flex items-center justify-center gap-2 bg-mink-900 text-cream text-sm tracking-[0.1em] uppercase font-semibold px-6 py-4 rounded-2xl">
            Explore Collection <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/order"
            className="flex items-center justify-center gap-2 border border-mink-200 text-mink-900 text-sm tracking-[0.1em] uppercase font-medium px-6 py-4 rounded-2xl">
            Bespoke Orders <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* DESKTOP HERO (shown from sm upwards) */}
      <section className="hidden sm:block relative h-[90vh] min-h-[600px] max-h-[950px] w-full">
        <img
          src={heroCake}
          alt="Signature wedding cake by Sweet Crumbs"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/75" />
        <div className="absolute bottom-0 left-0 right-0 p-12 lg:p-20 xl:p-28 animate-[fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_both]">
          <div className="max-w-screen-xl mx-auto">
            <p className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium mb-5">✦ &nbsp;Est. 2019&nbsp; ✦</p>
            <h1 className="font-display text-white text-6xl lg:text-7xl xl:text-[6rem] font-medium leading-[1.05] tracking-tight max-w-4xl mb-8">
              Where every crumb<br className="hidden lg:block" /> tells a story
            </h1>
            <div className="flex flex-row gap-4">
              <Link to="/menu"
                className="inline-flex items-center gap-3 bg-white text-mink-900 text-sm tracking-[0.1em] uppercase font-semibold px-8 py-4 rounded-full hover:bg-cream hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1">
                Explore Collection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/order"
                className="inline-flex items-center gap-3 bg-transparent border border-white/50 text-white text-sm tracking-[0.1em] uppercase font-medium px-8 py-4 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                Bespoke Orders <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE STRIP ─── */}
      <div className="bg-mink-900 py-4 overflow-hidden">
        {/* Double the items so the seamless loop works */}
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 28s linear infinite' }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((txt, i) => (
            <span key={i} className="text-gold-400 text-xs tracking-[0.25em] uppercase font-medium mx-10 shrink-0">
              {txt} &nbsp; ✦
            </span>
          ))}
        </div>
      </div>

      {/* ─── EDITORIAL INTRO ─── */}
      <section className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <p className="text-gold-500 text-[10px] tracking-[0.3em] uppercase font-medium mb-5">Our Philosophy</p>
            <h2 className="font-display text-mink-900 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.1] mb-7">
              The art of celebration,<br />
              <em className="text-gold-500 not-italic">baked in.</em>
            </h2>
            <p className="text-mink-800/70 text-base sm:text-lg leading-relaxed mb-5 font-light">
              At Sweet Crumbs, we believe a cake is never just a cake. It's the centerpiece of your most cherished moments — a handcrafted expression of joy, love, and occasion.
            </p>
            <p className="text-mink-800/70 text-base sm:text-lg leading-relaxed mb-10 font-light">
              Every creation begins with a conversation. We source seasonally, bake slowly, and decorate with obsessive attention to detail.
            </p>
            <Link to="/order" className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase font-semibold text-mink-900 border-b border-mink-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors duration-300">
              Commission Your Cake <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* MOBILE image layout: simple 2-up grid, no absolute positioning */}
          <div className="grid grid-cols-2 gap-3 lg:hidden">
            <div className="rounded-2xl overflow-hidden aspect-square shadow-[0_8px_30px_rgba(0,0,0,0.10)]">
              <img src={vanillaCake} alt="Vanilla cake" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square shadow-[0_8px_30px_rgba(0,0,0,0.10)] mt-6">
              <img src={lemonCake} alt="Lemon blueberry cake" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>

          {/* DESKTOP image layout: stacked / overlapping collage */}
          <div className="hidden lg:block relative h-[520px]">
            <div className="absolute top-0 right-0 w-4/5 h-80 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <img src={vanillaCake} alt="Vanilla cake" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="absolute bottom-0 left-0 w-3/5 h-64 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)] border-4 border-cream">
              <img src={lemonCake} alt="Lemon blueberry cake" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="absolute bottom-16 right-10 bg-mink-900 text-cream px-5 py-3 rounded-2xl text-sm font-medium shadow-xl">
              100% Homemade ✦
            </div>
          </div>
        </div>
      </section>

      {/* ─── COLLECTION PREVIEW ─── */}
      <section className="bg-mink-50 py-16 sm:py-24">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between mb-10 sm:mb-14">
            <div>
              <p className="text-gold-500 text-[10px] tracking-[0.3em] uppercase font-medium mb-2">Our Collection</p>
              <h2 className="font-display text-mink-900 text-3xl sm:text-4xl lg:text-5xl font-medium">Signature creations</h2>
            </div>
            <Link to="/menu" className="hidden md:inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase font-medium text-mink-800 hover:text-gold-600 transition-colors">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Cards — uniform square on mobile, portrait on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { img: chocolateCake, name: 'Midnight Ganache', price: '₹50', tag: 'Chocolate' },
              { img: vanillaCake,   name: 'Vanilla Atelier',  price: '₹45', tag: 'Classic' },
              { img: lemonCake,     name: 'Lemon Blueberry',  price: '₹52', tag: 'Fruit' },
            ].map((cake, i) => (
              <article key={i} className="group cursor-pointer">
                {/* Mobile: wide card 16:10. Desktop: portrait 3:4 */}
                <div className="relative overflow-hidden rounded-2xl bg-mink-100 mb-4
                                aspect-[16/10] sm:aspect-[3/4]
                                shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] transition-shadow duration-500">
                  <img src={cake.img} alt={cake.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-cream/90 backdrop-blur-sm text-mink-900 text-[10px] tracking-[0.1em] uppercase font-semibold px-3 py-1.5 rounded-full">
                    {cake.tag}
                  </span>
                  {/* Hover CTA — desktop only */}
                  <div className="hidden sm:block absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    <Link to="/menu" className="block w-full text-center bg-white text-mink-900 text-xs tracking-[0.1em] uppercase font-semibold py-3 rounded-xl hover:bg-cream transition-colors">
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-between px-1">
                  <h3 className="font-display text-mink-900 text-lg sm:text-xl font-medium">{cake.name}</h3>
                  <span className="text-gold-600 font-semibold text-sm">{cake.price}</span>
                </div>
                {/* Mobile: visible CTA button */}
                <div className="sm:hidden mt-3">
                  <Link to="/menu" className="block w-full text-center border border-mink-200 text-mink-900 text-xs tracking-[0.1em] uppercase font-semibold py-3 rounded-xl">
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link to="/menu" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase font-medium text-mink-800 border border-mink-200 px-8 py-3.5 rounded-full hover:border-gold-400 hover:text-gold-600 transition-all">
              View Full Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-16 sm:py-24 max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">
        <p className="text-gold-500 text-[10px] tracking-[0.3em] uppercase font-medium mb-3 text-center">Stories</p>
        <h2 className="font-display text-mink-900 text-3xl sm:text-4xl lg:text-5xl font-medium text-center mb-10 sm:mb-14">What our guests say</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { quote: "The wedding cake was absolutely ethereal. Our guests couldn't stop talking about it — both the design and the flavour.", name: 'Priya & Arjun', event: 'Wedding, Mumbai' },
            { quote: "I've ordered from many patisseries, but Sweet Crumbs has an attention to detail that is truly unmatched. A work of art.", name: 'Sonali Mehta', event: 'Birthday Commission' },
            { quote: "Ordered a custom cake for my mother's 60th. She cried when she saw it. It was the most perfect thing I've ever seen.", name: 'Rahul Nair', event: 'Anniversary Cake' },
          ].map((t, i) => (
            <div key={i} className="bg-mink-50 rounded-2xl p-6 sm:p-8 border border-mink-100">
              <p className="text-gold-400 text-3xl font-display mb-3">"</p>
              <p className="text-mink-800/80 text-sm sm:text-base leading-relaxed font-light mb-5 italic font-display">{t.quote}</p>
              <div>
                <p className="text-mink-900 font-medium text-sm">{t.name}</p>
                <p className="text-mink-800/50 text-xs tracking-wide uppercase mt-0.5">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="bg-mink-900 py-20 px-5 text-center">
        <p className="text-gold-400 text-[10px] tracking-[0.3em] uppercase font-medium mb-4">Begin Your Order</p>
        <h2 className="font-display text-cream text-3xl sm:text-4xl lg:text-5xl font-medium mb-7 max-w-2xl mx-auto leading-tight">
          Ready to commission something extraordinary?
        </h2>
        <Link to="/order"
          className="inline-flex items-center gap-3 bg-gold-500 text-white text-sm tracking-[0.12em] uppercase font-semibold px-10 py-4 rounded-full hover:bg-gold-600 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(180,134,11,0.4)] hover:-translate-y-1">
          Start Your Consultation <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

    </main>
  );
}