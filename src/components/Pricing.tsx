import { ArrowRight, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ASSESSMENT_URL = 'https://equip.co/assessments/nrzee/';
const PAYMENT_URL = '#payment';

const packages = [
  {
    name: 'Package 1',
    price: 300,
    tiers: 'Programs 1-3',
    labels: 'LEARN + BUILD + AUTOMATE',
    tagline: 'From zero to building autonomous AI systems',
    bestFor: 'Beginners, career changers, students',
    careers: ['ML Engineer', 'LLM Engineer', 'AI Agent Developer'],
    salary: '$85K - $280K',
    popular: false,
  },
  {
    name: 'Premium Package',
    price: 500,
    tiers: 'Programs 1-4',
    labels: 'LEARN + BUILD + AUTOMATE + CODE',
    tagline: 'The complete technical stack — foundations through AI-powered development',
    bestFor: 'Ambitious learners wanting the full stack',
    careers: ['All Package 1 roles', 'AI Software Engineer', 'Full-Stack AI Developer'],
    salary: '$85K - $250K',
    popular: true,
    whyUpgrade: '85% of developers now use AI coding tools daily. Program 4 is the difference between "I know AI" and "I build with AI."',
  },
  {
    name: 'Package 2',
    price: 300,
    tiers: 'Programs 4-6',
    labels: 'CODE + DEPLOY + SHIP',
    tagline: 'From coding to launching AI products',
    bestFor: 'Developers with existing ML/coding knowledge',
    careers: ['AI Developer', 'MLOps Engineer', 'AI Product Manager', 'Startup Founder'],
    salary: '$130K - $350K+',
    popular: false,
  },
];

const individualTiers = [
  { num: 1, label: 'LEARN', title: 'AI & ML Foundations', price: 120, color: '#F97316', gradient: 'from-orange-500 to-amber-400' },
  { num: 2, label: 'BUILD', title: 'LLM Applications & RAG', price: 120, color: '#F43F5E', gradient: 'from-rose-500 to-rose-400' },
  { num: 3, label: 'AUTOMATE', title: 'AI Agents & Automation', price: 120, color: '#D946EF', gradient: 'from-fuchsia-500 to-pink-400' },
  { num: 4, label: 'CODE', title: 'AI-Powered Development', price: 150, color: '#22C55E', gradient: 'from-green-500 to-emerald-400' },
  { num: 5, label: 'DEPLOY', title: 'MLOps & Deployment', price: 150, color: '#14B8A6', gradient: 'from-teal-500 to-cyan-400' },
  { num: 6, label: 'SHIP', title: 'AI Product Builder', price: 150, color: '#EAB308', gradient: 'from-yellow-500 to-amber-400' },
];

const postEnrollSteps = [
  "Fill a quick onboarding form (so we can place you in the right cohort and mentor circle)",
  "Get full Circle community access within 24 hours",
  "Your cohort's course starts 2 weeks after enrollment",
  "At the end: interview training + internship/role placement through our referral network",
];

export default function Pricing() {
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: gridRef, visible: gridVisible } = useInView();
  const { ref: tierRef, visible: tierVisible } = useInView();

  return (
    <section id="pricing" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className={`text-center mb-14 fade-up ${headerVisible ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-base font-semibold mb-4 uppercase tracking-wider">
            Packages & Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
              Package
            </span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Every package includes assessment, mentorship, proof-of-work, interview prep, and placement.
          </p>
          <p className="mt-3 text-base text-gray-400">
            Not sure which package?{' '}
            <a href={ASSESSMENT_URL} className="font-bold text-brand-orange hover:underline">
              Take the AI readiness assessment first →
            </a>
          </p>
        </div>

        {/* 3 Package Cards */}
        <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`relative group bg-white rounded-2xl border-2 p-7 sm:p-9 hover:shadow-xl transition-all duration-300 fade-up ${gridVisible ? 'visible' : ''} ${
                pkg.popular
                  ? 'border-brand-orange shadow-lg shadow-brand-orange/10 md:-translate-y-2 hover-glow'
                  : 'border-gray-100 hover-glow'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-brand-orange to-brand-coral text-white text-sm font-bold shadow-lg">
                  <Star size={14} fill="white" /> BEST VALUE
                </span>
              )}

              <h3 className="text-2xl font-black text-gray-900">{pkg.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-5xl font-black text-gray-900">${pkg.price}</span>
              </div>
              <p className="mt-2 text-base font-bold text-brand-orange">{pkg.tiers}: {pkg.labels}</p>
              <p className="mt-2 text-base text-gray-500 italic">"{pkg.tagline}"</p>

              <div className="mt-6 h-px bg-gray-100" />

              <div className="mt-6 space-y-4">
                <div>
                  <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Best for</span>
                  <p className="text-base text-gray-700 mt-1">{pkg.bestFor}</p>
                </div>

                <div>
                  <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Career outcomes</span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {pkg.careers.map((c) => (
                      <span key={c} className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-brand-orange/5 text-brand-orange border border-brand-orange/10">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Salary range</span>
                  <p className="text-xl font-black text-gray-900 mt-1">{pkg.salary}</p>
                </div>

                {pkg.whyUpgrade && (
                  <div className="p-4 rounded-xl bg-brand-orange/5 border border-brand-orange/10">
                    <p className="text-base text-gray-700">
                      <span className="font-bold text-brand-orange">Why upgrade: </span>
                      {pkg.whyUpgrade}
                    </p>
                  </div>
                )}
              </div>

              <a
                href={PAYMENT_URL}
                className={`mt-7 w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold transition-all ${
                  pkg.popular
                    ? 'text-white bg-gradient-to-r from-brand-orange to-brand-coral hover:shadow-lg hover:shadow-brand-coral/25'
                    : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Pay & Enroll Now
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* Individual Program Pricing — always visible */}
        <div ref={tierRef} className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
              Or Buy{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
                Individual Programs
              </span>
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Pick exactly the programs you need. Save up to 40% with packages.
            </p>
          </div>

          <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 fade-up ${tierVisible ? 'visible' : ''}`}>
            {individualTiers.map((tier) => (
              <div
                key={tier.num}
                className="bg-white rounded-2xl border-2 border-gray-100 p-5 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 text-center hover-glow"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center shadow-lg mx-auto mb-3`}>
                  <span className="text-base font-black text-white">{tier.num}</span>
                </div>
                <p className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: tier.color }}>{tier.label}</p>
                <p className="text-sm text-gray-600 mb-3 leading-tight">{tier.title}</p>
                <p className="text-3xl font-black text-gray-900">${tier.price}</p>
                <a
                  href={PAYMENT_URL}
                  className="mt-4 block text-center text-sm font-bold py-2.5 rounded-full border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
                >
                  Pay & Enroll →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Post-enrollment flow */}
        <div className="mt-16 max-w-2xl mx-auto bg-gray-50 rounded-2xl border border-gray-100 p-7 sm:p-10">
          <h4 className="text-xl font-black text-gray-900 mb-5">What Happens After You Enroll:</h4>
          <ol className="space-y-4">
            {postEnrollSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-orange/10 text-brand-orange text-base font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="text-base text-gray-600 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 pt-5 border-t border-gray-200 text-center">
            <p className="text-base text-gray-500">
              Still not sure which package?{' '}
              <a href={ASSESSMENT_URL} className="font-bold text-brand-orange hover:underline">
                Take the AI readiness assessment first →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
