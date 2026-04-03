import { useEffect, useState } from 'react';
import { ArrowRight, Briefcase, Play, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const MASTERCLASS_URL = 'https://community.upliftai.pro/join?invitation_token=f428b930d629d809a0145adaa77f482ff6bc4bde-afeaad75-1e2b-473a-985d-9dd3ef56aaa7';

const partnersRow1 = [
  { name: 'Google DeepMind', logo: '/logos/deepmind.svg' },
  { name: 'Google', logo: '/logos/google.svg' },
  { name: 'Meta', logo: '/logos/meta.svg' },
  { name: 'Anthropic', logo: `https://cdn.simpleicons.org/anthropic` },
  { name: 'OpenAI', logo: '/logos/openai.svg' },
  { name: 'xAI', logo: '/logos/xai.svg' },
  { name: 'Manus AI', logo: '/logos/manus.svg' },
];

const partnersRow2 = [
  { name: 'NUS', logo: '/logos/nus.png' },
  { name: 'MIT', logo: '/logos/mit.svg' },
  { name: 'INSEAD', logo: '/logos/insead.svg' },
  { name: 'IIT', logo: '/logos/iit.svg' },
];

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex-shrink-0 mx-3 sm:mx-5">
      <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm min-w-[130px]">
        <img src={logo} alt={name} className="h-9 w-auto object-contain flex-shrink-0 max-w-[40px]" />
        <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{name}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-pink-50/60 to-white">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center">
        <div className={`mb-5 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/70 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-widest">
            The Uplift AI Career Accelerator
          </span>
        </div>

        <h1
          className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight transition-all duration-700 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[#1E1B4B]">Become the AI professional</span>
          <br />
          <span className="bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta bg-clip-text text-transparent">
            companies actually hire.
          </span>
        </h1>

        <p
          className={`mt-7 text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-[400ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Most people learn AI. We make you <span className="font-bold text-[#1E1B4B]">employable</span> in AI.
          <br className="hidden sm:block" />
          Real tools. Real projects. Mentorship. Direct placement into roles.
        </p>

        {/* THREE PATHWAY CARDS */}
        <div
          className={`mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto transition-all duration-700 delay-[600ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Card 1: Job Programs */}
          <Link
            to="/programs"
            className="group bg-white rounded-2xl border border-gray-200 p-6 text-left shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange to-brand-coral flex items-center justify-center mb-4">
              <Briefcase size={22} className="text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-gray-900 mb-1.5">Career Accelerator</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              6 AI role programs. ML Engineer. LLM Engineer. Agent Developer. Each one trains you for a specific job.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-orange group-hover:gap-2.5 transition-all">
              Explore Programs <ArrowRight size={14} />
            </span>
          </Link>

          {/* Card 2: Free Masterclass */}
          <a
            href={MASTERCLASS_URL}
            className="group bg-gradient-to-br from-brand-orange via-brand-coral to-brand-magenta rounded-2xl p-6 text-left shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <Play size={22} className="text-white" fill="currentColor" />
            </div>
            <h3 className="text-lg font-extrabold text-white mb-1.5">Free Masterclass</h3>
            <p className="text-sm text-white/85 leading-relaxed mb-4">
              Not ready to commit? Join our community and attend a free AI Tools Masterclass. No payment required.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-white group-hover:gap-2.5 transition-all">
              Join Free <ArrowRight size={14} />
            </span>
          </a>

          {/* Card 3: Direct Internship Placement */}
          <Link
            to="/internships"
            className="group bg-white rounded-2xl border border-gray-200 p-6 text-left shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-green flex items-center justify-center mb-4">
              <MapPin size={22} className="text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-gray-900 mb-1.5">Internship Placement</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Submit your resume. We vet, map, and place you directly into internships at AI companies.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-teal group-hover:gap-2.5 transition-all">
              Apply Now <ArrowRight size={14} />
            </span>
          </Link>
        </div>

        {/* Trust Bar */}
        <div
          className={`mt-16 transition-all duration-700 delay-[1000ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Mentors from
          </p>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-pink-50/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex mb-3 marquee-row-right-fast">
              <div className="flex shrink-0 items-center">
                {[...partnersRow1, ...partnersRow1].map((p, i) => (
                  <PartnerLogo key={`r1-${i}`} name={p.name} logo={p.logo} />
                ))}
              </div>
              <div className="flex shrink-0 items-center" aria-hidden="true">
                {[...partnersRow1, ...partnersRow1].map((p, i) => (
                  <PartnerLogo key={`r1d-${i}`} name={p.name} logo={p.logo} />
                ))}
              </div>
            </div>

            <div className="flex marquee-row-left-fast">
              <div className="flex shrink-0 items-center">
                {[...partnersRow2, ...partnersRow2].map((p, i) => (
                  <PartnerLogo key={`r2-${i}`} name={p.name} logo={p.logo} />
                ))}
              </div>
              <div className="flex shrink-0 items-center" aria-hidden="true">
                {[...partnersRow2, ...partnersRow2].map((p, i) => (
                  <PartnerLogo key={`r2d-${i}`} name={p.name} logo={p.logo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
