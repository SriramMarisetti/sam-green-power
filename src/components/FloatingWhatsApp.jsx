import React from 'react';
import { MessageCircle } from 'lucide-react';

/**
 * FloatingWhatsApp Component
 * Directly redirects user to WhatsApp with the official contact number and prefilled inquiry message.
 * No popups or modal dialogs appear when clicked.
 */
export default function FloatingWhatsApp() {
  const WHATSAPP_NUMBER = '91701320449';
  const DEFAULT_MESSAGE = 'Hello SAM Green Power Solutions Pvt. Ltd., I would like to inquire about solar installation and the government subsidy offer.';
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp (+91 701320449)"
        title="Chat on WhatsApp (+91 701320449)"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none ring-4 ring-[#25D366]/25 cursor-pointer"
      >
        {/* Pulsing indicator badge */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#55B51F]"></span>
        </span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7" />

        {/* Hover Tooltip for Desktop */}
        <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-[#063B18] text-white text-xs font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block border border-[#55B51F]/30">
          Chat with us on WhatsApp
        </span>
      </a>
    </div>
  );
}
