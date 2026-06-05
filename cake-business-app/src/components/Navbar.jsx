import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Maison' },
    { to: '/menu', label: 'Collection' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-xl border-b border-mink-200/60">
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">

            {/* Left nav links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`text-sm tracking-[0.12em] uppercase font-medium transition-colors duration-300 relative group ${location.pathname === to ? 'text-gold-600' : 'text-mink-800 hover:text-gold-500'
                    }`}
                >
                  {label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-gold-400 transition-all duration-500 ${location.pathname === to ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                </Link>
              ))}
            </div>

            {/* Center Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-center group">
              <span className="block font-display text-2xl font-semibold tracking-wide text-mink-900 group-hover:text-gold-600 transition-colors duration-300">
                Sweet Crumbs
              </span>
              <span className="block text-[9px] tracking-[0.35em] uppercase text-gold-500 font-medium mt-0.5">
                Homemade cakes
              </span>
            </Link>

            {/* Right CTA */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/order"
                className="flex items-center gap-2.5 bg-mink-900 text-cream text-sm tracking-[0.1em] uppercase font-medium px-6 py-3 rounded-full hover:bg-gold-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(180,134,11,0.3)]"
              >
                <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                Order Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-mink-800 hover:text-mink-900 p-2"
            >
              {isOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-mink-900/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 bg-cream flex flex-col pt-24 px-8 gap-8 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} onClick={() => setIsOpen(false)}
              className="font-display text-2xl text-mink-900 hover:text-gold-600 transition-colors">
              {label}
            </Link>
          ))}
          <Link to="/order" onClick={() => setIsOpen(false)}
            className="font-display text-2xl text-gold-600 hover:text-gold-500 transition-colors">
            Order Now
          </Link>
        </div>
      </div>
    </>
  );
}