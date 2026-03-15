import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import TalentStack from './components/TalentStack';
import ElitePackage from './components/ElitePackage';
import YourJourney from './components/YourJourney';
import WhereToStart from './components/WhereToStart';
import Pricing from './components/Pricing';
import MentorsCompanies from './components/MentorsCompanies';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import AcceleratorPage from './pages/AcceleratorPage';
import AboutPage from './pages/AboutPage';

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
      <Navbar />
      <Hero />
      <Problem />
      <TalentStack />
      <ElitePackage />
      <YourJourney />
      <WhereToStart />
      <Pricing />
      <MentorsCompanies />
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
        <Route path="/accelerator" element={<AcceleratorPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
