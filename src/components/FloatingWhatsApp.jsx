import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('Hello SAM Green Power, I would like to inquire about solar installation.');

  const handleSend = () => {
    // As per instruction: "Include a floating WhatsApp button, but do not invent the company's phone number."
    const encoded = encodeURIComponent(customMsg);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* WhatsApp Chat Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-[#55B51F]/30 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#063B18] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white p-0.5 border border-[#55B51F]">
                <img
                  src="/logo-128.png"
                  alt="SAM GREEN POWER"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">SAM GREEN POWER</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-[#55B51F]">
                  <span className="w-2 h-2 rounded-full bg-[#55B51F] inline-block"></span>
                  <span>Technical Support Helpline</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#F7FAF5] space-y-3">
            <div className="bg-white p-3 rounded-2xl border border-slate-200/80 text-xs text-[#101A13] shadow-sm">
              <p className="font-semibold text-[#063B18] mb-1">
                👋 Welcome to SAM GREEN POWER!
              </p>
              <p className="text-[#718078] leading-relaxed">
                Connect with our solar engineers directly on WhatsApp for prompt project queries and quotation requests.
              </p>
              <p className="text-[10px] text-slate-400 mt-2 border-t pt-1">
                Official Helpline: [Official WhatsApp Number Placeholder]
              </p>
            </div>

            <textarea
              rows={2}
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-xs focus:outline-none focus:border-[#55B51F] text-[#101A13] resize-none"
              placeholder="Type your message..."
            ></textarea>

            <button
              onClick={handleSend}
              className="w-full py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start WhatsApp Conversation</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none ring-4 ring-[#25D366]/20 cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#55B51F]"></span>
        </span>
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
