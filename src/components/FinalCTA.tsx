import { useInView } from '../hooks/useInView';

const ASSESSMENT_URL = 'https://equip.co/assessments/nrzee/';

export default function FinalCTA() {
  const { ref, visible } = useInView();

  return (
    <section className="py-20 px-4 sm:px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta p-10 sm:p-16 text-center relative overflow-hidden scale-in ${visible ? 'visible' : ''}`}
      >
        {/* Animated background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,transparent_60%)]" />
        <div className="absolute top-[-50px] right-[-50px] w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl animate-orb pointer-events-none" />
        <div className="absolute bottom-[-50px] left-[-50px] w-[250px] h-[250px] bg-white/5 rounded-full blur-2xl animate-orb-reverse pointer-events-none" />

        <div className="relative">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Still deciding?
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            The AI Job Readiness Assessment is free. It takes 30 minutes.
            You'll get your AI readiness score, your recommended starting program,
            a personalised gap analysis, and a clear action plan.
          </p>

          <p className="mt-4 text-lg text-white/70 font-semibold">
            No payment. No commitment. Just clarity.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ASSESSMENT_URL}
              className="cta-glow inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-gray-900 font-bold text-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            >
              Take the AI Readiness Assessment →
            </a>
            <button
              onClick={() => document.getElementById('talent-stack')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              Explore The Programs →
            </button>
          </div>
          <div className="mt-4">
            <a
              href="https://community.upliftai.pro/join?invitation_token=f428b930d629d809a0145adaa77f482ff6bc4bde-afeaad75-1e2b-473a-985d-9dd3ef56aaa7"
              className="inline-flex items-center gap-2 text-base font-bold text-white/80 hover:text-white transition-colors"
            >
              Join our community & attend the free AI Tools Masterclass →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
