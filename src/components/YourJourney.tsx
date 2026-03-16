import { useCallback, useRef } from 'react';
import { ClipboardCheck, Package, UserPlus, Wrench, Briefcase } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ASSESSMENT_URL = 'https://equip.co/assessments/nrzee/';

const steps = [
  {
    num: '01',
    icon: ClipboardCheck,
    title: 'Find Your Program',
    time: '30 min',
    desc: 'Take our AI Job Readiness Assessment. In 30 minutes, we map your skills, identify gaps, and tell you exactly which program to start at. You get a personalised readiness report.',
    color: 'from-brand-magenta to-pink-400',
    hex: '#D946EF',
  },
  {
    num: '02',
    icon: Package,
    title: 'Choose Your Package',
    time: 'Same day',
    desc: 'Pick from 3 packages starting at $300. Each maps to specific programs and career outcomes. We recommend the best fit based on your assessment.',
    color: 'from-brand-coral to-rose-400',
    hex: '#F43F5E',
  },
  {
    num: '03',
    icon: UserPlus,
    title: 'Enroll & Join',
    time: '24 hrs',
    desc: 'Complete payment, fill a quick onboarding form, and get full Circle community access within 24 hours. Your cohort starts 2 weeks after enrollment.',
    color: 'from-brand-orange to-amber-400',
    hex: '#F97316',
  },
  {
    num: '04',
    icon: Wrench,
    title: 'Build Real Projects',
    time: '2+ weeks per program',
    desc: 'Attend micro-classes, work with your mentor, and build proof-of-work every program. Your GitHub portfolio and personal website grow with each project you ship.',
    color: 'from-brand-green to-emerald-400',
    hex: '#22C55E',
  },
  {
    num: '05',
    icon: Briefcase,
    title: 'Get Placed',
    time: 'Ongoing',
    desc: 'Interview training, mock interviews, salary negotiation. Then: personalised referral mapping into internships and roles at top AI companies.',
    color: 'from-brand-yellow to-lime-400',
    hex: '#EAB308',
  },
];

function GlowCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouse = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  }, []);
  return (
    <div ref={ref} onMouseMove={handleMouse} className={`glow-card ${className}`}>
      {children}
    </div>
  );
}

export default function YourJourney() {
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: gridRef, visible: gridVisible } = useInView();

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-amber-50/80 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className={`text-center mb-14 fade-up ${headerVisible ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-sm font-semibold mb-4 uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Five Steps. From Where You Are{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
              to Where You Want to Be.
            </span>
          </h2>
        </div>

        <div ref={gridRef} className="space-y-4">
          {steps.map((step, index) => (
            <GlowCard key={step.num} className={`rounded-2xl fade-up ${gridVisible ? 'visible' : ''}`}>
              <div
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-300 flex flex-col sm:flex-row items-start gap-5"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-lg font-black text-white">{step.num}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-black text-gray-900">{step.title}</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-500">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed">{step.desc}</p>
                </div>

                <div className="flex-shrink-0 hidden sm:flex items-center justify-center w-12 h-12 rounded-xl" style={{ backgroundColor: `${step.hex}10` }}>
                  <step.icon size={24} style={{ color: step.hex }} />
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg sm:text-xl text-gray-600 mb-4">
            It starts with Step 1 — and <span className="font-bold text-gray-800">Step 1 is free.</span>
          </p>
          <a
            href={ASSESSMENT_URL}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta hover:shadow-xl hover:shadow-brand-coral/25 transition-all duration-300 hover:scale-[1.03]"
          >
            Take the AI Readiness Assessment →
          </a>
        </div>
      </div>
    </section>
  );
}
