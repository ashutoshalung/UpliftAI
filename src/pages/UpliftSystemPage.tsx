import Navbar from '../components/Navbar';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

export default function UpliftSystemPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <HowItWorks />
      <Footer />
    </div>
  );
}
