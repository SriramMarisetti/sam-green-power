import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Calculator } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import TopHeader from './TopHeader';

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
    { name: 'Our Services', href: '/solutions' },
    { name: 'Our Projects', href: '/projects' },
    { name: 'Solar Calculator', href: '/calculator', isSpecial: true },
    { name: 'Our Locations', href: '/locations' },
    { name: 'Contact', href: '/contact' },
  ];

  // Only transparent with white text when at the top of the Home page
  // On all other pages (/about, /solutions, etc.), the navbar is ALWAYS solid white
  const isTransparent = isHome && !scrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Header with Phone Number, Toll-Free, Email & Social Media Icons */}
      <TopHeader isScrolled={scrolled} isTransparent={isTransparent} />

      {/* Main Sticky Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          // Mobile (< lg): Solid background color #063B18 with increased height (py-4, min-h-[72px])
          // Desktop (lg+): Dynamic background based on scroll / page
          !isTransparent
            ? 'bg-[#063B18] lg:bg-white/95 lg:backdrop-blur-md shadow-md border-b border-[#55B51F]/20 lg:border-[#55B51F]/15 py-4 sm:py-4 lg:py-3 min-h-[72px] lg:min-h-0'
            : 'bg-[#063B18] lg:bg-black/20 lg:backdrop-blur-xs py-4 sm:py-4 border-b border-[#55B51F]/20 lg:border-white/10 min-h-[72px] lg:min-h-0'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Brand Logo & Name */}
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none cursor-pointer"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 shadow-md bg-white p-0.5 border border-[#55B51F]/30 shrink-0">
                <img
                  src="/logo-nav.png"
                  alt="SAM GREEN POWER SOLUTIONS PRIVATE LIMITED"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-base sm:text-xl font-black tracking-tight leading-tight font-display transition-colors text-white ${!isTransparent ? 'lg:text-[#063B18]' : 'lg:text-white lg:drop-shadow-sm'
                    }`}
                >
                  SAM GREEN POWER
                </span>
                <span
                  className={`text-[9px] sm:text-[10px] tracking-wider uppercase font-extrabold transition-colors text-white ${!isTransparent ? 'lg:text-[#063B18]' : 'lg:text-white lg:drop-shadow-sm'
                    }`}
                >
                  SOLUTIONS PVT. LTD.
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
                    `px-3 py-2 text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${isActive
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

            {/* Right Action CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-extrabold text-xs tracking-wider uppercase overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl bg-[#55B51F] hover:bg-[#469A18] text-white hover:scale-105 active:scale-95 cursor-pointer border border-[#55B51F]/30 group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenQuote}
                className="sm:hidden px-3.5 py-1.5 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white text-xs font-bold shadow-sm cursor-pointer transition-colors"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl transition-colors focus:outline-none cursor-pointer text-white hover:bg-white/15"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer - Positioned with top-full so it never overlaps or clips the navbar */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-white/98 backdrop-blur-xl border-b border-[#55B51F]/20 shadow-xl transition-all duration-300 max-h-[85vh] overflow-y-auto">
          <div className="px-6 pt-4 pb-8 space-y-3">



            <nav className="flex flex-col space-y-1 pt-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-base font-bold transition-colors cursor-pointer flex items-center justify-between ${isActive
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