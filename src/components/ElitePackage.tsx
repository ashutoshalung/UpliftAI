import { ClipboardCheck, Users, FolderGit2, Mic, Map } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: ClipboardCheck,
    title: 'Rigorous Readiness Assessment',
    description: 'A comprehensive evaluation mapping your raw logic, technical baseline, and entrepreneurial mindset to the exact market void you are positioned to fill.',
  },
  {
    icon: Users,
    title: 'Elite 1:1 Mentorship',
    description: 'Direct, continuous coaching from industry veterans and alumni of NUS, MIT, INSEAD, Stanford, and IIT. You learn the tribal knowledge of Silicon Valley, not just syntax.',
  },
  {
    icon: FolderGit2,
    title: 'High-Signalling Proof-of-Work',
    description: 'We orchestrate the build of your bespoke personal website and a formidable GitHub portfolio engineered to attract high-end venture and recruitment algorithms.',
  },
  {
    icon: Mic,
    title: 'Aggressive Interview Training',
    description: 'Tech & HR mock interviews, whiteboarding sessions, and salary negotiation tactics specifically calibrated for the $150k+ market.',
  },
  {
    icon: Map,
    title: 'Personalised Referral Mapping',
    description: 'Direct ecosystem introductions tailored to your tier: highly coveted internships for Tiers 1\u20133, and senior/founder-level placements for Tiers 4\u20136.',
  },
];

export default function ElitePackage() {
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: gridRef, visible: gridVisible } = useInView();

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className={`text-center mb-6 fade-up ${headerVisible ? 'visible' : ''}`}>
          <span className="inline-block px-5 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-base font-semibold mb-5 uppercase tracking-wider">
            Every Tier Includes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Your Gateway to the{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
              Top 1%
            </span>
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            This is not a course. It's a career acceleration system. Every tier comes with the full engine —
            assessment, mentorship, portfolio building, interview prep, and{' '}
            <span className="font-bold text-gray-900">direct placement</span>.
          </p>
        </div>

        <div ref={gridRef} className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`fade-up ${gridVisible ? 'visible' : ''} group relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1 transition-all duration-300`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange to-brand-coral flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-black text-gray-900 mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
