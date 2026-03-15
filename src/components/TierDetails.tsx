import { useState, useCallback, useRef } from 'react';
import { ChevronDown, Briefcase, Code2, FolderGit2, Star, DollarSign, Target, Brain, Tag, Crosshair } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface TierData {
  num: number;
  title: string;
  gradient: string;
  color: string;
  why: string;
  marketMandate: string;
  roles: string[];
  salary: string;
  salaryNote: string;
  price: number;
  discountPrice: number;
  mindset: string;
  unicorns: string[];
  eliteStack: { name: string; highlight: boolean }[];
  portfolio: string[];
  highSignalPortfolio: string[];
  githubStars: string;
  githubNote: string;
}

const tierData: TierData[] = [
  {
    num: 1,
    title: 'AI Internship Launchpad',
    gradient: 'from-brand-orange to-amber-400',
    color: '#F97316',
    why: "The shift from Generation to Integration at the ground level. Companies don't need interns to write text; they need them to move from manual ops to rapid, automated integrations.",
    marketMandate: 'Foundational architecture, data orchestration, and first-principles ML fluency are non-negotiable for any serious AI career entry.',
    roles: ['AI Intern (Ops/Analyst)', 'Junior Automation Builder', 'AI Product Intern'],
    salary: '$50,000 - $85,000 / yr',
    salaryNote: 'High volume of competitive intern bids offering early-career stipends for rapid prototyping.',
    price: 299,
    discountPrice: 149,
    mindset: 'Problem Solving, Design Thinking, and an Entrepreneurial Mindset are applied here to bypass traditional coding roadblocks, ruthlessly accelerating the path from idea to functional prototype.',
    unicorns: ['OpenAI', 'Anthropic', 'Figure AI', 'Anduril'],
    eliteStack: [
      { name: 'Codex', highlight: true },
      { name: 'Python 3.12+', highlight: true },
      { name: 'PyTorch', highlight: true },
      { name: 'Scikit-learn', highlight: false },
      { name: 'Vector DBs', highlight: false },
      { name: 'Pandas / NumPy', highlight: false },
    ],
    portfolio: ['Automated CRM data-enrichment pipeline', 'Full-stack vibe-coded SaaS MVP with user authentication', 'Source-grounded internal research bot using local documents'],
    highSignalPortfolio: ['Foundation-Backtester: End-to-end ML model training and backtesting pipeline', 'Enterprise-RAG-Engine: Production-grade retrieval-augmented generation system', 'Med-Cleanse-Pipeline: Healthcare data cleaning and transformation framework'],
    githubStars: '100+',
    githubNote: '',
  },
  {
    num: 2,
    title: 'Agent Workflow Builder',
    gradient: 'from-brand-coral to-rose-400',
    color: '#F43F5E',
    why: 'The complete abandonment of single-prompt generation. The Integration Era demands multi-step agent orchestration where systems can use tools, query databases, and operate with memory.',
    marketMandate: 'Rapid iteration, product-market fit validation, and the ability to ship AI-powered prototypes at startup speed define this tier.',
    roles: ['Agent Workflow Junior', 'AI Automation Engineer', 'AI Solutions Intern'],
    salary: '$90,000 - $150,000 / yr',
    salaryNote: 'Surging hourly rates ($60-$100/hr) for bespoke workflow automation.',
    price: 299,
    discountPrice: 149,
    mindset: 'Problem Solving, Design Thinking, and an Entrepreneurial Mindset are applied to architecting stateful control workflows and designing autonomous error-recovery loops.',
    unicorns: ['Skild AI', 'Physical Intelligence', 'Zipline'],
    eliteStack: [
      { name: 'Cursor', highlight: true },
      { name: 'Bolt.new', highlight: true },
      { name: 'Lovable', highlight: true },
      { name: 'GitHub Copilot', highlight: false },
      { name: 'Vercel', highlight: false },
      { name: 'Supabase', highlight: false },
    ],
    portfolio: ['Multi-agent web scraper yielding structured JSON outputs', 'Autonomous market research agent with tool-calling APIs', 'Task-driven agent architecture featuring human-in-the-loop checkpoints'],
    highSignalPortfolio: ['Cognitive-Tutor-UI: Adaptive learning platform with AI-driven curriculum paths', 'Market-Intel-Dash: Real-time competitive intelligence dashboard with LLM analysis', 'Brief-Gen-SaaS: Automated creative brief generator for marketing teams'],
    githubStars: '250+',
    githubNote: '',
  },
  {
    num: 3,
    title: 'Mid-Career AI Productivity Operator',
    gradient: 'from-brand-magenta to-pink-400',
    color: '#D946EF',
    why: "Generating code isn't the only integration. The market desperately needs professionals who can integrate AI into legacy business processes, turning non-coders into AI-native operators.",
    marketMandate: 'Multi-agent systems orchestration, the "AI Orchestrator" role that designs, deploys, and governs autonomous agent networks across enterprise workflows.',
    roles: ['AI Productivity Lead', 'Automation Consultant', 'AI PM/BA (AI Workflows)'],
    salary: '$130,000 - $180,000 / yr',
    salaryNote: 'Consulting retainer fees of $1,500+ per engagement.',
    price: 299,
    discountPrice: 149,
    mindset: 'Problem Solving, Design Thinking, and an Entrepreneurial Mindset are applied directly to Workflow ROI, cost-reduction analysis, and the strategic translation of business logic into AI workflows.',
    unicorns: ['Genspark', 'Decagon', 'xAI'],
    eliteStack: [
      { name: 'OpenClaw', highlight: true },
      { name: 'LangGraph', highlight: true },
      { name: 'CrewAI', highlight: true },
      { name: 'OpenAI Agents SDK', highlight: false },
      { name: 'n8n', highlight: false },
      { name: 'Zapier AI', highlight: false },
    ],
    portfolio: ['End-to-end compliance summary automation engine', 'Research-to-slide pitch deck pipeline with source grounding', 'Automated CRM follow-up and multi-channel reporting workflow'],
    highSignalPortfolio: ['Auto-Researcher-Graph: Multi-agent research pipeline with LangGraph orchestration', 'PR-Review-Orchestrator: Automated code review system with multi-agent consensus', 'Supply-Chain-Triage: Intelligent supply chain anomaly detection and routing agent'],
    githubStars: '150+',
    githubNote: 'High-value documentation, SOPs, and architecture diagrams.',
  },
  {
    num: 4,
    title: 'Professional Agentic RAG Builder',
    gradient: 'from-brand-green to-emerald-400',
    color: '#22C55E',
    why: 'Foundation models are useless without context. The Integration Era demands the deep integration of proprietary enterprise data with LLMs to permanently kill hallucinations.',
    marketMandate: 'Strategic translation of AI capabilities into measurable business ROI. The bridge between technical teams and C-suite decision-makers.',
    roles: ['AI Solutions Engineer', 'Agentic AI Engineer', 'RAG Engineer', 'AI Architect (Associate)'],
    salary: '$150,000 - $220,000 / yr',
    salaryNote: 'Highly lucrative unicorn equity packages.',
    price: 499,
    discountPrice: 259,
    mindset: 'Problem Solving, Design Thinking, and an Entrepreneurial Mindset are applied to semantic search architecture, intelligent document chunking, and context window optimisation.',
    unicorns: ['OpenAI', 'Anthropic', 'Figure AI'],
    eliteStack: [
      { name: 'Claude Code', highlight: true },
      { name: 'Linear', highlight: true },
      { name: 'NotebookLM', highlight: true },
      { name: 'DeepEval', highlight: false },
      { name: 'Figma', highlight: false },
      { name: 'Notion AI', highlight: false },
    ],
    portfolio: ['Hybrid-search local RAG pipeline with custom embeddings', 'Domain-specific context retrieval engine for financial/legal data', 'Real-time vector database sync and orchestration service'],
    highSignalPortfolio: ['Clinical-AI-PRD: AI product requirements document for healthcare diagnostics', 'LLM-AB-Harness: A/B testing framework for LLM response quality evaluation', 'Syn-Data-GTM: Synthetic data generation pipeline for go-to-market analysis'],
    githubStars: '500+',
    githubNote: 'High-value documentation, SOPs, and architecture diagrams.',
  },
  {
    num: 5,
    title: 'MLOps & Production Engineer',
    gradient: 'from-brand-teal to-cyan-400',
    color: '#14B8A6',
    why: 'The ultimate integration shift: moving from local generation in Jupyter notebooks to scalable, resilient production environments. If you cannot measure it and scale it, you cannot deploy it.',
    marketMandate: 'Scalability, zero-downtime deployments, and production-grade observability. The engineers who keep AI systems alive at scale.',
    roles: ['MLOps Lead', 'Senior AI Engineer', 'Deployment Specialist'],
    salary: '$180,000 - $250,000+ / yr',
    salaryNote: 'Premium hourly rates ($150+/hr).',
    price: 499,
    discountPrice: 249,
    mindset: 'Problem Solving, Design Thinking, and an Entrepreneurial Mindset are applied to scalable cloud architecture, LLM observability, latency tracking, and zero-downtime deployments.',
    unicorns: ['Anduril', 'Skild AI', 'Zipline'],
    eliteStack: [
      { name: 'Codex & Cursor', highlight: true },
      { name: 'Docker', highlight: true },
      { name: 'Kubernetes', highlight: true },
      { name: 'MLflow', highlight: false },
      { name: 'AWS / Azure IaC', highlight: false },
      { name: 'Terraform', highlight: false },
    ],
    portfolio: ['Containerised LLM API wrapper featuring latency and cost monitoring', 'Automated CI/CD deployment pipeline for live agent updates', 'Distributed load-balancing architecture for high-volume inference'],
    highSignalPortfolio: ['Shadow-Deploy-Pipe: Shadow deployment pipeline with canary analysis and rollback', 'Drift-Catch-K8s: Model drift detection system running on Kubernetes', 'Token-Ops-Board: Real-time token usage and cost optimization dashboard'],
    githubStars: '1,000+',
    githubNote: 'Scalable architecture, robust deployment pipelines, and enterprise-grade reliability.',
  },
  {
    num: 6,
    title: 'Enterprise AI Architect & CAIO',
    gradient: 'from-brand-yellow to-amber-400',
    color: '#EAB308',
    why: 'The apex of the Integration Era. Governing the integration of multi-agent systems across entire global organisations. Serving as the Editor-in-Chief for the digital and human workforce.',
    marketMandate: 'Zero-to-one innovation at venture scale. The architects who design AI-native companies and govern multi-agent ecosystems across global organizations.',
    roles: ['Chief AI Officer (CAIO)', 'Principal AI Architect', 'AI Governance Lead'],
    salary: '$300,000 - $700,000+',
    salaryNote: 'Executive total comp packages.',
    price: 499,
    discountPrice: 249,
    mindset: 'Problem Solving, Design Thinking, and an Entrepreneurial Mindset are applied to enterprise-wide risk mitigation, regulatory compliance, and aligning AI capabilities with multi-million dollar business objectives.',
    unicorns: ['Decagon', 'xAI', 'Physical Intelligence', 'OpenAI'],
    eliteStack: [
      { name: 'Claude Code', highlight: true },
      { name: 'Cursor', highlight: true },
      { name: 'OpenClaw', highlight: true },
      { name: 'Codex', highlight: false },
      { name: 'DeepEval', highlight: false },
      { name: 'NeMo Guardrails', highlight: false },
    ],
    portfolio: ['Enterprise-grade evaluation and red-teaming framework', 'AI safety, bias mitigation, and compliance auditing dashboard', 'Multi-department agent orchestration governance system'],
    highSignalPortfolio: ['Legal-Negotiator-Agent: Autonomous contract negotiation agent with compliance guardrails', 'Robo-Foundation-API: Full-stack AI foundation model API with rate limiting and billing', 'Edge-Orchestrator: Distributed edge AI orchestration system for IoT networks'],
    githubStars: '2,500+',
    githubNote: 'Establishing industry-standard open-source contributions.',
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

function TierCard({ tier, index }: { tier: TierData; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const { ref, visible } = useInView();
  const discountPercent = Math.round((1 - tier.discountPrice / tier.price) * 100);

  return (
    <div ref={ref} className={`fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 80}ms` }}>
      <GlowCard className="rounded-2xl">
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-5 min-w-0">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
              >
                <span className="text-2xl font-black text-white">{tier.num}</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 truncate">{tier.title}</h3>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="text-base text-gray-400 line-through">${tier.price}</span>
                  <span className="text-xl font-black" style={{ color: tier.color }}>${tier.discountPrice}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-sm font-bold bg-green-100 text-green-700">
                    {discountPercent}% OFF
                  </span>
                </div>
              </div>
            </div>
            <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
              <ChevronDown size={22} className="text-gray-400" />
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="px-6 sm:px-8 pb-8 border-t border-gray-50 pt-6">
              <div className="mb-6 p-5 rounded-2xl border-2 border-brand-orange/20 bg-gradient-to-r from-brand-orange/5 via-amber-50/50 to-transparent">
                <div className="flex items-center gap-2.5 mb-3">
                  <Brain size={20} style={{ color: tier.color }} />
                  <span className="text-base font-black uppercase tracking-wider" style={{ color: tier.color }}>Core Mindset</span>
                </div>
                <p className="text-lg font-bold text-gray-900 leading-relaxed">{tier.mindset}</p>
              </div>

              <div className="mb-6 p-5 rounded-2xl border border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                <div className="flex items-center gap-2.5 mb-3">
                  <Crosshair size={20} style={{ color: tier.color }} />
                  <span className="text-sm font-black uppercase tracking-wider" style={{ color: tier.color }}>Market Mandate</span>
                </div>
                <p className="text-base font-medium text-gray-700 leading-relaxed">{tier.marketMandate}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <Brain size={20} style={{ color: tier.color }} />
                    <span className="text-sm font-bold uppercase tracking-wider text-gray-400">The "Why"</span>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed">{tier.why}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <Briefcase size={20} style={{ color: tier.color }} />
                    <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Target Roles</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tier.roles.map((role) => (
                      <span
                        key={role}
                        className="inline-block px-3 py-1.5 rounded-full text-sm font-medium border border-gray-100 text-gray-700 bg-gray-50"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <DollarSign size={20} style={{ color: tier.color }} />
                    <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Compensation</span>
                  </div>
                  <p className="text-xl font-black text-gray-900">{tier.salary}</p>
                  <p className="text-sm text-gray-500 mt-1.5">{tier.salaryNote}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <Tag size={20} style={{ color: tier.color }} />
                    <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Course Price</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg text-gray-400 line-through">${tier.price}</span>
                    <span className="text-3xl font-black" style={{ color: tier.color }}>${tier.discountPrice}</span>
                  </div>
                  <p className="text-sm text-green-600 font-semibold mt-1">
                    Available at {discountPercent}% discount
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <Target size={20} style={{ color: tier.color }} />
                    <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Target Unicorns</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tier.unicorns.map((u) => (
                      <span
                        key={u}
                        className="inline-block px-3.5 py-2 rounded-lg text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-100"
                      >
                        {u}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <Code2 size={20} style={{ color: tier.color }} />
                  <span className="text-sm font-black uppercase tracking-wider" style={{ color: tier.color }}>Elite Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tier.eliteStack.map((s) => (
                    <span
                      key={s.name}
                      className={`inline-block px-3.5 py-2.5 rounded-lg text-sm font-bold border-2 ${
                        s.highlight
                          ? 'text-white border-transparent shadow-lg'
                          : 'bg-white text-gray-700 border-gray-200'
                      }`}
                      style={s.highlight ? { backgroundColor: tier.color } : undefined}
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <FolderGit2 size={20} style={{ color: tier.color }} />
                  <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Portfolio</span>
                </div>
                <ol className="space-y-3">
                  {tier.portfolio.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-gray-600">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500 mt-0.5">
                        {i + 1}
                      </span>
                      {p}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <FolderGit2 size={20} style={{ color: tier.color }} />
                  <span className="text-sm font-black uppercase tracking-wider" style={{ color: tier.color }}>High-Signal Portfolio Projects</span>
                </div>
                <ol className="space-y-3">
                  {tier.highSignalPortfolio.map((p, i) => {
                    const [name, desc] = p.includes(': ') ? p.split(': ') : [p, ''];
                    return (
                      <li key={i} className="flex items-start gap-3 text-base">
                        <span
                          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white mt-0.5"
                          style={{ backgroundColor: tier.color }}
                        >
                          {i + 1}
                        </span>
                        <div>
                          <span className="font-bold text-gray-900">{name}</span>
                          {desc && <span className="text-gray-500"> - {desc}</span>}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div className="mt-6 flex items-center gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                <Star size={24} style={{ color: tier.color }} />
                <div>
                  <span className="text-3xl font-black text-gray-900">{tier.githubStars}</span>
                  <span className="text-base text-gray-500 ml-2">GitHub Stars Expected</span>
                  {tier.githubNote && (
                    <p className="text-sm text-gray-400 mt-0.5">{tier.githubNote}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlowCard>
    </div>
  );
}

export default function TierDetails() {
  const { ref: headerRef, visible: headerVisible } = useInView();

  return (
    <section id="tier-details" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className={`text-center mb-14 fade-up ${headerVisible ? 'visible' : ''}`}>
          <span className="inline-block px-5 py-2 rounded-full bg-brand-coral/10 text-brand-coral text-base font-semibold mb-5 uppercase tracking-wider">
            Deep Dive
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight">
            Explore Each{' '}
            <span className="bg-gradient-to-r from-brand-coral to-brand-orange bg-clip-text text-transparent">
              Tier
            </span>
          </h2>
          <p className="mt-5 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Tap any tier to see the full breakdown: roles, compensation, tech stack, portfolio expectations, and more.
          </p>
        </div>

        <div className="space-y-5">
          {tierData.map((tier, i) => (
            <TierCard key={tier.num} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
