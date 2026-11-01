import React from 'react';
import { Phone, MapPin, Sparkles } from 'lucide-react';

export default function TopHeader({ isScrolled = false, isTransparent = false }) {
  const socialLinks = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/919490123456?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20SAM%20Green%20Power%20Solar%20Solutions',
      color: 'hover:text-[#25D366] hover:bg-[#25D366]/20',
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.74 2.66 4.21 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      color: 'hover:text-[#E4405F] hover:bg-[#E4405F]/20',
      svg: (
        <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      color: 'hover:text-[#1877F2] hover:bg-[#1877F2]/20',
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/20',
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74Z" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      color: 'hover:text-[#FF0000] hover:bg-[#FF0000]/20',
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com',
      color: 'hover:text-white hover:bg-white/20',
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    }
  ];

  // ONLY RENDERED ON MOBILE / TABLET (< 1024px), NOT ON LAPTOPS / DESKTOPS
  return (
    <div
      className={`w-full lg:hidden block transition-all duration-300 border-b ${
        isTransparent
          ? 'bg-[#063B18]/95 backdrop-blur-md border-white/10 text-white'
          : 'bg-[#063B18] border-[#55B51F]/20 text-white'
      } ${isScrolled ? 'py-1 text-[11px]' : 'py-1.5 text-xs'}`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between gap-2">
          
          {/* Mobile Tap-to-Call */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+919490123456"
              className="inline-flex items-center gap-1.5 font-bold hover:text-[#55B51F] transition-colors cursor-pointer"
              title="Call SAM Green Power"
            >
              <div className="w-5 h-5 rounded-full bg-[#55B51F] text-white flex items-center justify-center shadow-xs">
                <Phone className="w-2.5 h-2.5" />
              </div>
              <span className="tracking-tight text-white font-sans text-xs">
                +91 94901 23456
              </span>
            </a>

            <span className="hidden sm:inline-flex text-[10px] text-slate-300 items-center gap-1 pl-1 border-l border-white/20">
              <MapPin className="w-2.5 h-2.5 text-[#55B51F]" />
              <span>AP & TS</span>
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className={`w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-slate-200 transition-all duration-200 ${social.color} hover:scale-110 cursor-pointer`}
              >
                {social.svg}
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}