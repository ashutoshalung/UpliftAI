import { ClipboardCheck, Users, FolderGit2, Mic, Map } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: ClipboardCheck,
    title: 'AI Readiness Assessment',
    description: 'A comprehensive evaluation mapping your technical baseline, raw logic, and entrepreneurial mindset to the exact market void you are positioned to fill.',
    gradient: 'from-brand-magenta to-pink-400',
  },
  {
    icon: Users,
    title: 'Elite 1:1 Mentorship',
    description: 'Direct, continuous coaching from industry veterans and alumni of NUS, MIT, INSEAD, Stanford, and IIT. You learn the tribal knowledge of Silicon Valley, not just syntax.',
    gradient: 'from-brand-coral to-rose-400',
  },
  {
    icon: FolderGit2,
    title: 'High-Signalling Proof-of-Work',
    description: 'Your bespoke personal website (live from Day 1 via Lovable/Bolt.new) and a formidable GitHub portfolio — engineered to make recruiters come to you.',
    gradient: 'from-brand-orange to-amber-400',
  },
  {
    icon: Mic,
    title: 'Aggressive Interview Training',
    description: 'Tech & HR mock interviews, whiteboarding sessions, and salary negotiation tactics calibrated for the $150K+ market.',
    gradient: 'from-brand-green to-emerald-400',
  },
  {
    icon: Map,
    title: 'Personalised Referral Mapping',
    description: 'Direct ecosystem introductions: internships for Tiers 1-3, senior/founder-level placements for Tiers 4-6. We don\'t just train you — we place you.',
    gradient: 'from-brand-yellow to-lime-400',
  },
];

export default function ElitePackage() {
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: gridRef, visible: gridVisible } = useInView();

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className={`text-center mb-6 fade-up ${headerVisible ? 'visible' : ''}`}>
          <span className="inline-block px-5 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-base font-semibold mb-5 uppercase tracking-wider">
            Included in Every Tier
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Your Gateway to the{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
              Top 1%
            </span>
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            This is not a course. It's a career acceleration system. Every tier comes with the full engine — assessment, mentorship, portfolio building, interview prep, and{' '}
            <span className="font-bold text-gray-900">direct placement</span>.
          </p>
        </div>

        {/* Two-row layout: 3 on top, 2 on bottom centered */}
        <div ref={gridRef} className="mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
            {features.slice(0, 3).map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`fade-up ${gridVisible ? 'visible' : ''} group relative bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 hover-glow`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl sm:max-w-none sm:mx-auto sm:w-2/3">
            {features.slice(3).map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`fade-up ${gridVisible ? 'visible' : ''} group relative bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 hover-glow`}
                  style={{ transitionDelay: `${(i + 3) * 80}ms` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
