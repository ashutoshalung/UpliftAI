import { useCallback, useRef } from 'react';
import { BookOpen, Users, Stethoscope, FileSearch, GitBranch, Globe } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: BookOpen,
    bg: 'bg-gradient-to-br from-brand-magenta to-pink-400',
    title: 'Micro-Classes',
    desc: '30-90 min outcome-based sessions. Fast, role-aligned learning designed to close specific gaps.',
  },
  {
    icon: Users,
    bg: 'bg-gradient-to-br from-brand-coral to-rose-400',
    title: 'Mentor Circles',
    desc: 'Group mentoring with real practitioners who help you make decisions and level up quickly.',
  },
  {
    icon: Stethoscope,
    bg: 'bg-gradient-to-br from-brand-orange to-amber-400',
    title: 'Specialist Clinics',
    desc: 'Deep dives on RAG, evaluation, agents, product, platforms, automation, and tool stacks.',
  },
  {
    icon: FileSearch,
    bg: 'bg-gradient-to-br from-cyan-500 to-teal-400',
    title: 'Portfolio Reviews',
    desc: 'We pressure-test your proof-of-work and sharpen readiness for real hiring bars.',
  },
  {
    icon: GitBranch,
    bg: 'bg-gradient-to-br from-brand-green to-emerald-400',
    title: 'Project Tracks',
    desc: 'Applied tracks to build and validate capability through real execution.',
  },
  {
    icon: Globe,
    bg: 'bg-gradient-to-br from-sky-500 to-blue-400',
    title: 'Global Opportunities',
    desc: 'Internship and career support across Asia, GCC, Australia, US/Canada.',
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

export default function Features() {
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: gridRef, visible: gridVisible } = useInView();

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className={`text-center mb-14 fade-up ${headerVisible ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-4 uppercase tracking-wider">
            What You Get
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Experience Inside <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">Uplift</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Mentor-led capability building, not just content. Real practitioners, real standards.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <GlowCard key={f.title} className={`rounded-2xl fade-up ${gridVisible ? 'visible' : ''}`}>
              <div
                className="group bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-xl hover:shadow-gray-100/80 hover:-translate-y-1 hover:border-gray-200 transition-all duration-300 h-full"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`${f.bg} w-11 h-11 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <f.icon size={20} className="text-white" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-gray-500 leading-relaxed text-sm">{f.desc}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
