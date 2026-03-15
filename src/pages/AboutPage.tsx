import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useInView } from '../hooks/useInView';

function AboutContent() {
  const { ref: heroRef, visible: heroVisible } = useInView();
  const { ref: section1Ref, visible: section1Visible } = useInView();
  const { ref: section2Ref, visible: section2Visible } = useInView();
  const { ref: quoteRef, visible: quoteVisible } = useInView();

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-orange-50/60 to-white">
        <div ref={heroRef} className={`max-w-3xl mx-auto px-4 sm:px-6 text-center fade-up ${heroVisible ? 'visible' : ''}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            Closing the AI{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
              Capability Gap
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed">
            <span className="font-bold text-gray-900">Uplift AI</span> exists to close the gap between AI ambition and workforce reality.
            We work backwards from what high-performing teams actually require — tool fluency,
            workflow thinking, execution discipline, and validated proof of capability.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-16">
          <div ref={section1Ref} className={`fade-up ${section1Visible ? 'visible' : ''}`}>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
              Built Around Real Hiring Standards
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Our ecosystem aligns assessment, skill development, mentorship, and proof-of-work
              directly to how modern AI teams evaluate talent. This ensures companies don't just
              see potential — they see <span className="font-bold text-gray-900">demonstrated readiness.</span>
            </p>
          </div>

          <div ref={section2Ref} className={`fade-up ${section2Visible ? 'visible' : ''}`}>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
              Talent Engineered for Impact
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              We help organizations access ready-to-contribute AI talent, while giving individuals
              a structured, disciplined pathway to earn that readiness.
            </p>
            <div className="mt-6 p-6 rounded-2xl bg-gray-50 border-l-4 border-brand-orange">
              <p className="text-lg font-semibold text-gray-700 leading-relaxed">
                This is not learning for learning's sake. It is capability built, tested, and validated for real-world impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div ref={quoteRef} className={`max-w-3xl mx-auto px-4 sm:px-6 text-center scale-in ${quoteVisible ? 'visible' : ''}`}>
          <div className="bg-gradient-to-r from-brand-orange/5 via-brand-coral/5 to-brand-magenta/5 border-2 border-brand-orange/20 rounded-3xl p-10 sm:p-14">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-4">Uplift AI Ideology</p>
            <p className="text-2xl sm:text-3xl font-black text-gray-900 italic leading-relaxed">
              "AI readiness is not claimed — it is demonstrated."
            </p>
          </div>
          <p className="mt-8 text-gray-400 text-sm">
            Singapore-based, globally connected. &copy; 2026 Uplift AI.
          </p>
        </div>
      </section>
    </>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <AboutContent />
      <Footer />
    </div>
  );
}
