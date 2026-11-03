import React from 'react';

/**
 * FloatingWhatsApp Component
 * Directly redirects user to WhatsApp with the official contact number and prefilled inquiry message.
 * Displays the official WhatsApp phone icon inside the speech bubble.
 * No popups or modal dialogs appear when clicked.
 */
export default function FloatingWhatsApp() {
  const WHATSAPP_NUMBER = '917013204499';
  const DEFAULT_MESSAGE = 'Hello SAM Green Power Solutions Pvt. Ltd., I would like to inquire about solar installation and the government subsidy offer.';
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp (+91 7013204499)"
        title="Chat on WhatsApp (+91 7013204499)"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none ring-4 ring-[#25D366]/25 cursor-pointer"
      >
        {/* Pulsing indicator badge */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#55B51F]"></span>
        </span>

        {/* Official WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-white"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.74 2.66 4.21 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29" />
        </svg>

        {/* Hover Tooltip for Desktop */}
        <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-[#063B18] text-white text-xs font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block border border-[#55B51F]/30">
          Chat with us on WhatsApp
        </span>
      </a>
    </div>
  );
}
