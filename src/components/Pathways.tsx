import { useCallback, useRef } from 'react';
import { ArrowRight, Send, Users, Building2, Briefcase } from 'lucide-react';

const pathways = [
  {
    popular: true,
    icon: Send,
    iconBg: 'bg-gradient-to-br from-brand-magenta to-pink-400',
    title: 'Early Entrants',
    subtitle: 'Students & Career Switchers',
    subtitleColor: 'text-brand-magenta',
    desc: 'Enter the Uplift AI Career Accelerator. Map your position on the 6-Program Ascent, build proof-of-work, and access referrals to internships at top AI firms.',
    features: ['AI Readiness Report', 'Gap Analysis + Action Plan', 'Mentor-led guidance', 'Portfolio support'],
    cta: 'Join As Student',
    ctaGradient: 'from-brand-magenta via-brand-coral to-brand-orange',
    href: 'https://community.upliftai.pro/join?invitation_token=f428b930d629d809a0145adaa77f482ff6bc4bde-afeaad75-1e2b-473a-985d-9dd3ef56aaa7',
  },
  {
    icon: Briefcase,
    iconBg: 'bg-gradient-to-br from-brand-orange to-amber-400',
    title: 'Professionals',
    subtitle: 'Mid-Career & Senior Leaders',
    subtitleColor: 'text-brand-orange',
    desc: 'Join the Career Accelerator to advance through the 6-Program Ascent. Get role-based clarity, tailored pathways, and referrals for senior and founder-level placements.',
    features: ['Role-based assessment', 'Tailored learning pathway', 'Applied tracks for proof', 'Career positioning'],
    cta: 'Join As Working Professional',
    ctaGradient: 'from-brand-orange to-amber-500',
    href: 'https://community.upliftai.pro/join?invitation_token=461bd3ebd35100b2777116b09525a6e4bef6e486-c3f6dde4-cc36-4904-ab4e-eededf878cc4',
  },
  {
    icon: Users,
    iconBg: 'bg-gradient-to-br from-brand-coral to-rose-400',
    title: 'Mentors & Specialists',
    subtitle: 'Coaches & Domain Experts',
    subtitleColor: 'text-brand-coral',
    desc: 'Mentor in the Career Accelerator. Lead circles and clinics, supervise projects, and shape the next generation of AI talent through the 6-Program Ascent.',
    features: ['Mentor circles', 'Specialist clinics', 'Project supervision', 'Community impact'],
    cta: 'Join As Mentor',
    ctaGradient: 'from-brand-coral to-rose-500',
    href: 'https://community.upliftai.pro/join?invitation_token=08955cdf297ff35f3c107aeb41d56505c24d0949-cb66c74c-d503-41bc-92fd-8a055909c622',
  },
  {
    icon: Building2,
    iconBg: 'bg-gradient-to-br from-brand-yellow to-lime-400',
    title: 'Companies',
    subtitle: 'Startups & Enterprises',
    subtitleColor: 'text-brand-green',
    desc: 'Partner with the Career Accelerator. Access validated talent trained through the 6-Program Ascent for roles across the Integration Era.',
    features: ['Role requirement mapping', 'Validated talent pipeline', 'Tool-stack alignment', 'Hiring support'],
    cta: 'Partner With Us',
    ctaGradient: 'from-brand-yellow via-lime-400 to-brand-green',
    href: 'https://community.upliftai.pro/join?invitation_token=db45694a19573c9df693618139d863fd67c72db3-2ad0e7c2-c82b-40a6-9539-777da1062849',
  },
];

export default function Pathways() {
  return (
    <section id="pathways" className="py-24 bg-gradient-to-b from-white via-rose-50/30 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-lg font-semibold mb-4">
            Choose Your Entry Point
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Start Your <span className="bg-gradient-to-r from-brand-coral to-brand-magenta bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Whether you're breaking in, re-tooling, or building the next generation of AI talent
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pathways.map((p) => (
            <div
              key={p.title}
              className={`relative group bg-white rounded-2xl border p-6 sm:p-8 hover:shadow-xl transition-all duration-300 ${
                p.popular ? 'border-brand-magenta/30 shadow-lg shadow-brand-magenta/5' : 'border-gray-100'
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-brand-magenta to-brand-coral text-white text-xs font-bold shadow-lg">
                  <span className="text-amber-200">&#10024;</span> Most Popular
                </span>
              )}

              <div className={`${p.iconBg} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg`}>
                <p.icon size={22} className="text-white" />
              </div>

              <h3 className="font-display mt-5 text-2xl font-bold text-gray-900">{p.title}</h3>
              <p className={`text-sm font-semibold ${p.subtitleColor} mt-1`}>{p.subtitle}</p>
              <div className="mt-2 h-px bg-gradient-to-r from-gray-100 to-transparent" />

              <p className="mt-3 text-gray-500 leading-relaxed">{p.desc}</p>

              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={p.href || '#cta'}
                target={p.href ? '_blank' : undefined}
                rel={p.href ? 'noopener noreferrer' : undefined}
                className={`mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r ${p.ctaGradient} hover:shadow-lg transition-all group`}
              >
                {p.cta}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}