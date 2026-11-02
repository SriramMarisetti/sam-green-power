import React, { useState, useEffect } from 'react';
import { Lottie } from 'lottie-react';
import fallbackAnimation from '../assets/green-energy-animation.json';

/**
 * Preloader Component for SAM GREEN POWER SOLUTIONS PRIVATE LIMITED
 * Displays the official Lottie green-energy animation from public/lottie
 * Runs for exactly 4 seconds, then smoothly fades out and triggers website fade-up.
 */
export default function PageLoader({ onComplete }) {
  const [fade, setFade] = useState(false);
  const [animationData, setAnimationData] = useState(fallbackAnimation);

  useEffect(() => {
    // Attempt loading directly from public/lottie/green-energy.json
    let isMounted = true;
    fetch('/lottie/green-energy.json')
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Fallback to local asset');
      })
      .then((data) => {
        if (isMounted && data) {
          setAnimationData(data);
        }
      })
      .catch(() => {
        // Retains fallbackAnimation
      });

    // Preloader animation plays for exactly 4 seconds (4000ms)
    const timer = setTimeout(() => {
      setFade(true);
      if (onComplete) {
        onComplete();
      }
    }, 4000);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F7FAF5] transition-all duration-700 ease-in-out ${
        fade ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
      }`}
      aria-label="Loading SAM Green Power Experience"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#55B51F]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#F5A000]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-lg px-6 text-center select-none">
        
        {/* Lottie Animation Display from public/lottie (Aspect Ratio 3:2 matching 3000x2000 canvas) */}
        <div className="w-[320px] h-[210px] sm:w-[420px] sm:h-[260px] md:w-[480px] md:h-[300px] flex items-center justify-center relative">
          <Lottie
            src={animationData || '/lottie/green-energy.json'}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
            className="w-full h-full flex items-center justify-center"
          />
        </div>

        {/* Company Title & Brand Identity */}
        <div className="mt-1 space-y-1.5 flex flex-col items-center animate-fade-in">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo-128.png"
              alt="SAM Logo"
              className="w-8 h-8 object-contain rounded-full shadow-sm border border-[#55B51F]/30 bg-white p-0.5"
            />
            <h2 className="text-xl sm:text-2xl font-black text-[#063B18] tracking-tight font-display">
              SAM GREEN POWER
            </h2>
          </div>

          <p className="text-[11px] sm:text-xs font-bold text-[#55B51F] uppercase tracking-widest">
            SOLUTIONS PRIVATE LIMITED
          </p>

          <p className="text-xs text-[#718078] font-medium pt-0.5">
            Clean Energy • Better Future
          </p>
        </div>

      </div>
    </div>
  );
}
