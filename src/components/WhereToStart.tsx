import { ArrowRight, Sparkles, Code2, Rocket, GraduationCap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ASSESSMENT_URL = '#assessment';

const entryPoints = [
  {
    icon: GraduationCap,
    iconBg: 'bg-gradient-to-br from-brand-magenta to-pink-400',
    title: "I'm new to AI",
    desc: "You've heard the buzz but haven't built anything yet. Maybe you're a student, a career switcher, or a professional in a non-tech role.",
    startAt: 'Tier 1 (LEARN)',
    recommended: 'Package 1 — $300',
    recommendedSub: 'Tiers 1-3',
    outcome: 'Building autonomous AI agents, with a live portfolio and 8-12 GitHub repos',
  },
  {
    icon: Sparkles,
    iconBg: 'bg-gradient-to-br from-brand-coral to-rose-400',
    title: 'I can build models but want to build apps',
    desc: "You know Python, maybe some ML. But you haven't built production LLM applications or worked with agents.",
    startAt: 'Tier 2 (BUILD)',
    recommended: 'Premium — $500',
    recommendedSub: 'Tiers 1-4 (best value)',
    outcome: 'Shipping LLM apps, building agents, coding with Claude Code & Cursor',
  },
  {
    icon: Code2,
    iconBg: 'bg-gradient-to-br from-brand-orange to-amber-400',
    title: "I'm a developer — give me AI superpowers",
    desc: 'You can code. You want to work faster with AI coding tools and learn to deploy and ship AI products.',
    startAt: 'Tier 4 (CODE)',
    recommended: 'Package 2 — $300',
    recommendedSub: 'Tiers 4-6',
    outcome: 'Building and launching full AI products, production-deployed, with real users',
  },
  {
    icon: Rocket,
    iconBg: 'bg-gradient-to-br from-brand-green to-emerald-400',
    title: 'I want to ship AI products and start a company',
    desc: 'You have technical foundations. You want to build, deploy, monetize, and launch.',
    startAt: 'Tier 5 or 6 (DEPLOY / SHIP)',
    recommended: 'Package 2 — $300',
    recommendedSub: 'Tiers 4-6',
    outcome: 'Running an AI SaaS with paying users, listed on Product Hunt, investor-ready',
  },
];

export default function WhereToStart() {
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: gridRef, visible: gridVisible } = useInView();

  return (
    <section id="where-to-start" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className={`text-center mb-14 fade-up ${headerVisible ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold mb-4 uppercase tracking-wider">
            Find Your Starting Point
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            You Don't Start at Tier 1{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
              Unless You Need To.
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Tell us where you are — we'll tell you where to begin.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 gap-6">
          {entryPoints.map((ep, i) => (
            <div
              key={ep.title}
              className={`group bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 fade-up ${gridVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`${ep.iconBg} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <ep.icon size={22} className="text-white" />
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">{ep.title}</h3>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">{ep.desc}</p>

              <div className="mt-5 space-y-2.5">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-0.5 w-24 flex-shrink-0">Start at</span>
                  <span className="text-sm font-bold text-gray-900">{ep.startAt}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-0.5 w-24 flex-shrink-0">Package</span>
                  <div>
                    <span className="text-sm font-bold text-brand-orange">{ep.recommended}</span>
                    <span className="text-xs text-gray-400 ml-1">({ep.recommendedSub})</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-0.5 w-24 flex-shrink-0">After</span>
                  <span className="text-sm text-gray-600">{ep.outcome}</span>
                </div>
              </div>

              <a
                href={ASSESSMENT_URL}
                className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-brand-orange to-brand-coral hover:shadow-lg transition-all group"
              >
                Find Your Exact Tier
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Not sure which one you are? That's exactly what the assessment is for.</p>
          <a
            href={ASSESSMENT_URL}
            className="inline-flex items-center gap-2 text-brand-orange font-bold hover:underline"
          >
            Take the 5-Minute Assessment →
          </a>
        </div>
      </div>
    </section>
  );
}
