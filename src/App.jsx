import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ConsultationModal from './components/ConsultationModal';
import PromoModal from './components/PromoModal';
import LearnMoreModal from './components/LearnMoreModal';
import PageLoader from './components/PageLoader';

// Eagerly load Home for immediate First & Largest Contentful Paint (LCP)
import Home from './pages/Home';

// Code-Split Inner Pages for Core Web Vitals Performance
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const WhySolarPage = lazy(() => import('./pages/WhySolarPage'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const LocationsPage = lazy(() => import('./pages/LocationsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function AppContent() {
  const navigate = useNavigate();
  const [siteRevealed, setSiteRevealed] = useState(false);
  const [loaderMounted, setLoaderMounted] = useState(true);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [promoModalOpen, setPromoModalOpen] = useState(false);
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState(null);
  const [contactSolution, setContactSolution] = useState('Residential Solar');

  // 30-Second Quote Popup Re-trigger Logic
  // When a popup is closed and the user scrolls the website, re-trigger the quote popup after 30 seconds once
  const [hasScrolledAfterClose, setHasScrolledAfterClose] = useState(false);
  const [autoQuoteTriggered, setAutoQuoteTriggered] = useState(false);
  const popupClosedAtRef = useRef(null);
  const autoTriggerFiredRef = useRef(false);

  // Triggered whenever the user closes PromoModal or ConsultationModal
  const handlePopupClosed = () => {
    if (!autoTriggerFiredRef.current && !popupClosedAtRef.current) {
      popupClosedAtRef.current = Date.now();
    }
  };

  // Detect scroll activity after popup has been closed
  useEffect(() => {
    const handleScroll = () => {
      if (popupClosedAtRef.current && !autoTriggerFiredRef.current) {
        setHasScrolledAfterClose(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Timer: check every second if 30 seconds have passed since close and user has scrolled
  useEffect(() => {
    if (autoQuoteTriggered) return;

    const timer = setInterval(() => {
      if (
        popupClosedAtRef.current &&
        !autoTriggerFiredRef.current &&
        hasScrolledAfterClose &&
        !promoModalOpen &&
        !quoteModalOpen &&
        !learnMoreOpen
      ) {
        const elapsed = Date.now() - popupClosedAtRef.current;
        if (elapsed >= 30000) {
          autoTriggerFiredRef.current = true;
          setAutoQuoteTriggered(true);
          setQuoteModalOpen(true);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hasScrolledAfterClose, promoModalOpen, quoteModalOpen, learnMoreOpen, autoQuoteTriggered]);

  const handlePreloaderComplete = () => {
    setSiteRevealed(true);
    // Smoothly display client Promo Popup right as site reveals
    setTimeout(() => {
      setPromoModalOpen(true);
    }, 300);
    setTimeout(() => {
      setLoaderMounted(false);
    }, 800);
  };

  const handleOpenQuote = (data = null) => {
    setQuoteInitialData(data);
    setQuoteModalOpen(true);
  };

  const handleSelectSolution = (solutionTitle) => {
    setContactSolution(solutionTitle);
    navigate('/contact');
  };

  const handleCalculateQuote = (calcData) => {
    handleOpenQuote(calcData);
  };

  return (
    <div className="min-h-screen bg-[#F7FAF5] text-[#101A13] relative font-sans overflow-x-hidden flex flex-col justify-between">
      {/* 4-Second Lottie Preloader Animation */}
      {loaderMounted && (
        <PageLoader onComplete={handlePreloaderComplete} />
      )}

      {/* Main Website Wrapper with Smooth Fade-Up Animation */}
      <div
        className={`flex-1 transition-all duration-1000 ease-out ${siteRevealed
            ? 'opacity-100 filter-none'
            : 'opacity-0 translate-y-12 blur-[1px] transform'
          }`}
      >
        <ScrollToTop />
        <Navbar onOpenQuote={() => handleOpenQuote()} />

        <main>
          <Suspense fallback={<div className="min-h-[60vh] bg-[#F7FAF5]" />}>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    onOpenQuote={() => handleOpenQuote()}
                    onSelectSolution={handleSelectSolution}
                    onCalculateQuote={handleCalculateQuote}
                    contactSolution={contactSolution}
                  />
                }
              />
              <Route
                path="/about"
                element={<AboutPage onOpenQuote={() => handleOpenQuote()} />}
              />
              <Route
                path="/solutions"
                element={
                  <SolutionsPage
                    onOpenQuote={() => handleOpenQuote()}
                    onSelectSolution={handleSelectSolution}
                  />
                }
              />
              <Route
                path="/why-solar"
                element={<WhySolarPage onOpenQuote={() => handleOpenQuote()} />}
              />
              <Route
                path="/calculator"
                element={<CalculatorPage onCalculateQuote={handleCalculateQuote} />}
              />
              <Route
                path="/projects"
                element={<ProjectsPage onOpenQuote={() => handleOpenQuote()} />}
              />
              <Route
                path="/locations"
                element={<LocationsPage onOpenQuote={handleOpenQuote} />}
              />
              <Route
                path="/contact"
                element={<ContactPage prefilledSolution={contactSolution} />}
              />
              <Route
                path="*"
                element={
                  <Home
                    onOpenQuote={() => handleOpenQuote()}
                    onSelectSolution={handleSelectSolution}
                    onCalculateQuote={handleCalculateQuote}
                    contactSolution={contactSolution}
                  />
                }
              />
            </Routes>
          </Suspense>
        </main>

        <Footer onOpenQuote={() => handleOpenQuote()} />
      </div>

      {/* ========================================================================= */}
      {/* FLOATING VIEWPORT WIDGETS - TRULY FLOAT ACROSS ENTIRE WEBSITE (VIEWPORT) */}
      {/* ========================================================================= */}

      {/* 1. Floating WhatsApp Button (Bottom Right) */}
      <FloatingWhatsApp />

      {/* 2. Floating Offer Claim Pill (Bottom Left) - Floats on all pages & scroll positions */}
      {siteRevealed && !promoModalOpen && (
        <div className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <button
            onClick={() => setPromoModalOpen(true)}
            className="flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#063B18] via-[#094d20] to-[#063B18] text-white text-xs font-black shadow-2xl hover:shadow-[#55B51F]/40 border-2 border-[#55B51F] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
            title="Claim ₹78,000 Subsidy + ₹22,000 SAM Discount"
          >
            <div className="w-5 h-5 rounded-full bg-[#55B51F] text-[#063B18] flex items-center justify-center font-bold shrink-0 shadow-sm animate-pulse">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] sm:text-[10px] text-[#55B51F] font-bold uppercase tracking-wider leading-none">
                Govt Subsidy + SAM Offer
              </span>
              <span className="text-white text-xs font-black leading-tight">
                Claim <strong className="text-[#55B51F]">₹78,000</strong> + <strong className="text-[#F5A000]">₹22,000</strong> Offer
              </span>
            </div>
          </button>
        </div>
      )}

      {/* Welcome Promo Modal (Point 1 & Point 2) */}
      <PromoModal
        isOpen={promoModalOpen}
        onClose={() => {
          setPromoModalOpen(false);
          handlePopupClosed();
        }}
      />

      {/* Standard Consultation Modal */}
      <ConsultationModal
        isOpen={quoteModalOpen}
        onClose={() => {
          setQuoteModalOpen(false);
          handlePopupClosed();
        }}
        initialData={quoteInitialData}
      />

      <LearnMoreModal
        isOpen={learnMoreOpen}
        onClose={() => {
          setLearnMoreOpen(false);
          handlePopupClosed();
        }}
        onOpenQuote={() => handleOpenQuote()}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
