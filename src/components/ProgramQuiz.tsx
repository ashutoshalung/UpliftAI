import { useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

interface Question {
  question: string;
  options: { label: string; programs: number[] }[];
}

const questions: Question[] = [
  {
    question: 'What best describes your current experience with AI?',
    options: [
      { label: 'Complete beginner — I want to understand AI from scratch', programs: [1] },
      { label: 'I know the basics — I want to build real AI applications', programs: [2, 3] },
      { label: 'I can code — I want to level up with AI tools', programs: [4] },
      { label: 'I build AI — I want to deploy and ship products', programs: [5, 6] },
    ],
  },
  {
    question: 'What kind of work excites you most?',
    options: [
      { label: 'Training models and understanding how AI thinks', programs: [1] },
      { label: 'Building chatbots, search systems, and LLM apps', programs: [2] },
      { label: 'Automating workflows with AI agents', programs: [3] },
      { label: 'Coding faster and building full-stack apps', programs: [4] },
      { label: 'Deploying AI to production at scale', programs: [5] },
      { label: 'Launching AI products and startups', programs: [6] },
    ],
  },
  {
    question: 'What is your primary goal?',
    options: [
      { label: 'Land my first AI/ML role', programs: [1, 2] },
      { label: 'Transition into a higher-paying AI position', programs: [2, 3, 4] },
      { label: 'Become a full-stack AI engineer', programs: [4, 5] },
      { label: 'Build and launch my own AI product or startup', programs: [5, 6] },
    ],
  },
];

const programInfo: Record<number, { label: string; title: string; color: string; salary: string }> = {
  1: { label: 'LEARN', title: 'AI & ML Foundations', color: '#F97316', salary: '$65K–$95K' },
  2: { label: 'BUILD', title: 'LLM Applications & RAG', color: '#F43F5E', salary: '$75K–$120K' },
  3: { label: 'AUTOMATE', title: 'AI Agents & Automation', color: '#D946EF', salary: '$70K–$110K' },
  4: { label: 'CODE', title: 'AI-Powered Development', color: '#22C55E', salary: '$80K–$130K' },
  5: { label: 'DEPLOY', title: 'MLOps & Deployment', color: '#14B8A6', salary: '$85K–$140K' },
  6: { label: 'SHIP', title: 'AI Product Builder', color: '#EAB308', salary: '$90K–$150K+' },
};

export default function ProgramQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[][]>([]);
  const [done, setDone] = useState(false);
  const { ref, visible } = useInView();

  function handleAnswer(programs: number[]) {
    const newAnswers = [...answers, programs];
    setAnswers(newAnswers);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setDone(true);
    }
  }

  function reset() {
    setCurrentQ(0);
    setAnswers([]);
    setDone(false);
  }

  // Tally scores
  const scores: Record<number, number> = {};
  answers.flat().forEach((p) => {
    scores[p] = (scores[p] || 0) + 1;
  });
  const sorted = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .map(([k]) => Number(k));
  const topPrograms = sorted.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50/30">
      <div ref={ref} className={`max-w-3xl mx-auto px-4 sm:px-6 fade-up ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-magenta/10 text-brand-magenta text-xs font-semibold mb-4 uppercase tracking-wider">
            Find Your Path
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Which program is{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
              right for you?
            </span>
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Answer 3 quick questions. We'll recommend your starting point.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 sm:p-10">
          {!done ? (
            <>
              {/* Progress dots */}
              <div className="flex items-center justify-center gap-2 mb-8">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentQ ? 'w-8 bg-brand-orange' : i < currentQ ? 'w-2 bg-brand-orange/40' : 'w-2 bg-gray-200'
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Question {currentQ + 1} of {questions.length}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {questions[currentQ].question}
              </h3>

              <div className="space-y-3">
                {questions[currentQ].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt.programs)}
                    className="w-full text-left px-5 py-4 rounded-xl border-2 border-gray-100 hover:border-brand-orange/40 hover:bg-orange-50/30 transition-all duration-200 group"
                  >
                    <span className="text-base text-gray-700 group-hover:text-gray-900 font-medium">
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-coral flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-white">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your recommended programs</h3>
              <p className="text-gray-600 mb-8">Based on your answers, here's where to start:</p>

              <div className="space-y-4 max-w-md mx-auto">
                {topPrograms.map((num, i) => {
                  const info = programInfo[num];
                  return (
                    <div
                      key={num}
                      className="flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all duration-300"
                      style={{
                        borderColor: i === 0 ? info.color : `${info.color}40`,
                        background: i === 0 ? `linear-gradient(135deg, ${info.color}08, white)` : 'white',
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: info.color }}
                      >
                        <span className="text-lg font-black text-white">{num}</span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold uppercase tracking-wider" style={{ color: info.color }}>
                          {i === 0 ? '★ Best match' : `Also recommended`} — {info.label}
                        </div>
                        <p className="text-base font-bold text-gray-900">{info.title}</p>
                        <p className="text-sm text-gray-500">{info.salary}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-brand-orange to-brand-coral hover:shadow-lg transition-all"
                >
                  View Full Program Details <ArrowRight size={16} />
                </Link>
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
                >
                  <RotateCcw size={14} /> Retake
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
