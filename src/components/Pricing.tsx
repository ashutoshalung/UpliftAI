import { ArrowRight, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ASSESSMENT_URL = '#assessment';
const PAYMENT_URL = '#payment';

const packages = [
  {
    name: 'Package 1',
    price: 300,
    tiers: 'Tiers 1-3',
    labels: 'LEARN + BUILD + AUTOMATE',
    tagline: 'From zero to building autonomous AI systems',
    bestFor: 'Beginners, career changers, students',
    tools: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'LangChain', 'Hugging Face', 'Pinecone', 'n8n', 'OpenClaw', 'CrewAI'],
    projects: '9 high-signal projects across 3 tiers',
    careers: ['ML Engineer', 'LLM Engineer', 'AI Agent Developer'],
    salary: '$85K - $280K',
    popular: false,
  },
  {
    name: 'Premium Package',
    price: 500,
    tiers: 'Tiers 1-4',
    labels: 'LEARN + BUILD + AUTOMATE + CODE',
    tagline: 'The complete technical stack — foundations through AI-powered development',
    bestFor: 'Ambitious learners wanting the full stack',
    tools: ['Everything in Package 1', 'PLUS Claude Code', 'Cursor', 'GitHub Copilot'],
    projects: '12 high-signal projects across 4 tiers',
    careers: ['All Package 1 roles', 'AI Software Engineer', 'Full-Stack AI Developer'],
    salary: '$85K - $250K',
    popular: true,
    whyUpgrade: '85% of developers now use AI coding tools daily. Tier 4 is the difference between "I know AI" and "I build with AI."',
  },
  {
    name: 'Package 2',
    price: 300,
    tiers: 'Tiers 4-6',
    labels: 'CODE + DEPLOY + SHIP',
    tagline: 'From coding to launching AI products',
    bestFor: 'Developers with existing ML/coding knowledge',
    tools: ['Claude Code', 'Cursor', 'Copilot', 'Docker', 'SageMaker', 'MLflow', 'Lovable', 'Bolt.new', 'Replit'],
    projects: '9 high-signal projects across 3 tiers',
    careers: ['AI Developer', 'MLOps Engineer', 'AI Product Manager', 'Startup Founder'],
    salary: '$130K - $350K+',
    popular: false,
  },
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

  return (
    <section id="pricing" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className={`text-center mb-14 fade-up ${headerVisible ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-4 uppercase tracking-wider">
            Packages & Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
              Package
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Every package includes the full Top 1% engine: assessment, mentorship, proof-of-work, interview prep, and placement.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`relative group bg-white rounded-2xl border-2 p-6 sm:p-8 hover:shadow-xl transition-all duration-300 fade-up ${gridVisible ? 'visible' : ''} ${
                pkg.popular
                  ? 'border-brand-orange shadow-lg shadow-brand-orange/10 md:-translate-y-2'
                  : 'border-gray-100'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-brand-orange to-brand-coral text-white text-xs font-bold shadow-lg">
                  <Star size={12} fill="white" /> BEST VALUE
                </span>
              )}

              <h3 className="text-xl font-black text-gray-900">{pkg.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-black text-gray-900">${pkg.price}</span>
              </div>
              <p className="mt-1 text-sm font-bold text-brand-orange">{pkg.tiers}: {pkg.labels}</p>
              <p className="mt-2 text-sm text-gray-500 italic">"{pkg.tagline}"</p>

              <div className="mt-5 h-px bg-gray-100" />

              <div className="mt-5 space-y-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Best for</span>
                  <p className="text-sm text-gray-700 mt-0.5">{pkg.bestFor}</p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Tools</span>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {pkg.tools.map((t) => (
                      <span key={t} className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-gray-50 text-gray-600 border border-gray-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Projects</span>
                  <p className="text-sm text-gray-700 mt-0.5">{pkg.projects}</p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Career outcomes</span>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {pkg.careers.map((c) => (
                      <span key={c} className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-brand-orange/5 text-brand-orange border border-brand-orange/10">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Salary range</span>
                  <p className="text-lg font-black text-gray-900 mt-0.5">{pkg.salary}</p>
                </div>

                {pkg.whyUpgrade && (
                  <div className="p-3 rounded-xl bg-brand-orange/5 border border-brand-orange/10">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold text-brand-orange">Why upgrade: </span>
                      {pkg.whyUpgrade}
                    </p>
                  </div>
                )}
              </div>

              <a
                href={PAYMENT_URL}
                className={`mt-6 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all ${
                  pkg.popular
                    ? 'text-white bg-gradient-to-r from-brand-orange to-brand-coral hover:shadow-lg hover:shadow-brand-coral/25'
                    : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Enroll Now
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Post-enrollment flow */}
        <div className="mt-14 max-w-2xl mx-auto bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8">
          <h4 className="text-lg font-black text-gray-900 mb-4">What Happens After You Enroll:</h4>
          <ol className="space-y-3">
            {postEnrollSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-gray-600 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 pt-4 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              Still not sure which package?{' '}
              <a href={ASSESSMENT_URL} className="font-bold text-brand-orange hover:underline">
                Take the free assessment first →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
