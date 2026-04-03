import { ArrowRight, Globe, Building2, Users, Upload, Search, UserCheck, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ENROLL_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdGGFBE1d_efs36OddsVDLpKwI_wIoJVdlB7f_KLUpUSIeQLw/viewform?usp=header';

const regions = [
  'Singapore & Southeast Asia',
  'Australia & New Zealand',
  'GCC / Middle East',
  'United States & Canada',
  'United Kingdom & Europe',
];

const vettingSteps = [
  {
    icon: Upload,
    title: 'Submit Your Resume',
    desc: 'Send us your email and resume. Tell us what kind of role you\'re looking for and your availability.',
  },
  {
    icon: Search,
    title: 'We Vet Your Profile',
    desc: 'Our team reviews your skills, experience, and portfolio to assess your readiness for placement.',
  },
  {
    icon: UserCheck,
    title: 'Mapping & Matching',
    desc: 'We map your profile against open internship and role opportunities across our partner network.',
  },
  {
    icon: Send,
    title: 'Direct Introduction',
    desc: 'If you\'re a fit, we introduce you directly to hiring managers. No job boards, no middlemen.',
  },
];

export default function InternshipsPage() {
  const { ref: heroRef, visible: heroVisible } = useInView();
  const { ref: processRef, visible: processVisible } = useInView();
  const { ref: regionRef, visible: regionVisible } = useInView();

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-teal-50/60 to-white">
        <div ref={heroRef} className={`max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center fade-up ${heroVisible ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-semibold uppercase tracking-widest mb-6">
            Internships & Placements
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            We don't just train you.{' '}
            <span className="text-brand-teal">We place you.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Submit your resume. We vet your profile, map you to opportunities, and introduce you directly to hiring managers at AI companies — globally.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ENROLL_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white text-base font-semibold bg-brand-teal hover:bg-brand-teal/90 transition-all"
            >
              Submit Your Resume
              <ArrowRight size={18} />
            </a>
            <a
              href="mailto:hello@upliftai.pro"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 transition-all"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* How the Vetting Process Works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div ref={processRef} className={`text-center mb-14 fade-up ${processVisible ? 'visible' : ''}`}>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              How the placement process works
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto">
              Four steps from resume to role. We do the heavy lifting.
            </p>
          </div>

          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 fade-up ${processVisible ? 'visible' : ''}`}>
            {vettingSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="bg-white rounded-xl border border-gray-200 p-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-brand-teal" />
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Step {i + 1}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href={ENROLL_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold bg-brand-teal hover:bg-brand-teal/90 transition-all"
            >
              Submit Your Resume & Get Started
              <ArrowRight size={16} />
            </a>
            <p className="mt-3 text-sm text-gray-400">
              Or email your resume directly to{' '}
              <a href="mailto:hello@upliftai.pro" className="font-semibold text-brand-teal hover:underline">hello@upliftai.pro</a>
            </p>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-gray-50">
        <div ref={regionRef} className={`max-w-4xl mx-auto px-4 sm:px-6 text-center fade-up ${regionVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-200 mb-6">
            <Globe size={14} className="text-brand-teal" />
            <span className="text-gray-600 text-xs font-semibold uppercase tracking-wider">Global Network</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Placements across 5 regions
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto mb-10">
            Our mentor and hiring network spans the world's top AI hubs.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {regions.map((r) => (
              <div key={r} className="inline-flex items-center px-5 py-3 rounded-lg bg-white border border-gray-200">
                <span className="text-sm font-semibold text-gray-700">{r}</span>
              </div>
            ))}
          </div>

          <div className="mt-14 grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <Users size={20} className="text-gray-400 mb-3" />
              <h3 className="text-base font-bold text-gray-900">Become a Mentor</h3>
              <p className="text-sm text-gray-600 mt-1.5 mb-4">Shape the next generation of AI professionals.</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdksaMJLZxgqWRpafHDMl4-wVW-nuoOS2NJE3atZJpjrWvnFQ/viewform?usp=header"
                className="inline-flex items-center gap-1.5 text-sm text-brand-orange font-semibold hover:underline"
              >
                Apply <ArrowRight size={12} />
              </a>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <Building2 size={20} className="text-gray-400 mb-3" />
              <h3 className="text-base font-bold text-gray-900">Hire AI Talent</h3>
              <p className="text-sm text-gray-600 mt-1.5 mb-4">Access validated AI professionals with proof-of-work.</p>
              <a
                href="https://community.upliftai.pro/join?invitation_token=db45694a19573c9df693618139d863fd67c72db3-2ad0e7c2-c82b-40a6-9539-777da1062849"
                className="inline-flex items-center gap-1.5 text-sm text-brand-teal font-semibold hover:underline"
              >
                Partner With Us <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
