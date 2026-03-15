import { ArrowRight, Users, Building2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function MentorsCompanies() {
  const { ref, visible } = useInView();

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-10 fade-up ${visible ? 'visible' : ''}`}>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Join the Uplift AI Ecosystem
          </h2>
          <p className="mt-2 text-gray-500">
            We don't just train talent — we connect it.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 gap-6 fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
          <div className="group bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
            <div className="bg-gradient-to-br from-brand-coral to-rose-400 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Users size={22} className="text-white" />
            </div>
            <h3 className="mt-5 text-xl font-black text-gray-900">Become a Mentor</h3>
            <p className="mt-2 text-gray-500 text-sm leading-relaxed">
              Lead mentor circles, run specialist clinics, supervise capstone projects, and shape the next generation of AI professionals. Our mentors come from DeepMind, Google, Meta, NUS, MIT, and more.
            </p>
            <a
              href="#mentor-apply"
              className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full text-brand-coral font-semibold border border-brand-coral/20 hover:bg-brand-coral/5 transition-all group"
            >
              Apply As Mentor
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="group bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
            <div className="bg-gradient-to-br from-brand-green to-emerald-400 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Building2 size={22} className="text-white" />
            </div>
            <h3 className="mt-5 text-xl font-black text-gray-900">Hire AI Talent</h3>
            <p className="mt-2 text-gray-500 text-sm leading-relaxed">
              Access a validated pipeline of AI professionals trained through our 6-tier system. Every candidate comes with proof-of-work, a live portfolio, and documented capability.
            </p>
            <a
              href="#partner-apply"
              className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full text-brand-green font-semibold border border-brand-green/20 hover:bg-brand-green/5 transition-all group"
            >
              Partner With Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
