import Navbar from '../components/Navbar';
import TierDetails from '../components/TierDetails';
import Footer from '../components/Footer';

const ASSESSMENT_URL = '#assessment';

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-orange-50/60 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-5 uppercase tracking-wider">
            The 6-Tier Career Accelerator
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            The Uplift AI{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
              Career Accelerator
            </span>
          </h1>
          <p className="mt-5 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Each tier builds on the last. By Tier 6, you can build, deploy,
            and ship AI products independently.
          </p>
          <p className="mt-3 text-sm font-bold text-gray-400 tracking-widest">
            LEARN → BUILD → AUTOMATE → CODE → DEPLOY → SHIP
          </p>
          <a
            href={ASSESSMENT_URL}
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta hover:shadow-xl hover:shadow-brand-coral/25 transition-all"
          >
            Find Your Starting Tier →
          </a>
        </div>
      </section>

      <TierDetails />

      {/* Role Mapping Table */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-10">
            Which Tiers Do You Need for Your{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">Target Role?</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 px-4 text-sm font-bold text-gray-900">Role</th>
                  <th className="py-3 px-4 text-sm font-bold text-gray-900">Primary Tiers</th>
                  <th className="py-3 px-4 text-sm font-bold text-gray-900">Why</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                <tr className="border-b border-gray-100"><td className="py-3 px-4 font-semibold">ML Engineer</td><td className="py-3 px-4">1 + 2 + 5</td><td className="py-3 px-4">Builds models, deploys LLM apps, manages production</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 px-4 font-semibold">LLM / RAG Engineer</td><td className="py-3 px-4">2 + 4</td><td className="py-3 px-4">Builds LLM apps, codes with AI tools</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 px-4 font-semibold">AI Agent Developer</td><td className="py-3 px-4">2 + 3 + 4</td><td className="py-3 px-4">Understands LLMs, builds agents, codes fast</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 px-4 font-semibold">AI Software Developer</td><td className="py-3 px-4">1 + 4 + 5</td><td className="py-3 px-4">ML literacy, codes with AI, deploys</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 px-4 font-semibold">MLOps Engineer</td><td className="py-3 px-4">1 + 5</td><td className="py-3 px-4">ML foundations, deploys & scales</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 px-4 font-semibold">AI Product Manager</td><td className="py-3 px-4">2 + 3 + 6</td><td className="py-3 px-4">Understands LLMs, knows agents, ships products</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 px-4 font-semibold">AI Startup Founder</td><td className="py-3 px-4">All 6</td><td className="py-3 px-4">Full-stack AI capability</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Portfolio Progression */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-10">
            Your Portfolio{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">Grows With You</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-3 px-4 text-sm font-bold text-gray-900">After Tier</th>
                  <th className="py-3 px-4 text-sm font-bold text-gray-900">Repos</th>
                  <th className="py-3 px-4 text-sm font-bold text-gray-900">Stars</th>
                  <th className="py-3 px-4 text-sm font-bold text-gray-900">Website State</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                <tr className="border-b border-gray-50"><td className="py-3 px-4 font-semibold">1</td><td className="py-3 px-4">3-5</td><td className="py-3 px-4">5-20</td><td className="py-3 px-4">Live site, about page, 3 projects, first blog</td></tr>
                <tr className="border-b border-gray-50"><td className="py-3 px-4 font-semibold">2</td><td className="py-3 px-4">5-8</td><td className="py-3 px-4">20-100</td><td className="py-3 px-4">LLM demos, embedded chatbot, RAG blog</td></tr>
                <tr className="border-b border-gray-50"><td className="py-3 px-4 font-semibold">3</td><td className="py-3 px-4">8-12</td><td className="py-3 px-4">50-200</td><td className="py-3 px-4">Live agent demo, automation case study, videos</td></tr>
                <tr className="border-b border-gray-50"><td className="py-3 px-4 font-semibold">4</td><td className="py-3 px-4">10-15</td><td className="py-3 px-4">50-500</td><td className="py-3 px-4">Published tools, download stats, "How I Built X" blog</td></tr>
                <tr className="border-b border-gray-50"><td className="py-3 px-4 font-semibold">5</td><td className="py-3 px-4">12-18</td><td className="py-3 px-4">20-100</td><td className="py-3 px-4">Architecture diagrams, monitoring dashboards</td></tr>
                <tr><td className="py-3 px-4 font-semibold">6</td><td className="py-3 px-4">15-20+</td><td className="py-3 px-4">100-1,000+</td><td className="py-3 px-4 font-bold text-gray-900">Full portfolio, live demos, metrics. This IS the resume.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <a
          href={ASSESSMENT_URL}
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold text-lg bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta hover:shadow-xl transition-all"
        >
          Find Your Starting Tier →
        </a>
      </section>

      <Footer />
    </div>
  );
}
