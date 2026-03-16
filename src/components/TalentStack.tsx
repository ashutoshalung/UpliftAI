import { useState } from 'react';
import { X } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ASSESSMENT_URL = 'https://equip.co/assessments/nrzee/';

const tiers = [
  {
    num: 1,
    label: 'LEARN',
    title: 'AI & ML Foundations',
    oneLiner: 'Master the science behind AI',
    color: '#F97316',
    solidBg: '#FFF7ED',
    solidBorder: '#FDBA74',
    gradient: 'from-orange-500 to-amber-400',
    salary: '$85K-$145K',
    price: 120,
    tools: ['PyTorch', 'TensorFlow/Keras', 'Scikit-learn'],
    group: 'foundation',
    portfolio: '2-3 GitHub repos',
    website: 'Basic portfolio page',
  },
  {
    num: 2,
    label: 'BUILD',
    title: 'LLM Applications & RAG',
    oneLiner: 'Build production LLM apps',
    color: '#F43F5E',
    solidBg: '#FFF1F2',
    solidBorder: '#FDA4AF',
    gradient: 'from-rose-500 to-rose-400',
    salary: '$130K-$250K',
    price: 120,
    tools: ['LangChain', 'Hugging Face', 'Pinecone/ChromaDB'],
    group: 'foundation',
    portfolio: '5-6 GitHub repos',
    website: 'Project showcase site',
  },
  {
    num: 3,
    label: 'AUTOMATE',
    title: 'AI Agents & Automation',
    oneLiner: 'Make AI systems autonomous',
    color: '#D946EF',
    solidBg: '#FDF4FF',
    solidBorder: '#E879F9',
    gradient: 'from-fuchsia-500 to-pink-400',
    salary: '$110K-$280K',
    price: 120,
    tools: ['n8n', 'OpenClaw', 'CrewAI'],
    group: 'advanced',
    portfolio: '8-12 GitHub repos',
    website: 'Full portfolio with case studies',
  },
  {
    num: 4,
    label: 'CODE',
    title: 'AI-Powered Development',
    oneLiner: 'Code 10x faster with AI',
    color: '#22C55E',
    solidBg: '#F0FDF4',
    solidBorder: '#86EFAC',
    gradient: 'from-green-500 to-emerald-400',
    salary: '$130K-$250K',
    price: 150,
    tools: ['Claude Code', 'Cursor', 'GitHub Copilot'],
    group: 'advanced',
    portfolio: '12-15 GitHub repos',
    website: 'Developer portfolio with live demos',
  },
  {
    num: 5,
    label: 'DEPLOY',
    title: 'MLOps & Deployment',
    oneLiner: 'Ship AI to production at scale',
    color: '#14B8A6',
    solidBg: '#F0FDFA',
    solidBorder: '#5EEAD4',
    gradient: 'from-teal-500 to-cyan-400',
    salary: '$145K-$320K',
    price: 150,
    tools: ['Docker', 'SageMaker/Vertex', 'MLflow'],
    group: 'expert',
    portfolio: '15-18 GitHub repos',
    website: 'Production app showcase',
  },
  {
    num: 6,
    label: 'SHIP',
    title: 'AI Product Builder',
    oneLiner: 'Build, launch, and monetize',
    color: '#EAB308',
    solidBg: '#FEFCE8',
    solidBorder: '#FDE047',
    gradient: 'from-yellow-500 to-amber-400',
    salary: '$150K-$350K+',
    price: 150,
    tools: ['Lovable', 'Bolt.new', 'Replit'],
    group: 'expert',
    portfolio: '20+ GitHub repos',
    website: 'Full-stack product portfolio',
  },
];

const STEP_W = 10;
const STEP_H = 13;
const SLAB_DEPTH = 3;
const STAIRCASE_TRANSLATE_Y = '-18%';

function StaircaseSection() {
  const { ref, visible } = useInView();
  const [activeTier, setActiveTier] = useState<number | null>(null);
  const activeTierData = activeTier !== null ? tiers.find(t => t.num === activeTier) : null;

  return (
    <div ref={ref} className="relative">
      <div className="flex flex-col gap-8">
        <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden p-3 sm:p-4 md:p-5">
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative" style={{ paddingBottom: `${STEP_H * 6 + SLAB_DEPTH - 20}%` }}>

            <div className="absolute left-0 right-0 bottom-0" style={{ top: '0%', transform: `translateY(${STAIRCASE_TRANSLATE_Y})` }}>
              {tiers.map((tier, i) => {
                const isActive = activeTier === tier.num;
                const leftPct = i * STEP_W;
                const bottomPct = i * STEP_H;

                return (
                  <button
                    key={tier.num}
                    onClick={() => setActiveTier(isActive ? null : tier.num)}
                    className={`group absolute transition-all duration-300 focus:outline-none fade-up ${visible ? 'visible' : ''}`}
                    style={{
                      left: `${leftPct}%`,
                      bottom: `${bottomPct}%`,
                      width: `${100 - leftPct}%`,
                      height: `${STEP_H + SLAB_DEPTH}%`,
                      transitionDelay: `${i * 80}ms`,
                      zIndex: isActive ? 20 : i + 1,
                    }}
                  >
                    <div className="relative w-full h-full">
                      <div
                        className="absolute inset-0 rounded-t-md transition-all duration-300"
                        style={{
                          background: isActive
                            ? `linear-gradient(180deg, ${tier.color}55 0%, ${tier.solidBg} 100%)`
                            : tier.solidBg,
                          borderTop: `3px solid ${isActive ? tier.color : tier.solidBorder}`,
                          borderLeft: `3px solid ${isActive ? tier.color : tier.solidBorder}`,
                          borderRight: i === 5 ? `3px solid ${isActive ? tier.color : tier.solidBorder}` : 'none',
                          borderBottom: i === 0 ? `2px solid ${isActive ? tier.color : tier.solidBorder}` : 'none',
                          boxShadow: isActive
                            ? `0 -6px 28px ${tier.color}30, 0 2px 8px ${tier.color}15`
                            : `0 1px 4px rgba(0,0,0,0.04)`,
                        }}
                      />

                      <div
                        className="absolute rounded-t-md transition-all duration-300"
                        style={{
                          left: 0, top: 0,
                          width: `${STEP_W / (100 - leftPct) * 100}%`,
                          maxWidth: '100px', height: '100%',
                          background: isActive
                            ? `linear-gradient(180deg, ${tier.color}70 0%, ${tier.color}40 100%)`
                            : `linear-gradient(180deg, ${tier.color}35 0%, ${tier.color}18 100%)`,
                        }}
                      />

                      <div className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 sm:gap-3 pointer-events-none" style={{ maxWidth: '100px' }}>
                        <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br ${tier.gradient} flex items-center justify-center shadow-lg flex-shrink-0 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                          <span className="text-base sm:text-lg font-black text-white">{tier.num}</span>
                        </div>
                      </div>

                      <div className="absolute top-1/2 -translate-y-1/2 pointer-events-none hidden sm:block" style={{ left: '100px', right: '12px' }}>
                        <div className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-none mb-0.5" style={{ color: tier.color }}>
                          {tier.label}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-gray-600 leading-tight truncate">
                          {tier.title}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 sm:hidden">
            {tiers.map((tier) => (
              <button
                key={tier.num}
                onClick={() => setActiveTier(activeTier === tier.num ? null : tier.num)}
                className={`w-9 h-9 rounded-lg bg-gradient-to-br ${tier.gradient} flex items-center justify-center shadow-md transition-all duration-200 ${activeTier === tier.num ? 'scale-110 ring-2 ring-gray-300' : ''}`}
              >
                <span className="text-sm font-black text-white">{tier.num}</span>
              </button>
            ))}
          </div>

          {!activeTierData && (
            <p className="text-center text-base text-gray-400 mt-4">Select a program to see tools, salary, and portfolio details.</p>
          )}
        </div>

        <div className={`transition-all duration-500 ${activeTierData ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none h-0 overflow-hidden'}`}>
          {activeTierData && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              <div className="rounded-xl border-2 p-5 relative overflow-hidden" style={{ borderColor: `${activeTierData.color}50`, background: `linear-gradient(135deg, ${activeTierData.color}06, white)` }}>
                <button onClick={() => setActiveTier(null)} className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                  <X size={14} className="text-gray-500" />
                </button>
                <div className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: activeTierData.color }}>
                  Program {activeTierData.num} — {activeTierData.label}
                </div>
                <div className="text-xl font-black text-gray-900 mb-1">{activeTierData.title}</div>
                <p className="text-base text-gray-600">{activeTierData.oneLiner}</p>
              </div>

              <div className="rounded-xl border-2 p-5" style={{ borderColor: `${activeTierData.color}30`, background: `linear-gradient(135deg, ${activeTierData.color}05, white)` }}>
                <div className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: activeTierData.color }}>
                  Key Tools
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeTierData.tools.map((t) => (
                    <span key={t} className="inline-block px-3 py-1.5 rounded-lg text-base font-semibold text-white shadow-md" style={{ backgroundColor: activeTierData.color }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border-2 p-5" style={{ borderColor: `${activeTierData.color}30`, background: `linear-gradient(135deg, ${activeTierData.color}05, white)` }}>
                <div className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: activeTierData.color }}>
                  Portfolio Built
                </div>
                <div className="text-lg font-black text-gray-900 mb-1">{activeTierData.portfolio}</div>
                <p className="text-base text-gray-600">{activeTierData.website}</p>
              </div>

              <div className="rounded-xl border-2 p-5 flex items-center" style={{ borderColor: `${activeTierData.color}30`, background: `linear-gradient(135deg, ${activeTierData.color}05, white)` }}>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: activeTierData.color }}>
                    Salary Range
                  </div>
                  <div className="text-2xl font-black text-gray-900">{activeTierData.salary}</div>
                </div>
              </div>

              <div className="rounded-xl border-2 p-5 flex flex-col items-center justify-center gap-3" style={{ borderColor: `${activeTierData.color}50`, background: `linear-gradient(135deg, ${activeTierData.color}08, white)` }}>
                <div className="text-center">
                  <div className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: activeTierData.color }}>
                    Program Price
                  </div>
                  <div className="text-4xl font-black text-gray-900">${activeTierData.price}</div>
                </div>
                <a
                  href="#payment"
                  className="w-full text-center px-4 py-2.5 rounded-full text-white text-base font-bold transition-all hover:shadow-lg hover:scale-[1.03]"
                  style={{ backgroundColor: activeTierData.color }}
                >
                  Pay & Enroll →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TalentStack() {
  const { ref: headerRef, visible: headerVisible } = useInView();

  return (
    <section id="talent-stack" className="py-16 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className={`text-center mb-1 fade-up ${headerVisible ? 'visible' : ''}`}>
          <span className="inline-block px-5 py-2 rounded-full bg-brand-green/10 text-brand-green text-base font-semibold mb-4 uppercase tracking-wider">
            The 6-Program Ascent
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            From AI Curious to{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
              AI Employed
            </span>
          </h2>
          <p className="mt-3 mb-2 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Six programs. Each builds on the last. You start where you are and ascend to where the market actually pays.
          </p>
          <p className="text-base font-bold text-gray-400 tracking-widest mb-6">
            LEARN → BUILD → AUTOMATE → CODE → DEPLOY → SHIP
          </p>
        </div>

        <StaircaseSection />

        <div className="mt-10 text-center space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ASSESSMENT_URL}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta hover:shadow-xl hover:shadow-brand-coral/25 transition-all duration-300 hover:scale-[1.03]"
            >
              Not sure? Take the AI Readiness Assessment →
            </a>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-brand-orange/30 hover:shadow-md transition-all duration-300"
            >
              Know your program? Pay & Enroll →
            </button>
          </div>
          <a href="/accelerator" className="inline-flex items-center gap-2 text-brand-orange font-bold text-base hover:underline">
            View Full Program Details →
          </a>
        </div>
      </div>
    </section>
  );
}
