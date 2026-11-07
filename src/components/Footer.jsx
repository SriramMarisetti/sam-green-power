import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer({ onOpenQuote }) {
  const socialLinks = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/message/EOIRUNXSVLOMC1',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.74 2.66 4.21 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/samgreenpowersolutions?dlrf=MWZkemJ1cWQ5ZjVoaA==',
      svg: (
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/1MxBa1kmSQ/',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/sam-green-power-solutions-private-limited/',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74Z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-[#063B18] text-white pt-20 pb-12 relative overflow-hidden border-t-4 border-[#55B51F]">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#55B51F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">

          {/* Col 1: Brand & Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-14 h-14 rounded-full bg-white p-1 flex items-center justify-center shrink-0 shadow-lg border border-[#55B51F]/30 group-hover:scale-105 transition-transform">
                <img
                  src="/logo-footer.png"
                  alt="SAM GREEN POWER SOLUTIONS PRIVATE LIMITED"
                  width="56"
                  height="56"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white block leading-tight font-display">
                  SAM GREEN POWER
                </span>
                <span className="text-[10px] tracking-widest text-[#55B51F] uppercase font-bold block">
                  SOLUTIONS PVT. LTD.
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Empowering homes, commercial facilities, and industries with intelligent, durable solar photovoltaic energy solutions. Clean Energy. Better Future.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#55B51F] text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                  >
                    {social.svg}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#55B51F] font-display">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Our Services', href: '/solutions' },
                { name: 'Our Projects', href: '/projects' },
                { name: 'Solar Calculator', href: '/calculator' },
                { name: 'Our Locations', href: '/locations' },
                { name: 'Why Solar & FAQs', href: '/why-solar' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-[#55B51F] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-[#55B51F] text-xs">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solar Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#55B51F] font-display">
              Solar Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {[
                { name: 'Residential Rooftop Solar', href: '/solutions' },
                { name: 'Commercial Solar Systems', href: '/solutions' },
                { name: 'Industrial Shed & Ground Solar', href: '/solutions' },
                { name: 'Solar Installation & O&M', href: '/solutions' },
                { name: 'Net Metering Synchronization', href: '/why-solar' },
                { name: 'Interactive Sizing Calculator', href: '/calculator' },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.href}
                    className="hover:text-[#55B51F] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-[#F5A000] text-xs">•</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#55B51F] font-display">
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#55B51F] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">SAM GREEN POWER SOLUTIONS PVT. LTD.</strong><br />
                  D No 2-5-127, Ryathu Bazar, NTR Dist, Andhra Pradesh, India, 521456<br />
                  <span className="text-[#55B51F] text-[11px] font-semibold">16 Hubs in AP • 12 Hubs in Telangana</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#55B51F] shrink-0" />
                <a href="tel:+917013204499" className="hover:text-[#55B51F] transition-colors">
                  +91 7013204499
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#55B51F] shrink-0" />
                <a href="mailto:Infosamgreenpower@gmail.com" className="hover:text-[#55B51F] transition-colors">
                  Infosamgreenpower@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#55B51F] hover:bg-[#469A18] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © 2026 <strong className="text-white">SAM GREEN POWER SOLUTIONS PRIVATE LIMITED</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors cursor-pointer">About Us</Link>
            <Link to="/calculator" className="hover:text-white transition-colors cursor-pointer">Solar Sizing Tool</Link>
            <span className="text-[#55B51F] font-semibold">Clean Energy • Better Future</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
