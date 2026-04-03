import { useState, useCallback, useRef } from 'react';
import { ChevronDown, Briefcase, Code2, FolderGit2, Star, Globe, Target, Brain } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface TierData {
  num: number;
  label: string;
  title: string;
  gradient: string;
  color: string;
  stairLabel: string;
  whoShouldTake: string[];
  toolStack: { name: string; desc: string; highlight: boolean }[];
  alsoCovered: string;
  concepts: string;
  projects: { name: string; desc: string }[];
  roles: { title: string; salary: string }[];
  targetCompanies: string[];
  github: string;
  website: string;
}

const tierData: TierData[] = [
  {
    num: 1,
    label: 'LEARN',
    title: 'AI & ML Foundations',
    gradient: 'from-brand-orange to-amber-400',
    color: '#F97316',
    stairLabel: 'Understand the science behind AI.',
    whoShouldTake: [
      'Complete beginners entering AI/ML',
      'Data analysts transitioning to ML engineering',
      'Software developers adding ML to their skill set',
      'CS/engineering/quantitative students',
    ],
    toolStack: [
      { name: 'PyTorch', desc: '#1 ML/DL framework. Used by Meta, Tesla, OpenAI, and top research labs.', highlight: true },
      { name: 'TensorFlow / Keras', desc: "Google's ML framework. Most deployed in production worldwide.", highlight: true },
      { name: 'Scikit-learn', desc: 'The foundational library for classical ML. On every ML job posting.', highlight: true },
    ],
    alsoCovered: 'ChatGPT, Claude, Google Gemini (prompt engineering), Google Colab, Jupyter Notebooks, OpenCV, NumPy, Pandas.',
    concepts: 'Machine Learning (supervised, unsupervised, reinforcement), Deep Learning (neural networks, CNNs, transformers), NLP & Computer Vision.',
    projects: [
      { name: 'Image Classification Model', desc: 'Build a CNN using PyTorch that classifies images (e.g., medical X-rays, product defects). Train, evaluate, deploy as API.' },
      { name: 'Sentiment Analysis & NLP Pipeline', desc: 'Build an NLP pipeline using Scikit-learn and TensorFlow that analyzes customer reviews and extracts themes.' },
      { name: 'Multi-Model AI Benchmark Report', desc: 'Compare ChatGPT, Claude, and Gemini across 20 prompts with structured analysis of accuracy, reasoning, speed, cost.' },
    ],
    roles: [
      { title: 'Junior ML Engineer', salary: '$65K - $95K' },
      { title: 'Data Scientist (Entry)', salary: '$60K - $90K' },
      { title: 'AI Research Assistant', salary: '$55K - $80K' },
      { title: 'Computer Vision Engineer (Entry)', salary: '$70K - $100K' },
    ],
    targetCompanies: ['Google (DeepMind)', 'Meta (FAIR)', 'Microsoft', 'Amazon (AWS AI)', 'Apple', 'NVIDIA', 'OpenAI', 'Anthropic'],
    github: '3-5 well-documented repos | 5-20 stars on best project | Jupyter notebooks with explanations',
    website: 'Live site (Lovable/Bolt.new) with about page, skills, 3 project showcases, first blog post',
  },
  {
    num: 2,
    label: 'BUILD',
    title: 'LLM Applications & RAG',
    gradient: 'from-brand-coral to-rose-400',
    color: '#F43F5E',
    stairLabel: 'Build applications on top of Large Language Models.',
    whoShouldTake: [
      'Developers who completed Program 1 or have ML foundations',
      'Backend engineers wanting to build LLM-powered products',
      'Anyone targeting the #1 hiring need in 2026: production LLM applications',
    ],
    toolStack: [
      { name: 'LangChain', desc: 'Dominant LLM application framework (85K+ GitHub stars). On every LLM engineer job posting.', highlight: true },
      { name: 'Hugging Face', desc: 'Open-source AI hub with 500K+ models. Fine-tune, deploy, evaluate.', highlight: true },
      { name: 'Pinecone / ChromaDB', desc: 'Leading vector databases for semantic search and RAG pipelines.', highlight: true },
    ],
    alsoCovered: 'LLM app architecture (chains, agents, tools, memory), fine-tuning (LoRA/QLoRA), evaluation (hallucination detection, RAGAS).',
    concepts: 'RAG pipeline design (chunking, embeddings, retrieval, hybrid search), vector database operations, production LLM architecture.',
    projects: [
      { name: 'Enterprise RAG Chatbot', desc: 'Production-ready chatbot ingesting company docs (PDFs, Confluence, Slack) with citations and confidence scores.' },
      { name: 'Fine-Tuned Domain Expert Model', desc: 'Fine-tune an open-source model on legal/medical/finance, benchmark vs GPT-4/Claude, deploy with REST API.' },
      { name: 'AI-Powered Code Review Tool', desc: 'LangChain app that reviews PRs, flags bugs, generates docs — deployed as a GitHub Action.' },
    ],
    roles: [
      { title: 'LLM Engineer', salary: '$75K - $120K' },
      { title: 'RAG Engineer', salary: '$70K - $110K' },
      { title: 'AI Application Developer', salary: '$70K - $105K' },
      { title: 'NLP Engineer', salary: '$75K - $115K' },
    ],
    targetCompanies: ['OpenAI', 'Anthropic', 'Cohere', 'Mistral', 'Perplexity', 'Google', 'Microsoft', 'Salesforce', 'Databricks', 'Pinecone'],
    github: '5-8 repos | 20-100 stars | Published Hugging Face model or dataset',
    website: 'LLM project demos, embedded chatbot or RAG search, technical blog on RAG architecture',
  },
  {
    num: 3,
    label: 'AUTOMATE',
    title: 'AI Agents & Automation',
    gradient: 'from-brand-magenta to-pink-400',
    color: '#D946EF',
    stairLabel: 'Make AI systems autonomous. The #1 demand skill in 2026.',
    whoShouldTake: [
      'Developers who want to build autonomous AI systems',
      'Business professionals automating workflows',
      'Entrepreneurs automating operations',
      'Anyone who wants to ride the hottest AI wave of 2026',
    ],
    toolStack: [
      { name: 'n8n', desc: 'Leading open-source AI workflow automation (40K+ GitHub stars). 400+ app integrations.', highlight: true },
      { name: 'OpenClaw', desc: 'Fastest-growing OSS project in history (250K+ GitHub stars). Personal AI agent via Telegram/WhatsApp/Discord.', highlight: true },
      { name: 'CrewAI', desc: 'Leading multi-agent orchestration framework. A2A protocol support. AutoGen is in maintenance mode — CrewAI won.', highlight: true },
    ],
    alsoCovered: 'OpenAI Agents SDK, Zapier AI, API/database/messaging connections.',
    concepts: 'AI agents (planning, tool use, memory, reasoning loops), personal agents, multi-agent orchestration with role delegation.',
    projects: [
      { name: 'AI Executive Assistant Agent', desc: 'OpenClaw agent managing email, calendar, tasks via Telegram/WhatsApp.' },
      { name: 'Multi-Agent Research System', desc: 'CrewAI crew (researcher, analyst, writer, reviewer) producing investor-grade reports automatically.' },
      { name: 'Automated Job Application Pipeline', desc: 'n8n workflow: scrape jobs → tailor resumes → write cover letters → submit → track.' },
    ],
    roles: [
      { title: 'AI Agent Developer', salary: '$70K - $110K' },
      { title: 'AI Automation Engineer', salary: '$65K - $100K' },
      { title: 'AI Solutions Architect', salary: '$80K - $120K' },
      { title: 'RPA/AI Automation Consultant', salary: '$70K - $110K' },
    ],
    targetCompanies: ['n8n', 'Zapier', 'UiPath', 'CrewAI', 'Salesforce', 'ServiceNow', 'McKinsey', 'Deloitte', 'Accenture'],
    github: '8-12 repos | 50-200 stars | n8n templates, OpenClaw plugins, agent demos with videos',
    website: 'Live agent demo visitors can interact with, automation case study, video walkthroughs',
  },
  {
    num: 4,
    label: 'CODE',
    title: 'AI-Powered Development',
    gradient: 'from-brand-green to-emerald-400',
    color: '#22C55E',
    stairLabel: 'Code 10x faster with the three biggest AI coding tools in the world.',
    whoShouldTake: [
      'Any developer wanting to 10x their productivity',
      'Career changers breaking into software development with AI assistance',
      'Engineers competing in the modern job market (85% now use AI coding tools)',
    ],
    toolStack: [
      { name: 'Claude Code', desc: '#1 most-used AI coding tool in 2026 (46% developer love rate). Terminal-native, 1M token context.', highlight: true },
      { name: 'Cursor', desc: '#1 AI-native IDE. 1M+ users, 360K+ paying customers, $2B+ ARR.', highlight: true },
      { name: 'GitHub Copilot', desc: 'Most widely adopted in enterprise. 85% of developers use AI coding tools, Copilot leads enterprise adoption.', highlight: true },
    ],
    alsoCovered: 'AI code generation/refactoring/debugging, code review and security with AI, prompt engineering for code.',
    concepts: 'Agentic coding (AI planning multi-file changes), when to use which tool, AI-assisted testing and documentation.',
    projects: [
      { name: 'Full-Stack Web App (AI-Pair-Programmed)', desc: 'Complete web app built with Cursor + Claude Code, documenting AI-assisted workflow and productivity gains.' },
      { name: 'Published Developer Tool', desc: 'CLI tool or VS Code extension, shipped to npm or VS Code marketplace with documentation.' },
      { name: 'AI Code Review & Security Bot', desc: 'GitHub Action using AI to review PRs, flag OWASP Top 10 vulnerabilities, suggest fixes, generate tests.' },
    ],
    roles: [
      { title: 'AI-Augmented Software Engineer', salary: '$80K - $130K' },
      { title: 'Full-Stack Developer (AI-Native)', salary: '$75K - $120K' },
      { title: 'Developer Experience Engineer', salary: '$80K - $125K' },
      { title: 'Freelance AI Developer', salary: '$60 - $120/hr' },
    ],
    targetCompanies: ['Anthropic', 'Cursor', 'GitHub/Microsoft', 'Replit', 'AI-native startups', 'Freelance/contract'],
    github: '10-15 repos | 50-500 stars | Published tools with real downloads | OSS contributions',
    website: 'Published tool showcase with download stats, "How I Built X" blog series',
  },
  {
    num: 5,
    label: 'DEPLOY',
    title: 'MLOps & Deployment',
    gradient: 'from-brand-teal to-cyan-400',
    color: '#14B8A6',
    stairLabel: 'Take AI from laptop to production at enterprise scale.',
    whoShouldTake: [
      'Engineers bridging "model works" to "model in production"',
      'DevOps engineers transitioning to MLOps',
      'ML engineers who want to own the full lifecycle',
    ],
    toolStack: [
      { name: 'Docker', desc: 'Non-negotiable containerization. Package and deploy any model anywhere. Every DevOps/MLOps job requires it.', highlight: true },
      { name: 'AWS SageMaker / GCP Vertex AI', desc: 'Leading cloud ML platforms. Where 80%+ of enterprise AI runs in production.', highlight: true },
      { name: 'MLflow', desc: 'Open-source standard for ML lifecycle management. Used by Databricks, Meta, Microsoft.', highlight: true },
    ],
    alsoCovered: 'CI/CD for AI, monitoring (drift detection, alerting), cost optimization, security/compliance.',
    concepts: 'Experiment tracking, model versioning, containerizing ML models, cloud deployment (endpoints, auto-scaling, A/B testing).',
    projects: [
      { name: 'End-to-End ML Pipeline', desc: 'Data ingestion → training → evaluation → deployment → monitoring. Dockerized, MLflow-tracked, cloud-deployed.' },
      { name: 'Model A/B Testing Platform', desc: 'Deploy multiple model versions, route traffic, auto-promote best performer.' },
      { name: 'AI Cost & Performance Dashboard', desc: 'Monitor token usage, latency, costs across LLM providers with alerts and spend forecasting.' },
    ],
    roles: [
      { title: 'MLOps Engineer', salary: '$85K - $140K' },
      { title: 'AI Infrastructure Engineer', salary: '$90K - $145K' },
      { title: 'ML Platform Engineer', salary: '$90K - $150K' },
      { title: 'Cloud AI Architect', salary: '$95K - $155K' },
    ],
    targetCompanies: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Databricks', 'Snowflake', 'Meta', 'Netflix', 'Uber', 'JPMorgan'],
    github: '12-18 repos | Infra-as-code, Docker configs, CI/CD pipelines, MLflow experiments',
    website: 'Architecture diagrams, monitoring dashboard screenshots, deployment case study',
  },
  {
    num: 6,
    label: 'SHIP',
    title: 'AI Product Builder',
    gradient: 'from-brand-yellow to-amber-400',
    color: '#EAB308',
    stairLabel: 'The capstone. Build, ship, and monetize complete AI products.',
    whoShouldTake: [
      'Aspiring AI Product Managers who want to ship, not just spec',
      'Entrepreneurs and founders building AI startups',
      'Developers becoming full-stack product builders',
      'Anyone going from "I can build" to "I can build AND ship AND monetize"',
    ],
    toolStack: [
      { name: 'Lovable', desc: 'AI app builder valued at $6.6B (NVIDIA, Salesforce, Databricks-backed). Full-stack MVPs from text prompts.', highlight: true },
      { name: 'Bolt.new', desc: 'Developer-friendly AI app builder with framework flexibility. 1M free tokens/month.', highlight: true },
      { name: 'Replit', desc: '$9B AI-powered development and deployment platform. Code, build, deploy, host — all in one.', highlight: true },
    ],
    alsoCovered: 'AI Product Management, Design thinking, AI-specific PRDs, go-to-market strategy, Product Hunt launches, AI ethics.',
    concepts: 'End-to-end product dev (idea → design → build → launch → iterate), system design, monetization (Stripe, pricing strategy).',
    projects: [
      { name: 'AI SaaS Product (Idea to Revenue)', desc: 'Complete AI SaaS with auth, Stripe payments, production DB. List on Product Hunt. Real users.' },
      { name: 'AI Product PRD + Shipped MVP', desc: 'Professional PRD → built and shipped MVP → case study with metrics. The AI PM interview deliverable.' },
      { name: 'AI-Powered Marketplace or Platform', desc: 'Two-sided platform with multiple user roles, real-time features, AI integration.' },
    ],
    roles: [
      { title: 'AI Product Manager', salary: '$90K - $150K' },
      { title: 'Technical PM (AI)', salary: '$95K - $155K' },
      { title: 'Head of AI Product', salary: '$110K - $170K+' },
      { title: 'AI Startup Founder', salary: 'Equity-based' },
      { title: 'AI Consultant / Freelancer', salary: '$60 - $150/hr' },
    ],
    targetCompanies: ['OpenAI', 'Anthropic', 'Jasper', 'Google', 'Microsoft', 'Amazon', 'YC/a16z portfolio', 'Your own startup'],
    github: '15-20+ repos | 100-1,000+ stars | Launched products with real users, published packages',
    website: 'Stunning portfolio showcasing all 6 programs. Live product demos. User/revenue metrics. This website IS the resume.',
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

  return (
    <div ref={ref} className={`fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 80}ms` }}>
      <GlowCard className="rounded-2xl">
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-5 min-w-0">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                <span className="text-2xl font-black text-white">{tier.num}</span>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: tier.color }}>{tier.label}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 truncate">{tier.title}</h3>
                <p className="text-base text-gray-500 mt-0.5">{tier.stairLabel}</p>
              </div>
            </div>
            <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
              <ChevronDown size={22} className="text-gray-400" />
            </div>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-6 sm:px-8 pb-8 border-t border-gray-50 pt-6">

              {/* Who Should Take This */}
              <div className="mb-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <Brain size={20} style={{ color: tier.color }} />
                  <span className="text-sm font-black uppercase tracking-wider" style={{ color: tier.color }}>Who Should Take This Program</span>
                </div>
                <ul className="space-y-1.5">
                  {tier.whoShouldTake.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: tier.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tool Stack */}
              <div className="mb-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <Code2 size={20} style={{ color: tier.color }} />
                  <span className="text-sm font-black uppercase tracking-wider" style={{ color: tier.color }}>Tool Stack (3 Core Tools)</span>
                </div>
                <div className="space-y-3">
                  {tier.toolStack.map((tool) => (
                    <div key={tool.name} className="flex items-start gap-3">
                      <span
                        className="inline-block px-3 py-1.5 rounded-lg text-sm font-bold text-white shadow-md flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: tier.color }}
                      >
                        {tool.name}
                      </span>
                      <span className="text-base text-gray-500">{tool.desc}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-sm text-gray-400">
                  <span className="font-semibold">Also covered:</span> {tier.alsoCovered}
                </p>
              </div>

              {/* Concepts */}
              <div className="mb-6 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Key Concepts</span>
                <p className="text-base text-gray-600 mt-1">{tier.concepts}</p>
              </div>

              {/* Projects */}
              <div className="mb-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <FolderGit2 size={20} style={{ color: tier.color }} />
                  <span className="text-sm font-black uppercase tracking-wider" style={{ color: tier.color }}>High-Signal Projects (3)</span>
                </div>
                <ol className="space-y-3">
                  {tier.projects.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white mt-0.5"
                        style={{ backgroundColor: tier.color }}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <span className="font-bold text-gray-900">{p.name}</span>
                        <span className="text-gray-500"> — {p.desc}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Career Mapping */}
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <Briefcase size={20} style={{ color: tier.color }} />
                    <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Career Mapping</span>
                  </div>
                  <div className="space-y-2">
                    {tier.roles.map((role) => (
                      <div key={role.title} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50">
                        <span className="text-base font-semibold text-gray-700">{role.title}</span>
                        <span className="text-sm font-bold" style={{ color: tier.color }}>{role.salary}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Companies */}
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <Target size={20} style={{ color: tier.color }} />
                    <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Target Companies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tier.targetCompanies.map((c) => (
                      <span key={c} className="inline-block px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 bg-gray-50 border border-gray-100">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* GitHub & Website */}
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <Star size={20} style={{ color: tier.color }} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider text-gray-400">GitHub Portfolio</span>
                    <p className="text-base text-gray-600 mt-1">{tier.github}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <Globe size={20} style={{ color: tier.color }} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Personal Website Features</span>
                    <p className="text-base text-gray-600 mt-1">{tier.website}</p>
                  </div>
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
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            Explore Each{' '}
            <span className="bg-gradient-to-r from-brand-coral to-brand-orange bg-clip-text text-transparent">
              Program
            </span>
          </h2>
          <p className="mt-5 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tap any program to see the full breakdown: tools, projects, careers, salaries, companies, and portfolio expectations.
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
