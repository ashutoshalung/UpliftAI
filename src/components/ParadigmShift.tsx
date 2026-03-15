import { X } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const legacyItems = ['Single prompts', 'Autocomplete', 'Siloed tools'];
const modernItems = ['Agentic IDEs', 'Multi-agent workflows', 'Automated Governance'];

export default function ParadigmShift() {
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: eraRef, visible: eraVisible } = useInView();
  const { ref: verdictRef, visible: verdictVisible } = useInView();

  return (
    <section id="paradigm-shift" className="py-24 bg-gradient-to-b from-white via-orange-50/20 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className={`text-center mb-16 fade-up ${headerVisible ? 'visible' : ''}`}>
          <span className="inline-block px-5 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-base font-semibold mb-5 uppercase tracking-wider">
            The 2026 AI Career Teardown
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            From Generation to{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
              Integration
            </span>
          </h2>
          <p className="mt-5 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Knowing how to prompt ChatGPT is now a baseline, not a career. The Generation Era is dead.
            We have entered the Integration Era, where value is defined by Context Orchestration and Agentic Workflows.
          </p>
        </div>

        <div ref={eraRef} className={`grid md:grid-cols-2 gap-6 mb-16 fade-up ${eraVisible ? 'visible' : ''}`}>
          <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-10 overflow-hidden">
            <div className="absolute top-5 right-5">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <X size={24} className="text-red-500" />
              </div>
            </div>
            <h3 className="text-2xl font-black text-gray-400 mb-8">Generation Era</h3>
            <div className="space-y-5">
              {legacyItems.map((item) => (
                <div key={item} className="relative">
                  <span className="text-3xl sm:text-4xl font-black text-gray-300 line-through decoration-gray-400 decoration-2">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-white border-2 border-brand-orange/20 rounded-2xl p-10 shadow-lg shadow-brand-orange/5">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-brand-orange to-brand-coral rounded-l-2xl" />
            <h3 className="text-2xl font-black text-gray-900 mb-8">Integration Era</h3>
            <div className="space-y-5">
              {modernItems.map((item, i) => (
                <div
                  key={item}
                  className={`fade-up ${eraVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${(i + 1) * 150}ms` }}
                >
                  <span className="text-3xl sm:text-4xl font-black text-gray-900">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={verdictRef} className={`scale-in ${verdictVisible ? 'visible' : ''}`}>
          <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-10 sm:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(249,115,22,0.15)_0%,transparent_60%)]" />
            <div className="relative">
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Pilots are failing because companies are hiring prompt engineers when they actually need{' '}
                <span className="text-white font-bold">systems integrators</span>{' '}
                who can govern quality and architect autonomous networks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
