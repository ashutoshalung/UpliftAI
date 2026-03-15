import { useInView } from '../hooks/useInView';

const ASSESSMENT_URL = '#assessment';

export default function FinalCTA() {
  const { ref, visible } = useInView();

  return (
    <section className="py-20 px-4 sm:px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta p-10 sm:p-16 text-center relative overflow-hidden scale-in ${visible ? 'visible' : ''}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,transparent_60%)]" />

        <div className="relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Still deciding?
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            The AI readiness assessment is free. It takes 5 minutes.
            You'll get your AI readiness score, your recommended starting tier,
            a personalised gap analysis, and a clear action plan.
          </p>

          <p className="mt-4 text-white/70 font-semibold">
            No payment. No commitment. Just clarity.
          </p>

          <a
            href={ASSESSMENT_URL}
            className="mt-8 inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-gray-900 font-bold text-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
          >
            Find Your Tier →
          </a>
        </div>
      </div>
    </section>
  );
}
