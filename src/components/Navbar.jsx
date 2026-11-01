import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Calculator } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Why Solar', href: '/why-solar' },
    { name: 'Solar Calculator', href: '/calculator', isSpecial: true },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  // Only transparent with white text when at the top of the Home page
  // On all other pages (/about, /solutions, etc.), the navbar is ALWAYS solid white
  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        !isTransparent
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#55B51F]/15 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
          >
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 shadow-md bg-white p-0.5 border border-[#55B51F]/30">
              <img
                src="/logo-nav.png"
                alt="SAM GREEN POWER SOLUTIONS PRIVATE LIMITED"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-lg sm:text-xl font-black tracking-tight leading-tight flex items-center gap-1.5 font-display transition-colors ${
                  !isTransparent ? 'text-[#063B18]' : 'text-white drop-shadow-sm'
                }`}
              >
                SAM
                <span className="text-[#55B51F] text-xs font-semibold px-1.5 py-0.5 rounded bg-[#55B51F]/15 border border-[#55B51F]/30">
                  GREEN POWER
                </span>
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-wider uppercase font-bold transition-colors ${
                  !isTransparent ? 'text-[#718078]' : 'text-slate-200 drop-shadow-sm'
                }`}
              >
                SOLUTIONS PRIVATE LIMITED
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? isTransparent
                        ? 'text-white bg-white/20 backdrop-blur-sm font-extrabold shadow-xs border border-white/25'
                        : 'text-[#55B51F] bg-[#55B51F]/10 font-extrabold shadow-xs'
                      : isTransparent
                      ? 'text-white hover:text-[#55B51F] hover:bg-white/10 drop-shadow-sm'
                      : 'text-[#101A13] hover:text-[#55B51F] hover:bg-[#55B51F]/8'
                  }`
                }
              >
                {link.isSpecial && <Calculator className="w-3.5 h-3.5 text-[#F5A000]" />}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-[#55B51F]/30"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuote}
              className="sm:hidden px-3 py-1.5 rounded-full bg-[#55B51F] text-white text-xs font-bold shadow-sm cursor-pointer"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors focus:outline-none cursor-pointer ${
                !isTransparent
                  ? 'text-[#063B18] hover:bg-[#55B51F]/10'
                  : 'text-white hover:bg-white/15'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] sm:top-[75px] bg-white/98 backdrop-blur-xl border-b border-[#55B51F]/20 shadow-xl transition-all duration-300">
          <div className="px-6 pt-4 pb-8 space-y-3">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <img
                src="/logo-128.png"
                alt="SAM GREEN POWER"
                className="w-10 h-10 object-contain rounded-full border border-[#55B51F]/30"
              />
              <div>
                <p className="font-extrabold text-[#063B18] text-sm">SAM GREEN POWER</p>
                <p className="text-[10px] text-[#718078]">Clean Energy. Better Future.</p>
              </div>
            </div>

            <nav className="flex flex-col space-y-1 pt-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-base font-bold transition-colors cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'text-[#55B51F] bg-[#55B51F]/10 font-extrabold'
                        : 'text-[#101A13] hover:text-[#55B51F] hover:bg-[#F7FAF5]'
                    }`
                  }
                >
                  <span className="flex items-center gap-2">
                    {link.isSpecial && <Calculator className="w-4 h-4 text-[#F5A000]" />}
                    {link.name}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                </NavLink>
              ))}
            </nav>

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white font-bold text-sm shadow-md cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
