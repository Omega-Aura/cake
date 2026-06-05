import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import chocolateCake from '../assets/menu_chocolate_slice.png';
import vanillaCake from '../assets/menu_vanilla_cake.png';
import strawberryCake from '../assets/cake_strawberry.png';
import redVelvetCake from '../assets/menu_red_velvet.png';
import lemonCake from '../assets/lemon_blueberry_cake.png';
import caramelCake from '../assets/caramel_drip_cake.png';
import marbleCake from '../assets/Marbel cake.png';

const cakes = [
  { id: 1, name: 'Vanilla Atelier', price: 45, category: 'Classic', image: vanillaCake, desc: 'Delicate Madagascar vanilla sponge with Swiss meringue buttercream and edible blooms.' },
  { id: 2, name: 'Midnight Ganache', price: 50, category: 'Chocolate', image: chocolateCake, desc: 'Dark 72% cacao cake with mirror-glaze ganache and gold leaf finishes.' },
  { id: 3, name: 'Garden Strawberry', price: 48, category: 'Fruit', image: strawberryCake, desc: 'Sun-ripened local strawberries with Chantilly cream on a light vanilla génoise.' },
  { id: 4, name: 'Velvet Rouge', price: 55, category: 'Classic', image: redVelvetCake, desc: 'Classic red velvet with a velvety cream cheese frosting, shown en coupe.' },
  { id: 5, name: 'Lemon & Blueberry', price: 52, category: 'Fruit', image: lemonCake, desc: 'Zingy lemon sponge with blueberry curd, lemon curd and pale yellow buttercream.' },
  { id: 6, name: 'Salted Caramel Drip', price: 60, category: 'Specialty', image: caramelCake, desc: 'Dramatic caramel drip cake with salted caramel ganache and fleur de sel.' },
  { id: 7, name: 'Classic Marble', price: 250, category: 'Classic', image: marbleCake, desc: 'A beautiful swirl of rich chocolate and vanilla sponge, topped with a delicate glaze.' },
];

const categories = ['All', 'Classic', 'Chocolate', 'Fruit', 'Specialty'];

const WHATSAPP_NUMBER = '919232366767';
function getWhatsAppUrl(cakeName, price) {
  const msg = `Hi! I'd like to order the *${cakeName}* ($${price}). Could you share more details?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function Menu() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? cakes : cakes.filter(c => c.category === filter);

  return (
    <main className="bg-cream pt-20">

      {/* ─── Page Header ─── */}
      <section className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12 pt-14 pb-10 sm:pt-20 sm:pb-14">
        <p className="text-gold-500 text-[10px] tracking-[0.3em] uppercase font-medium mb-4">Patisserie</p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <h1 className="font-display text-mink-900 text-4xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight">
            The Collection
          </h1>
          <p className="text-mink-800/60 text-base sm:text-lg font-light max-w-sm leading-relaxed">
            Each cake is crafted to order. Contact us for fully bespoke commissions.
          </p>
        </div>
      </section>

      {/* ─── Sticky Filter Bar ─── */}
      <div className="sticky top-20 z-30 bg-cream/95 backdrop-blur-md border-b border-mink-100">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12 py-3 flex gap-2 overflow-x-auto"
          style={{ scrollbarWidth: 'none' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`shrink-0 text-xs font-semibold tracking-[0.1em] uppercase px-5 py-2.5 rounded-full border transition-all duration-200 ${filter === cat
                ? 'bg-mink-900 border-mink-900 text-cream'
                : 'bg-transparent border-mink-200 text-mink-800 hover:border-gold-400 hover:text-gold-600'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ─── MOBILE: Stacked vertical list ─── */}
      <section className="sm:hidden px-5 py-10 space-y-10">
        {filtered.map((cake) => (
          <article key={cake.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            {/* Image: fixed height, object-contain so nothing crops */}
            <div className="w-full bg-mink-50" style={{ height: '260px' }}>
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-full object-contain"
                loading="lazy" decoding="async"
              />
            </div>
            {/* Info */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gold-500 text-[10px] tracking-[0.2em] uppercase font-semibold">{cake.category}</span>
                <span className="bg-mink-50 text-mink-900 font-bold text-sm px-3 py-1 rounded-full border border-mink-100">${cake.price}</span>
              </div>
              <h2 className="font-display text-mink-900 text-2xl font-medium mb-2">{cake.name}</h2>
              <p className="text-mink-800/60 text-sm leading-relaxed font-light mb-5">{cake.desc}</p>
              <a href={getWhatsAppUrl(cake.name, cake.price)} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-mink-900 text-cream text-xs tracking-[0.12em] uppercase font-semibold py-3.5 rounded-xl hover:bg-gold-600 transition-colors">
                Order on WhatsApp <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* ─── DESKTOP: Editorial grid ─── */}
      <section className="hidden sm:block max-w-screen-xl mx-auto px-8 lg:px-12 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {filtered.map((cake) => (
            <article key={cake.id} className="group">
              {/* Portrait card — consistent 4:5 aspect on desktop */}
              <div className="relative overflow-hidden rounded-3xl bg-mink-100 mb-5"
                style={{ aspectRatio: '4/5' }}>
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy" decoding="async"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-mink-900/0 group-hover:bg-mink-900/40 transition-colors duration-500 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
                    <a
                      href={getWhatsAppUrl(cake.name, cake.price)} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-cream text-mink-900 text-xs tracking-[0.12em] uppercase font-semibold py-3.5 rounded-xl hover:bg-white transition-colors">
                      Order on WhatsApp <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
                {/* Price badge */}
                <div className="absolute top-4 right-4 bg-cream/95 backdrop-blur-sm text-mink-900 font-semibold text-sm px-4 py-2 rounded-full shadow-md">
                  ${cake.price}
                </div>
              </div>
              {/* Info */}
              <div className="px-1">
                <span className="text-gold-500 text-[10px] tracking-[0.2em] uppercase font-medium block mb-2">{cake.category}</span>
                <h2 className="font-display text-mink-900 text-2xl font-medium mb-2 group-hover:text-gold-600 transition-colors">{cake.name}</h2>
                <p className="text-mink-800/60 text-sm leading-relaxed font-light">{cake.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-mink-50 border-t border-mink-100 py-20 text-center px-5">
        <p className="text-gold-500 text-[10px] tracking-[0.3em] uppercase font-medium mb-4">Don't see what you're looking for?</p>
        <h2 className="font-display text-mink-900 text-3xl sm:text-4xl font-medium mb-5">Every vision deserves a bespoke cake.</h2>
        <p className="text-mink-800/60 text-base font-light mb-9 max-w-md mx-auto">Share your ideas and we'll create something entirely unique, from flavour to final flourish.</p>
        <Link to="/order"
          className="inline-flex items-center gap-3 bg-mink-900 text-cream text-sm tracking-[0.12em] uppercase font-semibold px-10 py-4 rounded-full hover:bg-gold-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(180,134,11,0.3)]">
          Begin a Custom Order <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}