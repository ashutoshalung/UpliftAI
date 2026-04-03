import { Users, FolderGit2, Mic, Map } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: Users,
    title: 'Elite 1:1 Mentorship',
    description: 'Direct coaching from industry veterans and alumni of NUS, MIT, INSEAD, Stanford, and IIT.',
  },
  {
    icon: FolderGit2,
    title: 'Proof-of-Work Portfolio',
    description: 'A personal website (live from Day 1) and a GitHub portfolio engineered to make recruiters come to you.',
  },
  {
    icon: Mic,
    title: 'Interview Training',
    description: 'Tech & HR mock interviews, whiteboarding sessions, and salary negotiation coaching.',
  },
  {
    icon: Map,
    title: 'Referral Mapping & Placement',
    description: 'Direct introductions: internships for Programs 1\u20133, senior and founder-level placements for Programs 4\u20136.',
  },
];

export default function ElitePackage() {
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: gridRef, visible: gridVisible } = useInView();

  return (
    <section className="py-20 bg-gradient-to-b from-white via-pink-50/40 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className={`text-center mb-12 fade-up ${headerVisible ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-semibold mb-4 uppercase tracking-wider">
            Included in Every Program
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            More than a course. A{' '}
            <span className="text-brand-orange">job placement system.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every program comes with mentorship, portfolio building, interview prep, and direct placement.
          </p>
        </div>

        <div ref={gridRef} className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`fade-up ${gridVisible ? 'visible' : ''} bg-white rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-gray-300`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-coral flex items-center justify-center mb-4">
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
