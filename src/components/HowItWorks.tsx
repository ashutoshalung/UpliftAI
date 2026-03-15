import { useCallback, useRef } from 'react';
import { ClipboardCheck, Map, Wrench, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    num: '01',
    icon: ClipboardCheck,
    title: 'Assess',
    subtitle: 'Know your baseline',
    desc: 'We start with an assessment to understand your current skills, role fit, and readiness level. You get a clear baseline + direction.',
    color: 'from-brand-magenta to-pink-400',
    hex: '#D946EF',
  },
  {
    num: '02',
    icon: Map,
    title: 'Gap-Map',
    subtitle: "Identify what's missing",
    desc: 'We map the exact skills, tools, workflows, and proof you need for your target role. You get a role-based action plan.',
    color: 'from-brand-coral to-rose-400',
    hex: '#F43F5E',
  },
  {
    num: '03',
    icon: Wrench,
    title: 'Build',
    subtitle: 'Close gaps fast',
    desc: 'Follow targeted micro-learning and get mentor + specialist support to build real capability through execution.',
    color: 'from-brand-orange to-amber-400',
    hex: '#F97316',
  },
  {
    num: '04',
    icon: CheckCircle,
    title: 'Validate',
    subtitle: 'Prove you can contribute',
    desc: 'Produce proof-of-work and generate readiness signals aligned with real teams. Get validated capability + matching support.',
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

export default function HowItWorks() {
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: gridRef, visible: gridVisible } = useInView();

  return (
    <section id="how-it-works" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className={`text-center mb-14 fade-up ${headerVisible ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-sm font-semibold mb-4 uppercase tracking-wider">
            The Uplift System
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            How <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">Uplift</span> Works
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            A structured 4-step pathway from interest to real capability + proof-of-work + readiness
          </p>
        </div>

        <div ref={gridRef} className="relative max-w-5xl mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <GlowCard key={step.num} className={`rounded-3xl fade-up ${gridVisible ? 'visible' : ''}`}>
                <div
                  className="group relative h-full"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="absolute -top-3 -left-3 z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} shadow-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <span className="text-xl font-black text-white">{step.num}</span>
                    </div>
                  </div>

                  <div className="relative bg-white border-2 border-gray-100 rounded-3xl p-7 pt-9 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-100/50 transition-all duration-300 h-full hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${step.hex}10` }}>
                      <step.icon size={24} style={{ color: step.hex }} />
                    </div>

                    <h3 className="text-xl font-black text-gray-900 mb-1">{step.title}</h3>
                    <p className={`text-sm font-bold mb-3 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                      {step.subtitle}
                    </p>
                    <div className={`h-1 w-14 rounded-full bg-gradient-to-r ${step.color} mb-3`} />
                    <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
