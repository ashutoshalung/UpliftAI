import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Problem from './components/Problem';
import ProgramQuiz from './components/ProgramQuiz';
import Testimonials from './components/Testimonials';
import PricingPreview from './components/PricingPreview';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ProgramsPage from './pages/ProgramsPage';
import PricingPage from './pages/PricingPage';
import InternshipsPage from './pages/InternshipsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import AcceleratorPage from './pages/AcceleratorPage';
import AboutPage from './pages/AboutPage';
import MasterclassPage from './pages/MasterclassPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <SocialProof />
      <Problem />
      <ProgramQuiz />
      <Testimonials />
      <PricingPreview />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/internships" element={<InternshipsPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/accelerator" element={<AcceleratorPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/masterclass" element={<MasterclassPage />} />
      </Routes>
    </BrowserRouter>
  );
}
