import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <div className="pt-4">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}
