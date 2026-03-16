import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ASSESSMENT_URL = 'https://equip.co/assessments/nrzee/';

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
      <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-300 min-w-[130px]">
        <img
          src={logo}
          alt={name}
          className="h-10 w-auto object-contain flex-shrink-0 max-w-[44px]"
        />
        <span className="text-base font-semibold text-gray-700 whitespace-nowrap">{name}</span>
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
    <section className="relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 via-pink-50/40 to-white pointer-events-none" />

      {/* Animated gradient orbs */}
      <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] bg-gradient-to-br from-brand-orange/15 via-brand-coral/10 to-transparent rounded-full blur-3xl pointer-events-none animate-orb" />
      <div className="absolute top-[-100px] right-[-150px] w-[500px] h-[500px] bg-gradient-to-bl from-brand-magenta/10 via-pink-200/15 to-transparent rounded-full blur-3xl pointer-events-none animate-orb-reverse" />
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-t from-brand-coral/8 via-brand-orange/5 to-transparent rounded-full blur-3xl pointer-events-none animate-orb-slow" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-3 h-3 rounded-full bg-brand-orange/20 float-slow" />
        <div className="absolute top-40 right-[15%] w-2 h-2 rounded-full bg-brand-coral/25 float-medium" style={{ animationDelay: '1s' }} />
        <div className="absolute top-60 left-[25%] w-4 h-4 rounded-full bg-brand-yellow/15 float-fast" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 right-[20%] w-3 h-3 rounded-full bg-brand-magenta/15 float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-32 right-[35%] w-2.5 h-2.5 rounded-full bg-brand-green/15 float-medium" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-60 left-[18%] w-2 h-2 rounded-full bg-brand-teal/20 float-fast" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center">
        <div className={`mb-6 flex justify-center transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-widest">
            Singapore-based · Globally Connected
          </span>
        </div>

        <h1
          className={`font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight transition-all duration-700 delay-200 ${
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
          className={`mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-[400ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Most people learn AI. We make you <span className="font-semibold text-gray-700">employable</span> in AI.
          <br className="hidden sm:block" />
          6 tiers. Real tools. Proof-of-work. Internship placement.
          <br className="hidden sm:block" />
          Mentored by engineers from DeepMind, Google, Meta, and NUS.
        </p>

        {/* Triple CTA — three clear paths */}
        <div
          className={`mt-10 transition-all duration-700 delay-[600ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ASSESSMENT_URL}
              className="cta-glow inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-lg font-bold bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta hover:shadow-xl hover:shadow-brand-coral/25 transition-all duration-300 hover:scale-[1.03]"
            >
              AI Job Readiness Assessment →
            </a>
            <button
              onClick={() => document.getElementById('talent-stack')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-brand-orange/30 hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
            >
              Explore The Tiers
              <ArrowRight size={18} className="text-gray-400" />
            </button>
          </div>
          <div className="mt-4 flex justify-center">
            <a
              href="https://community.upliftai.pro/join?invitation_token=f428b930d629d809a0145adaa77f482ff6bc4bde-afeaad75-1e2b-473a-985d-9dd3ef56aaa7"
              className="inline-flex items-center gap-2 text-base font-bold text-brand-orange hover:underline transition-colors"
            >
              Join our community & attend the free AI Tools Masterclass →
            </a>
          </div>
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
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-orange-50/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-orange-50/90 to-transparent z-10 pointer-events-none" />

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
