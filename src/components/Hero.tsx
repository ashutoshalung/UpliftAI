import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ASSESSMENT_URL = '#assessment';

const partnersRow1 = [
  { name: 'Google DeepMind', slug: 'deepmind' },
  { name: 'Google', slug: 'google' },
  { name: 'Meta', slug: 'meta' },
  { name: 'Anthropic', slug: 'anthropic' },
];

const partnersRow2 = [
  { name: 'NUS', slug: null },
  { name: 'MIT', slug: null },
  { name: 'INSEAD', slug: null },
  { name: 'Stanford', slug: null },
  { name: 'IIT', slug: null },
];

function PartnerLogo({ name, slug }: { name: string; slug: string | null }) {
  return (
    <div className="flex-shrink-0 mx-3 sm:mx-5">
      <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-300 min-w-[120px]">
        <div className="flex-shrink-0 flex items-center justify-center">
          {slug ? (
            <img
              src={`https://cdn.simpleicons.org/${slug}`}
              alt={name}
              className="h-6 w-6 object-contain"
            />
          ) : (
            <div className="h-6 w-6 rounded bg-gray-200 flex items-center justify-center">
              <span className="text-[10px] font-bold text-gray-500">{name.charAt(0)}</span>
            </div>
          )}
        </div>
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
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 via-pink-50/40 to-white pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-200/30 via-pink-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-3 h-3 rounded-full bg-brand-orange/20 float-slow" />
        <div className="absolute top-40 right-[15%] w-2 h-2 rounded-full bg-brand-coral/25 float-medium" style={{ animationDelay: '1s' }} />
        <div className="absolute top-60 left-[25%] w-4 h-4 rounded-full bg-brand-yellow/15 float-fast" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 right-[20%] w-3 h-3 rounded-full bg-brand-magenta/15 float-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center">
        <div className={`mb-6 flex justify-center transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-widest">
            Singapore-based · Globally Connected
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight transition-all duration-700 delay-200 ${
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
          className={`mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-[400ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Most people learn AI. We make you <span className="font-semibold text-gray-700">employable</span> in AI.
          <br className="hidden sm:block" />
          6 tiers. Real tools. Proof-of-work. Internship placement.
          <br className="hidden sm:block" />
          Mentored by engineers from DeepMind, Google, Meta, and NUS.
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-[600ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href={ASSESSMENT_URL}
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta hover:shadow-xl hover:shadow-brand-coral/25 transition-all duration-300 hover:scale-[1.03]"
          >
            Find Your Tier →
          </a>
          <Link
            to="/accelerator"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            Explore The Accelerator
            <ArrowRight size={16} className="text-gray-400" />
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
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-orange-50/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-orange-50/90 to-transparent z-10 pointer-events-none" />

            <div className="flex mb-3 marquee-row-right">
              <div className="flex shrink-0 items-center">
                {[...partnersRow1, ...partnersRow1].map((p, i) => (
                  <PartnerLogo key={`r1-${i}`} name={p.name} slug={p.slug} />
                ))}
              </div>
              <div className="flex shrink-0 items-center" aria-hidden="true">
                {[...partnersRow1, ...partnersRow1].map((p, i) => (
                  <PartnerLogo key={`r1d-${i}`} name={p.name} slug={p.slug} />
                ))}
              </div>
            </div>

            <div className="flex marquee-row-left">
              <div className="flex shrink-0 items-center">
                {[...partnersRow2, ...partnersRow2].map((p, i) => (
                  <PartnerLogo key={`r2-${i}`} name={p.name} slug={p.slug} />
                ))}
              </div>
              <div className="flex shrink-0 items-center" aria-hidden="true">
                {[...partnersRow2, ...partnersRow2].map((p, i) => (
                  <PartnerLogo key={`r2d-${i}`} name={p.name} slug={p.slug} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
