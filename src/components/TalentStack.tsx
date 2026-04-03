import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const ENROLL_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdGGFBE1d_efs36OddsVDLpKwI_wIoJVdlB7f_KLUpUSIeQLw/viewform?usp=header';

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
    jobTarget: 'Junior ML Engineer',
    salary: '$65K–$95K',
    tools: ['PyTorch', 'TensorFlow/Keras', 'Scikit-learn'],
    portfolio: '3–5 GitHub repos',
    website: 'Live site, about page, 3 projects, first blog',
    youWillBuild: 'Image classifier, sentiment analysis model, ML benchmark report',
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
    jobTarget: 'LLM / RAG Engineer',
    salary: '$75K–$120K',
    tools: ['LangChain', 'Hugging Face', 'Pinecone/ChromaDB'],
    portfolio: '5–8 GitHub repos',
    website: 'LLM demos, embedded chatbot, RAG blog',
    youWillBuild: 'Enterprise chatbot, fine-tuned domain model, AI code review bot',
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
    jobTarget: 'AI Agent Developer',
    salary: '$70K–$110K',
    tools: ['n8n', 'OpenClaw', 'CrewAI'],
    portfolio: '8–12 GitHub repos',
    website: 'Live agent demo, automation case study, videos',
    youWillBuild: 'AI executive assistant, multi-agent research system, automated job pipeline',
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
    jobTarget: 'AI Software Engineer',
    salary: '$80K–$130K',
    tools: ['Claude Code', 'Cursor', 'GitHub Copilot'],
    portfolio: '10–15 GitHub repos',
    website: 'Published tools, download stats, "How I Built X" blog',
    youWillBuild: 'Full-stack web app, published developer tool, code review automation',
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
    jobTarget: 'MLOps Engineer',
    salary: '$85K–$140K',
    tools: ['Docker', 'SageMaker/Vertex', 'MLflow'],
    portfolio: '12–18 GitHub repos',
    website: 'Architecture diagrams, monitoring dashboards',
    youWillBuild: 'End-to-end ML pipeline, A/B testing platform, cost monitoring dashboard',
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
    jobTarget: 'AI Product Manager / Startup Founder',
    salary: '$90K–$150K+',
    tools: ['Lovable', 'Bolt.new', 'Replit'],
    portfolio: '15–20+ GitHub repos',
    website: 'Full portfolio, live demos, metrics. This IS the resume.',
    youWillBuild: 'AI SaaS with Stripe billing, product requirements doc + MVP, marketplace',
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
                        <div className="text-xs sm:text-sm font-black text-gray-900 leading-tight truncate">
                          → {tier.jobTarget}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile numbered buttons */}
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
            <p className="text-center text-base text-gray-400 mt-4">Select a program to see details.</p>
          )}
        </div>

        {/* Expanded detail panel */}
        <div className={`transition-all duration-500 ${activeTierData ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none h-0 overflow-hidden'}`}>
          {activeTierData && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {/* Program info */}
              <div className="rounded-xl border-2 p-5 relative overflow-hidden" style={{ borderColor: `${activeTierData.color}50`, background: `linear-gradient(135deg, ${activeTierData.color}06, white)` }}>
                <button onClick={() => setActiveTier(null)} className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                  <X size={14} className="text-gray-500" />
                </button>
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: activeTierData.color }}>
                  Program {activeTierData.num}: {activeTierData.label}
                </div>
                <div className="text-2xl font-black text-gray-900 mb-1">→ {activeTierData.jobTarget}</div>
                <p className="text-sm text-gray-500 mb-1">{activeTierData.title}</p>
                <p className="text-sm font-semibold" style={{ color: activeTierData.color }}>{activeTierData.salary}</p>
              </div>

              {/* Tools */}
              <div className="rounded-xl border-2 p-5" style={{ borderColor: `${activeTierData.color}30`, background: `linear-gradient(135deg, ${activeTierData.color}05, white)` }}>
                <div className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: activeTierData.color }}>
                  Key Tools
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeTierData.tools.map((t) => (
                    <span key={t} className="inline-block px-3 py-1.5 rounded-lg text-sm font-semibold text-white shadow-md" style={{ backgroundColor: activeTierData.color }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Portfolio */}
              <div className="rounded-xl border-2 p-5" style={{ borderColor: `${activeTierData.color}30`, background: `linear-gradient(135deg, ${activeTierData.color}05, white)` }}>
                <div className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: activeTierData.color }}>
                  Portfolio Built
                </div>
                <div className="text-lg font-black text-gray-900 mb-1">{activeTierData.portfolio}</div>
                <p className="text-sm text-gray-600">{activeTierData.website}</p>
              </div>

              {/* Salary */}
              <div className="rounded-xl border-2 p-5 flex items-center" style={{ borderColor: `${activeTierData.color}30`, background: `linear-gradient(135deg, ${activeTierData.color}05, white)` }}>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: activeTierData.color }}>
                    Salary Range
                  </div>
                  <div className="text-2xl font-black text-gray-900">{activeTierData.salary}</div>
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-xl border-2 p-5 flex flex-col items-center justify-center gap-3" style={{ borderColor: `${activeTierData.color}50`, background: `linear-gradient(135deg, ${activeTierData.color}08, white)` }}>
                <a
                  href={ENROLL_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-4 py-2.5 rounded-full text-white text-base font-bold transition-all hover:shadow-lg hover:scale-[1.03]"
                  style={{ backgroundColor: activeTierData.color }}
                >
                  Enroll Now →
                </a>
                <p className="text-xs text-gray-400 text-center">Fill the enrollment form & receive your secure payment link</p>
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
    <section id="talent-stack" className="py-20 bg-gradient-to-b from-rose-50/40 via-orange-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className={`text-center mb-1 fade-up ${headerVisible ? 'visible' : ''}`}>
          <span className="inline-block px-5 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-base font-semibold mb-4 uppercase tracking-wider">
            The Uplift AI Career Accelerator
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
            6 AI role programs.{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
              Each one is a job.
            </span>
          </h2>
          <p className="mt-4 mb-2 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every program maps to a specific AI role. We train you for it, build your portfolio, and place you directly.
          </p>
          <p className="text-sm font-bold text-gray-400 tracking-widest mb-6">
            ML Engineer → LLM Engineer → Agent Developer → Software Engineer → MLOps Engineer → Product Manager
          </p>
        </div>

        <StaircaseSection />

        <div className="mt-10 text-center space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-brand-orange to-brand-coral hover:shadow-lg hover:shadow-brand-coral/25 transition-all"
            >
              View Packages & Pricing
              <ArrowRight size={16} />
            </Link>
            <a
              href={ENROLL_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-brand-orange/30 hover:shadow-md transition-all"
            >
              Enroll Now & Pay
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
