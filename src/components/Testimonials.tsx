import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    quote: 'I went from zero ML knowledge to landing a Junior ML Engineer role in 4 months. The portfolio-first approach made all the difference.',
    name: 'Priya S.',
    role: 'Junior ML Engineer',
    program: 'Program 1',
    color: '#F97316',
  },
  {
    quote: 'The mentorship was incredible. My mentor from NUS helped me build a RAG chatbot that got 80+ GitHub stars. Recruiters started reaching out to me.',
    name: 'Marcus L.',
    role: 'LLM Engineer',
    program: 'Program 2',
    color: '#F43F5E',
  },
  {
    quote: 'I automated my entire company\'s reporting pipeline using n8n and CrewAI. My manager promoted me within 2 months of completing the program.',
    name: 'Aisha K.',
    role: 'AI Automation Engineer',
    program: 'Program 3',
    color: '#D946EF',
  },
  {
    quote: 'Claude Code and Cursor completely changed how I build. I shipped a SaaS product in 3 weeks that now has paying users.',
    name: 'Daniel R.',
    role: 'AI Software Engineer',
    program: 'Program 4',
    color: '#22C55E',
  },
  {
    quote: 'The placement support is real. They introduced me directly to the hiring manager at a Series B startup. No job boards, no applications.',
    name: 'Wei T.',
    role: 'MLOps Engineer',
    program: 'Program 5',
    color: '#14B8A6',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const { ref, visible } = useInView();

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  function go(dir: -1 | 1) {
    setAutoplay(false);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }

  const t = testimonials[current];

  return (
    <section className="py-20 bg-white">
      <div ref={ref} className={`max-w-4xl mx-auto px-4 sm:px-6 fade-up ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-semibold mb-4 uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What our students{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
              are saying
            </span>
          </h2>
        </div>

        <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 sm:p-12">
          <Quote size={40} className="text-gray-100 absolute top-6 left-6" />

          <div className="relative min-h-[180px] flex flex-col justify-center">
            <p
              key={current}
              className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium animate-fade-in"
            >
              "{t.quote}"
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: t.color }}
              >
                {t.name[0]}
              </div>
              <div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">
                  {t.role} · <span style={{ color: t.color }} className="font-semibold">{t.program}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Nav arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex items-center justify-between pointer-events-none px-2 sm:-mx-4">
            <button
              onClick={() => go(-1)}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={18} className="text-gray-600" />
            </button>
            <button
              onClick={() => go(1)}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight size={18} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setAutoplay(false); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-brand-orange' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
