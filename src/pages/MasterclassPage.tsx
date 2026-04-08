import { useState } from 'react';
import { Play, Clock, Calendar, Users, ArrowRight, CheckCircle2, Sparkles, Bot, Brain, MessageSquare, GraduationCap, Globe, Award, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useInView } from '../hooks/useInView';

const CIRCLE_URL = 'https://community.upliftai.pro';

const masterclasses = [
  {
    id: 'program-1',
    program: 'Program 1',
    title: 'Build Your First AI Model in 30 Minutes — Live',
    tagline: 'From zero to a working image classifier. No experience needed.',
    track: 'AI & ML Foundations',
    icon: Brain,
    color: 'from-blue-500 to-indigo-600',
    colorLight: 'blue',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    schedule: 'Every Monday, 7:30 PM SGT',
    usRepeat: 'Saturday 9:00 AM SGT (rotating)',
    duration: '60 minutes',
    audience: 'Complete beginners, career switchers, students',
    whatYouBuild: [
      'A working image classifier using Scikit-learn',
      'AI-assisted learning with ChatGPT, Claude & Gemini',
      'Multi-model AI benchmark comparison',
    ],
    tools: ['Google Colab', 'Scikit-learn', 'ChatGPT', 'Claude', 'Gemini'],
    careerPath: 'Junior ML Engineer — $65K–$95K',
    targetCompanies: 'Google, Meta, Microsoft, Amazon, NVIDIA',
  },
  {
    id: 'program-2',
    program: 'Program 2',
    title: 'Build an AI Chatbot That Reads Your Documents — Live',
    tagline: 'From PDF to production chatbot in 30 minutes. The #1 skill companies are hiring for.',
    track: 'LLM Applications & RAG',
    icon: MessageSquare,
    color: 'from-brand-orange to-brand-coral',
    colorLight: 'orange',
    borderColor: 'border-orange-200',
    bgColor: 'bg-orange-50',
    textColor: 'text-brand-orange',
    schedule: 'Every Wednesday, 7:30 PM SGT',
    usRepeat: 'Saturday 9:00 AM SGT (rotating)',
    duration: '60 minutes',
    audience: 'Developers, junior devs, career switchers',
    whatYouBuild: [
      'A RAG chatbot with LangChain + ChromaDB',
      'Document Q&A with Google AI Studio & Gemini',
      'Explore 500K+ models on Hugging Face',
    ],
    tools: ['Google AI Studio', 'LangChain', 'ChromaDB', 'Hugging Face', 'Google Colab'],
    careerPath: 'LLM/RAG Engineer — $75K–$120K',
    targetCompanies: 'OpenAI, Anthropic, Cohere, Perplexity, Databricks',
  },
  {
    id: 'program-3',
    program: 'Program 3',
    title: 'Build Your Own AI Agent in 30 Minutes — Live',
    tagline: 'Autonomous AI is the #1 trend of 2026. Build an agent that actually does things.',
    track: 'AI Agents & Automation',
    icon: Bot,
    color: 'from-purple-500 to-brand-magenta',
    colorLight: 'purple',
    borderColor: 'border-purple-200',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    schedule: 'Every Friday, 7:30 PM SGT',
    usRepeat: 'Saturday 9:00 AM SGT (rotating)',
    duration: '60 minutes',
    audience: 'Developers, entrepreneurs, business professionals',
    whatYouBuild: [
      'AI automation workflow with n8n (drag-and-drop)',
      'Personal AI agent with OpenClaw',
      'Multi-step agent tasks with Google Stitch & Gemini',
    ],
    tools: ['n8n Cloud', 'OpenClaw', 'Google Gemini API', 'Google Stitch', 'Google Colab'],
    careerPath: 'AI Agent Developer — $70K–$110K',
    targetCompanies: 'n8n, Zapier, UiPath, Salesforce, McKinsey, Deloitte',
  },
];

function MasterclassCard({ mc, selected, onSelect }: { mc: typeof masterclasses[0]; selected: boolean; onSelect: () => void }) {
  const { ref, visible } = useInView();
  const Icon = mc.icon;

  return (
    <div
      ref={ref}
      onClick={onSelect}
      className={`fade-up cursor-pointer group relative rounded-3xl border-2 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl ${
        visible ? 'visible' : ''
      } ${
        selected
          ? `${mc.borderColor} shadow-lg ring-2 ring-offset-2 ${mc.textColor.replace('text-', 'ring-')}`
          : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      {selected && (
        <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r ${mc.color} flex items-center justify-center shadow-lg`}>
          <CheckCircle2 size={18} className="text-white" />
        </div>
      )}

      <div className="flex items-start gap-4 mb-5">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${mc.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
          <Icon size={26} className="text-white" />
        </div>
        <div className="min-w-0">
          <span className={`text-xs font-bold uppercase tracking-widest ${mc.textColor}`}>{mc.program} — {mc.track}</span>
          <h3 className="font-display text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight mt-1">{mc.title}</h3>
        </div>
      </div>

      <p className="text-gray-500 leading-relaxed mb-5">{mc.tagline}</p>

      <div className="flex flex-wrap gap-3 mb-5 text-sm">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${mc.bgColor} ${mc.textColor} font-medium`}>
          <Calendar size={14} /> {mc.schedule}
        </span>
        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${mc.bgColor} ${mc.textColor} font-medium`}>
          <Clock size={14} /> {mc.duration}
        </span>
      </div>

      <div className="mb-5">
        <p className="text-sm font-bold text-gray-700 mb-2">What you'll build live:</p>
        <ul className="space-y-2">
          {mc.whatYouBuild.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <Sparkles size={14} className={`${mc.textColor} flex-shrink-0 mt-0.5`} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {mc.tools.map((tool) => (
          <span key={tool} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">{tool}</span>
        ))}
      </div>

      <div className={`p-4 rounded-2xl ${mc.bgColor} border ${mc.borderColor}`}>
        <p className="text-sm font-bold text-gray-800">{mc.careerPath}</p>
        <p className="text-xs text-gray-500 mt-1">Target: {mc.targetCompanies}</p>
      </div>

      <div className="mt-5 text-center">
        <span className={`inline-flex items-center gap-2 text-sm font-bold ${mc.textColor} group-hover:underline`}>
          {selected ? 'Selected' : 'Select this masterclass'}
          {!selected && <ArrowRight size={14} />}
        </span>
      </div>
    </div>
  );
}

function RegistrationForm({ selectedId, onChangeSelection }: { selectedId: string | null; onChangeSelection: () => void }) {
  const { ref, visible } = useInView();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const selected = masterclasses.find((m) => m.id === selectedId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !selectedId) return;
    setSubmitted(true);
    // Open Circle community in new tab after brief delay
    setTimeout(() => {
      window.open(CIRCLE_URL, '_blank');
    }, 1500);
  };

  if (submitted) {
    return (
      <div ref={ref} className={`fade-up ${visible ? 'visible' : ''}`}>
        <div className="max-w-lg mx-auto text-center p-10 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-600" />
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">You're In!</h3>
          <p className="text-lg text-gray-600 mb-2">
            Welcome, <span className="font-bold text-gray-900">{name || 'there'}</span>!
          </p>
          <p className="text-gray-500 mb-6">
            You're being redirected to our Circle community where you can access the{' '}
            <span className="font-bold text-gray-700">{selected?.track}</span> masterclass space.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            If you're not redirected automatically, click below:
          </p>
          <a
            href={CIRCLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-lg font-bold bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
          >
            <Play size={18} fill="currentColor" />
            Join the Community
          </a>
          <p className="mt-6 text-sm text-gray-400">
            A confirmation email has been sent to <span className="font-medium text-gray-600">{email}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className={`fade-up ${visible ? 'visible' : ''}`}>
      <div className="max-w-lg mx-auto">
        <div className="rounded-3xl border-2 border-brand-orange/20 bg-gradient-to-br from-orange-50/80 via-white to-pink-50/50 p-8 sm:p-10 overflow-hidden relative">
          <div className="absolute top-[-80px] right-[-60px] w-[250px] h-[250px] bg-gradient-to-bl from-brand-orange/8 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900">
                Register for Your{' '}
                <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
                  Free Masterclass
                </span>
              </h3>
              <p className="mt-2 text-gray-500">Join 500+ learners from 30+ countries</p>
            </div>

            {selected ? (
              <div className={`mb-6 p-4 rounded-2xl ${selected.bgColor} border ${selected.borderColor} flex items-center gap-3`}>
                <selected.icon size={22} className={selected.textColor} />
                <div className="min-w-0">
                  <p className="font-bold text-sm text-gray-900">{selected.track}</p>
                  <p className="text-xs text-gray-500">{selected.schedule}</p>
                </div>
                <button
                  onClick={onChangeSelection}
                  className="ml-auto text-xs font-semibold text-gray-400 hover:text-gray-600 whitespace-nowrap"
                >
                  Change
                </button>
              </div>
            ) : (
              <div className="mb-6 p-4 rounded-2xl bg-yellow-50 border border-yellow-200 text-center">
                <p className="text-sm text-yellow-700 font-medium">
                  Please select a masterclass above first
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address <span className="text-brand-coral">*</span></label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-gray-900 placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                disabled={!selectedId || !email}
                className={`w-full cta-glow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white text-lg font-bold transition-all duration-300 ${
                  selectedId && email
                    ? 'bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta hover:shadow-xl hover:scale-[1.03] cursor-pointer'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                <Play size={18} fill="currentColor" />
                Register & Join Free Masterclass
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1"><CheckCircle2 size={12} /> 100% Free</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={12} /> No credit card</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={12} /> Instant access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FounderBio() {
  const { ref, visible } = useInView();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`fade-up ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 mb-4">
              <GraduationCap size={14} className="text-brand-orange" />
              <span className="text-brand-orange text-sm font-semibold uppercase tracking-wider">Meet the Founder</span>
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Who's Building{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
                Uplift AI
              </span>
            </h2>
          </div>

          <div className="rounded-3xl border-2 border-gray-200 bg-white p-8 sm:p-12 hover-glow transition-all">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              {/* Photo & Quick Info */}
              <div className="flex-shrink-0 lg:w-72">
                <div className="relative">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 mx-auto rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src="/soma-profile.jpg"
                      alt="Adjunct Prof. Somashekhar (Soma)"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-gradient-to-r from-brand-orange to-brand-coral text-white text-sm font-bold shadow-lg whitespace-nowrap">
                    MIT Sloan Fellow
                  </div>
                </div>

                <div className="mt-10 space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                    <GraduationCap size={18} className="text-brand-orange flex-shrink-0" />
                    <span className="text-sm text-gray-700">MBA, MIT Sloan School of Management</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                    <Globe size={18} className="text-brand-orange flex-shrink-0" />
                    <span className="text-sm text-gray-700">30+ years global experience</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                    <Award size={18} className="text-brand-orange flex-shrink-0" />
                    <span className="text-sm text-gray-700">Council Member, The BrandLaureate SG</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                    <Briefcase size={18} className="text-brand-orange flex-shrink-0" />
                    <span className="text-sm text-gray-700">Managed S$150M VC fund (SG Innovate)</span>
                  </div>
                </div>
              </div>

              {/* Bio Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
                  Adjunct Prof. Somashekhar (Soma)
                </h3>
                <p className="text-brand-orange font-semibold mb-6">
                  Visionary Leader, Innovator & Entrepreneurial Ecosystem Architect
                </p>

                <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Soma is a renowned visionary leader and accomplished entrepreneur with over three decades of experience across ICT, venture capital, digital transformation, and global innovation ecosystems. He has held influential roles in both the public and private sectors, driving cutting-edge innovation and establishing transformative G2G and B2B partnerships.
                  </p>
                  <p>
                    As a <span className="font-bold text-gray-900">Singapore Government Senior Official at IMDA</span> (Infocom Media Development Authority), he played a pivotal role in industry development, internationalization, and marketing "Singapore Inc." across India, the Middle East, and the USA. He managed a <span className="font-bold text-gray-900">S$150 million Technology Growth Fund</span>, supporting over 50 early-stage startups that laid the foundation for Singapore's thriving startup ecosystem.
                  </p>
                  <p>
                    A trusted <span className="font-bold text-gray-900">Venture Capitalist and Mentor</span>, Soma has successfully overseen exits and guided startups through various stages of growth, with deep expertise in digital transformation, ESG, AI/ML, Web 3.0, Immersive Technologies, and sustainability.
                  </p>
                </div>

                {/* Academic credentials */}
                <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-100">
                  <p className="text-sm font-bold text-gray-800 mb-3">Academic & Thought Leadership</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Entrepreneur-in-Residence @ INSEAD Singapore',
                      'Adjunct Prof @ ESSEC Business School',
                      'SP Jain School of Global Management',
                      'Arabian Gulf University, Bahrain',
                      'Harvard Business School Coursework',
                      'Harvard Kennedy School Coursework',
                    ].map((cred) => (
                      <span key={cred} className="text-xs px-3 py-1.5 rounded-full bg-white border border-orange-200 text-gray-700 font-medium">
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expertise */}
                <div className="mt-5 p-5 rounded-2xl bg-gray-50 border border-gray-200">
                  <p className="text-sm font-bold text-gray-800 mb-3">Specializations</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Design Thinking & Business Model Innovation',
                      'AI / Machine Learning',
                      'Digital Transformation',
                      'Corporate Sustainability & ESG',
                      'Venture Capital',
                      'Entrepreneurship & Startups',
                      'Cloud Computing',
                      'Web 3.0 & Immersive Tech',
                    ].map((spec) => (
                      <span key={spec} className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MasterclassContent() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { ref: heroRef, visible: heroVisible } = useInView();

  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-orange-50/60 via-white to-white relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] bg-gradient-to-bl from-brand-orange/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-purple-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div ref={heroRef} className={`max-w-4xl mx-auto px-4 sm:px-6 text-center relative fade-up ${heroVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 mb-6">
            <Play size={14} className="text-brand-orange" fill="currentColor" />
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-wider">Free Weekly Masterclasses</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Learn AI by{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
              Building — Live
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Join 500+ learners worldwide in our free weekly masterclasses. Pick your track,
            build something real in 30 minutes, and access our community — all at zero cost.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2"><Play size={16} className="text-brand-orange" fill="currentColor" /> 3 tracks weekly</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-brand-orange" /> 60 min each</span>
            <span className="flex items-center gap-2"><Users size={16} className="text-brand-orange" /> 100% free</span>
            <span className="flex items-center gap-2"><Globe size={16} className="text-brand-orange" /> All time zones</span>
          </div>

          <div className="mt-8">
            <a
              href="#select-masterclass"
              className="cta-glow inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-lg font-bold bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta hover:shadow-xl hover:shadow-brand-coral/25 transition-all duration-300 hover:scale-[1.03]"
            >
              Choose Your Masterclass
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Masterclass Selection */}
      <section id="select-masterclass" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
                Masterclass
              </span>
            </h2>
            <p className="mt-3 text-lg text-gray-500">Select one to register — attend as many as you like</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {masterclasses.map((mc) => (
              <MasterclassCard
                key={mc.id}
                mc={mc}
                selected={selectedId === mc.id}
                onSelect={() => setSelectedId(mc.id)}
              />
            ))}
          </div>

          {/* Registration Form */}
          <div id="register" className="mb-16">
            <RegistrationForm
              selectedId={selectedId}
              onChangeSelection={() => {
                setSelectedId(null);
                document.getElementById('select-masterclass')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <FounderBio />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="rounded-3xl border-2 border-brand-orange/20 bg-gradient-to-br from-orange-50/80 via-white to-pink-50/50 p-10 sm:p-14 relative overflow-hidden">
            <div className="absolute top-[-80px] right-[-60px] w-[250px] h-[250px] bg-gradient-to-bl from-brand-orange/8 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900">
                Ready to Start{' '}
                <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
                  Building?
                </span>
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
                Starting week of April 14, 2026. Three masterclasses, three career paths, one community. Zero cost.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#select-masterclass"
                  className="cta-glow inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-lg font-bold bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta hover:shadow-xl hover:shadow-brand-coral/25 transition-all duration-300 hover:scale-[1.03]"
                >
                  <Play size={18} fill="currentColor" />
                  Register for Free Masterclass
                </a>
                <a
                  href="/programs"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-brand-orange/30 hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                >
                  Explore Full Programs
                  <ArrowRight size={18} className="text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function MasterclassPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <MasterclassContent />
      <Footer />
    </div>
  );
}
