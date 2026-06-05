import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import footerLogo from './assets/Complete Logo.png';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const Order = lazy(() => import('./pages/Order'));

const WHATSAPP_NUMBER = '919232366767';

function Footer() {
  return (
    <footer className="bg-mink-900 text-cream/60">
      <div className="w-full px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-14">
          <div className="md:col-span-1">
            <img src={footerLogo} alt="Sweet Crumbs Patisserie" className="h-48 w-auto object-contain mb-6 rounded-xl" />
            <p className="text-cream/50 text-sm font-light leading-relaxed">
              Handcrafted cakes for life's most extraordinary moments. Every crumb made with intention.
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-cream/40 mb-5">Navigate</p>
            <ul className="space-y-3 text-sm">
              {[['/', 'Maison'], ['/menu', 'Collection'], ['/order', 'Commission']].map(([to, label]) => (
                <li key={to}><Link to={to} className="hover:text-gold-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-cream/40 mb-5">Contact</p>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a href="mailto:hello@sweetcrumbs.in" className="hover:text-gold-400 transition-colors">
                  hello@sweetcrumbs.in
                </a>
              </li>
              <li>
                <span className="block text-cream/60 text-xs mb-1">Order via WhatsApp:</span>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                  +91 92323 66767
                </a>
              </li>
              <li>Kharagpur, West Bengal</li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-cream/40 mb-5">Join our List</p>
            <p className="text-cream/50 text-sm font-light leading-relaxed mb-4">
              Subscribe for seasonal flavours, exclusive offers, and event invitations.
            </p>
            <form className="flex flex-col gap-3 mb-6" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" required className="bg-transparent border-b border-mink-700 pb-2 text-cream placeholder-cream/30 focus:outline-none focus:border-gold-400 text-sm transition-colors" />
              <button type="submit" className="text-left text-xs tracking-[0.15em] uppercase font-semibold text-gold-400 hover:text-gold-300 transition-colors">
                Subscribe &rarr;
              </button>
            </form>
            <div className="flex items-center gap-5 text-cream/40">
              <a href="#" className="hover:text-gold-400 transition-colors">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-gold-400 transition-colors">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="hover:text-gold-400 transition-colors">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/30">
          <span>© {new Date().getFullYear()} Sweet Crumbs Patisserie. All rights reserved.</span>
          <span className="tracking-wide">Crafted with care ✦ Baked with love</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-cream flex flex-col font-sans">
        <Navbar />
        <div className="flex-grow">
          <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]"><div className="w-12 h-12 border-4 border-gold-400/30 border-t-gold-400 rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/order" element={<Order />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
