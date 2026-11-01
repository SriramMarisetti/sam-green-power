import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ConsultationModal from './components/ConsultationModal';
import LearnMoreModal from './components/LearnMoreModal';
import PageLoader from './components/PageLoader';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import WhySolarPage from './pages/WhySolarPage';
import CalculatorPage from './pages/CalculatorPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const navigate = useNavigate();
  const [siteRevealed, setSiteRevealed] = useState(false);
  const [loaderMounted, setLoaderMounted] = useState(true);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState(null);
  const [contactSolution, setContactSolution] = useState('Residential Solar');

  const handlePreloaderComplete = () => {
    setSiteRevealed(true);
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
        className={`flex-1 transition-all duration-1000 ease-out transform ${
          siteRevealed
            ? 'opacity-100 translate-y-0 filter-none'
            : 'opacity-0 translate-y-12 blur-[1px]'
        }`}
      >
        <ScrollToTop />
        <Navbar onOpenQuote={() => handleOpenQuote()} />

        <main>
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
        </main>

        <Footer onOpenQuote={() => handleOpenQuote()} />
        <FloatingWhatsApp />
      </div>

      {/* Modals */}
      <ConsultationModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialData={quoteInitialData}
      />

      <LearnMoreModal
        isOpen={learnMoreOpen}
        onClose={() => setLearnMoreOpen(false)}
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
