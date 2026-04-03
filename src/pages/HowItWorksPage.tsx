import Navbar from '../components/Navbar';
import YourJourney from '../components/YourJourney';
import WhereToStart from '../components/WhereToStart';
import Footer from '../components/Footer';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <div className="pt-4">
        <YourJourney />
        <WhereToStart />
      </div>
      <Footer />
    </div>
  );
}
