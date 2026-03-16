import { Play, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const MASTERCLASS_URL = 'https://community.upliftai.pro/join?invitation_token=f428b930d629d809a0145adaa77f482ff6bc4bde-afeaad75-1e2b-473a-985d-9dd3ef56aaa7';
const ASSESSMENT_URL = 'https://equip.co/assessments/nrzee/';

export default function Masterclass() {
  const { ref, visible } = useInView();

  return (
    <section id="masterclass" className="py-20 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`relative rounded-3xl border-2 border-brand-orange/20 bg-gradient-to-br from-orange-50/80 via-white to-pink-50/50 p-8 sm:p-12 text-center overflow-hidden fade-up ${visible ? 'visible' : ''}`}
        >
          {/* Subtle background orbs */}
          <div className="absolute top-[-80px] right-[-60px] w-[250px] h-[250px] bg-gradient-to-bl from-brand-orange/8 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-60px] left-[-40px] w-[200px] h-[200px] bg-gradient-to-tr from-brand-coral/6 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 mb-6">
              <Play size={14} className="text-brand-orange" fill="currentColor" />
              <span className="text-brand-orange text-base font-semibold uppercase tracking-wider">Free Masterclass</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Not Ready to Commit?{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
                Start Here.
              </span>
            </h2>

            <p className="mt-5 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join our community and attend the free AI Tools Masterclass — learn the exact tools
              companies use to hire. No payment to join, no commitment, just real skills in one session.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={MASTERCLASS_URL}
                className="cta-glow inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-lg font-bold bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta hover:shadow-xl hover:shadow-brand-coral/25 transition-all duration-300 hover:scale-[1.03]"
              >
                <Play size={18} fill="currentColor" />
                Join Community & Attend Free Masterclass
              </a>
              <a
                href={ASSESSMENT_URL}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-brand-orange/30 hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
              >
                Take the AI Readiness Assessment
                <ArrowRight size={18} className="text-gray-400" />
              </a>
            </div>

            <p className="mt-5 text-base text-gray-400">
              Already know your tier? <button onClick={() => document.getElementById('talent-stack')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold text-brand-orange hover:underline">Explore the tiers directly →</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
