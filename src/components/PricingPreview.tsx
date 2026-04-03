import { ArrowRight, Star, CheckCircle, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const packages = [
  {
    name: 'Package 1',
    price: 300,
    programs: 'Programs 1\u20133',
    labels: 'LEARN + BUILD + AUTOMATE',
    tagline: 'From zero to building autonomous AI systems',
    bestFor: 'Beginners, career changers, students',
    salary: '$65K \u2013 $110K',
    popular: false,
    careers: ['Junior ML Engineer', 'LLM Engineer', 'AI Agent Developer'],
    includes: [
      'Elite 1:1 mentorship',
      'Portfolio & GitHub building',
      'Interview training',
      'Internship referral mapping',
    ],
  },
  {
    name: 'Premium Package',
    price: 500,
    programs: 'Programs 1\u20134',
    labels: 'LEARN + BUILD + AUTOMATE + CODE',
    tagline: 'The complete technical stack \u2014 foundations through AI-powered development',
    bestFor: 'Ambitious learners wanting the full stack',
    salary: '$65K \u2013 $130K',
    popular: true,
    careers: ['All Package 1 roles', 'AI Software Engineer', 'Full-Stack AI Developer'],
    includes: [
      'Everything in Package 1',
      'AI-powered coding (Claude Code, Cursor)',
      'Full-stack project portfolio',
      'Senior-level interview prep',
    ],
    whyUpgrade: '85% of developers now use AI coding tools daily. Program 4 is the difference between "I know AI" and "I build with AI."',
  },
  {
    name: 'Package 2',
    price: 300,
    programs: 'Programs 4\u20136',
    labels: 'CODE + DEPLOY + SHIP',
    tagline: 'From coding to launching AI products',
    bestFor: 'Developers with existing ML/coding knowledge',
    salary: '$80K \u2013 $150K+',
    popular: false,
    careers: ['AI Software Engineer', 'MLOps Engineer', 'AI Product Manager', 'Startup Founder'],
    includes: [
      'Elite 1:1 mentorship',
      'Production deployment projects',
      'Salary negotiation coaching',
      'Senior/founder placement',
    ],
  },
];

export default function PricingPreview() {
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: gridRef, visible: gridVisible } = useInView();
  const { ref: ctaRef, visible: ctaVisible } = useInView();

  return (
    <section className="py-24 bg-gradient-to-b from-orange-50/60 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className={`text-center mb-14 fade-up ${headerVisible ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold mb-4 uppercase tracking-wider">
            Packages & Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
            Pick your package.{' '}
            <span className="text-brand-orange">Land the role.</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Every package maps to specific AI jobs. Includes mentorship, portfolio, interview prep, and direct placement.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`relative bg-white rounded-xl border p-7 sm:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 fade-up ${gridVisible ? 'visible' : ''} ${
                pkg.popular ? 'border-brand-orange shadow-md md:-translate-y-2 hover:md:-translate-y-3' : 'border-gray-200 hover:border-gray-300'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-4 py-1 rounded-full bg-brand-orange text-white text-sm font-bold">
                  <Star size={14} fill="white" /> BEST VALUE
                </span>
              )}

              <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-gray-900">${pkg.price}</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-brand-orange">{pkg.programs}: {pkg.labels}</p>
              <p className="mt-2 text-sm text-gray-500">"{pkg.tagline}"</p>

              <div className="mt-5 h-px bg-gray-100" />

              <div className="mt-5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Best for</span>
                <p className="text-sm text-gray-700 mt-1">{pkg.bestFor}</p>
              </div>

              <div className="mt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">What's included</span>
                <div className="mt-2 space-y-2">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-brand-teal flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Career outcomes</span>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {pkg.careers.map((c) => (
                    <span key={c} className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">{c}</span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Salary range</span>
                <p className="text-xl font-extrabold text-gray-900 mt-1">{pkg.salary}</p>
              </div>

              {pkg.whyUpgrade && (
                <div className="mt-4 p-3 rounded-lg bg-orange-50 border border-orange-100">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-brand-orange">Why upgrade: </span>{pkg.whyUpgrade}
                  </p>
                </div>
              )}

              <Link
                to="/pricing"
                className={`mt-6 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold transition-all ${
                  pkg.popular ? 'text-white bg-brand-orange hover:bg-brand-orange/90' : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                }`}
              >
                View Details & Enroll <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          Individual programs also available from $120.{' '}
          <Link to="/pricing" className="font-semibold text-brand-orange hover:underline">See all options</Link>
        </p>

        {/* Explore Job Programs CTA */}
        <div ref={ctaRef} className={`mt-16 fade-up ${ctaVisible ? 'visible' : ''}`}>
          <div className="rounded-3xl bg-[#1E1B4B] p-10 sm:p-14 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-600 mb-5">
              <Briefcase size={14} className="text-brand-orange" />
              <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest">The Career Accelerator</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              6 programs. 6 AI jobs. Your pick.
            </h3>
            <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
              ML Engineer → LLM Engineer → Agent Developer → Software Engineer → MLOps → Product Manager
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white text-base font-semibold bg-brand-orange hover:bg-brand-orange/90 transition-all"
              >
                Explore the Job Programs <ArrowRight size={18} />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-gray-300 border border-gray-600 hover:bg-white/5 transition-all"
              >
                How It Works <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
