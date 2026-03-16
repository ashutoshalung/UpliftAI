import Navbar from '../components/Navbar';
import TierDetails from '../components/TierDetails';
import Footer from '../components/Footer';

const ASSESSMENT_URL = 'https://equip.co/assessments/nrzee/';
const PAYMENT_URL = 'https://buy.stripe.com/3cIdRagsE3xW8aM78o9sk01';

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-orange-50/60 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-base font-semibold mb-5 uppercase tracking-wider">
            The 6-Program Career Accelerator
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            The Uplift AI{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
              Career Accelerator
            </span>
          </h1>
          <p className="mt-5 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Each program builds on the last. By Program 6, you can build, deploy,
            and ship AI products independently.
          </p>
          <p className="mt-3 text-base font-bold text-gray-400 tracking-widest">
            LEARN → BUILD → AUTOMATE → CODE → DEPLOY → SHIP
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ASSESSMENT_URL}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta hover:shadow-xl hover:shadow-brand-coral/25 transition-all"
            >
              AI Job Readiness Assessment →
            </a>
            <a
              href={PAYMENT_URL}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-brand-orange/30 hover:shadow-md transition-all"
            >
              Pay & Enroll Now →
            </a>
          </div>
        </div>
      </section>

      <TierDetails />

      {/* Role Mapping Table */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10">
            Which Programs Do You Need for Your{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">Target Role?</span>
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-brand-orange/5 to-brand-coral/5 border-b-2 border-gray-200">
                  <th className="py-4 px-6 text-base font-bold text-gray-900">Role</th>
                  <th className="py-4 px-6 text-base font-bold text-gray-900">Primary Programs</th>
                  <th className="py-4 px-6 text-base font-bold text-gray-900">Why</th>
                </tr>
              </thead>
              <tbody className="text-base text-gray-600">
                <tr className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors"><td className="py-4 px-6 font-semibold text-gray-900">ML Engineer</td><td className="py-4 px-6"><span className="inline-flex gap-1"><span className="px-2 py-0.5 rounded bg-brand-orange/10 text-brand-orange font-bold text-sm">1</span><span className="px-2 py-0.5 rounded bg-brand-coral/10 text-brand-coral font-bold text-sm">2</span><span className="px-2 py-0.5 rounded bg-brand-teal/10 text-brand-teal font-bold text-sm">5</span></span></td><td className="py-4 px-6">Builds models, deploys LLM apps, manages production</td></tr>
                <tr className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors"><td className="py-4 px-6 font-semibold text-gray-900">LLM / RAG Engineer</td><td className="py-4 px-6"><span className="inline-flex gap-1"><span className="px-2 py-0.5 rounded bg-brand-coral/10 text-brand-coral font-bold text-sm">2</span><span className="px-2 py-0.5 rounded bg-brand-green/10 text-brand-green font-bold text-sm">4</span></span></td><td className="py-4 px-6">Builds LLM apps, codes with AI tools</td></tr>
                <tr className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors"><td className="py-4 px-6 font-semibold text-gray-900">AI Agent Developer</td><td className="py-4 px-6"><span className="inline-flex gap-1"><span className="px-2 py-0.5 rounded bg-brand-coral/10 text-brand-coral font-bold text-sm">2</span><span className="px-2 py-0.5 rounded bg-brand-magenta/10 text-brand-magenta font-bold text-sm">3</span><span className="px-2 py-0.5 rounded bg-brand-green/10 text-brand-green font-bold text-sm">4</span></span></td><td className="py-4 px-6">Understands LLMs, builds agents, codes fast</td></tr>
                <tr className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors"><td className="py-4 px-6 font-semibold text-gray-900">AI Software Developer</td><td className="py-4 px-6"><span className="inline-flex gap-1"><span className="px-2 py-0.5 rounded bg-brand-orange/10 text-brand-orange font-bold text-sm">1</span><span className="px-2 py-0.5 rounded bg-brand-green/10 text-brand-green font-bold text-sm">4</span><span className="px-2 py-0.5 rounded bg-brand-teal/10 text-brand-teal font-bold text-sm">5</span></span></td><td className="py-4 px-6">ML literacy, codes with AI, deploys</td></tr>
                <tr className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors"><td className="py-4 px-6 font-semibold text-gray-900">MLOps Engineer</td><td className="py-4 px-6"><span className="inline-flex gap-1"><span className="px-2 py-0.5 rounded bg-brand-orange/10 text-brand-orange font-bold text-sm">1</span><span className="px-2 py-0.5 rounded bg-brand-teal/10 text-brand-teal font-bold text-sm">5</span></span></td><td className="py-4 px-6">ML foundations, deploys & scales</td></tr>
                <tr className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors"><td className="py-4 px-6 font-semibold text-gray-900">AI Product Manager</td><td className="py-4 px-6"><span className="inline-flex gap-1"><span className="px-2 py-0.5 rounded bg-brand-coral/10 text-brand-coral font-bold text-sm">2</span><span className="px-2 py-0.5 rounded bg-brand-magenta/10 text-brand-magenta font-bold text-sm">3</span><span className="px-2 py-0.5 rounded bg-brand-yellow/10 text-brand-yellow font-bold text-sm">6</span></span></td><td className="py-4 px-6">Understands LLMs, knows agents, ships products</td></tr>
                <tr className="hover:bg-orange-50/30 transition-colors"><td className="py-4 px-6 font-semibold text-gray-900">AI Startup Founder</td><td className="py-4 px-6"><span className="inline-flex gap-1"><span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-bold text-sm">All 6</span></span></td><td className="py-4 px-6">Full-stack AI capability</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Portfolio Progression */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10">
            Your Portfolio{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">Grows With You</span>
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-brand-orange/5 to-brand-coral/5 border-b-2 border-gray-200">
                  <th className="py-4 px-6 text-base font-bold text-gray-900">After Program</th>
                  <th className="py-4 px-6 text-base font-bold text-gray-900">GitHub Repos</th>
                  <th className="py-4 px-6 text-base font-bold text-gray-900">GitHub Stars</th>
                  <th className="py-4 px-6 text-base font-bold text-gray-900">Personal Website Features</th>
                </tr>
              </thead>
              <tbody className="text-base text-gray-600">
                <tr className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors"><td className="py-4 px-6 font-bold text-brand-orange">Program 1</td><td className="py-4 px-6 font-semibold">3-5</td><td className="py-4 px-6">5-20</td><td className="py-4 px-6">Live site, about page, 3 projects, first blog</td></tr>
                <tr className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors"><td className="py-4 px-6 font-bold text-brand-coral">Program 2</td><td className="py-4 px-6 font-semibold">5-8</td><td className="py-4 px-6">20-100</td><td className="py-4 px-6">LLM demos, embedded chatbot, RAG blog</td></tr>
                <tr className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors"><td className="py-4 px-6 font-bold text-brand-magenta">Program 3</td><td className="py-4 px-6 font-semibold">8-12</td><td className="py-4 px-6">50-200</td><td className="py-4 px-6">Live agent demo, automation case study, videos</td></tr>
                <tr className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors"><td className="py-4 px-6 font-bold text-brand-green">Program 4</td><td className="py-4 px-6 font-semibold">10-15</td><td className="py-4 px-6">50-500</td><td className="py-4 px-6">Published tools, download stats, "How I Built X" blog</td></tr>
                <tr className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors"><td className="py-4 px-6 font-bold text-brand-teal">Program 5</td><td className="py-4 px-6 font-semibold">12-18</td><td className="py-4 px-6">20-100</td><td className="py-4 px-6">Architecture diagrams, monitoring dashboards</td></tr>
                <tr className="hover:bg-orange-50/30 transition-colors"><td className="py-4 px-6 font-bold text-brand-yellow">Program 6</td><td className="py-4 px-6 font-semibold">15-20+</td><td className="py-4 px-6">100-1,000+</td><td className="py-4 px-6 font-bold text-gray-900">Full portfolio, live demos, metrics. This IS the resume.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={ASSESSMENT_URL}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold text-lg bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta hover:shadow-xl transition-all"
          >
            AI Job Readiness Assessment →
          </a>
          <a
            href={PAYMENT_URL}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-lg text-gray-700 bg-white border-2 border-gray-200 hover:border-brand-orange/30 hover:shadow-md transition-all"
          >
            Pay & Enroll Now →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
