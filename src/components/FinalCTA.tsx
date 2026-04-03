import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const MASTERCLASS_URL = 'https://community.upliftai.pro/join?invitation_token=f428b930d629d809a0145adaa77f482ff6bc4bde-afeaad75-1e2b-473a-985d-9dd3ef56aaa7';

export default function FinalCTA() {
  const { ref, visible } = useInView();

  return (
    <section className="py-20 px-4 sm:px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-brand-orange via-brand-coral to-brand-magenta p-10 sm:p-16 text-center fade-up ${visible ? 'visible' : ''}`}
      >
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Pick your target role.<br />We'll get you there.
        </h2>

        <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Choose your job program, submit your resume for direct placement, or join the free masterclass.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-gray-900 font-bold text-base hover:shadow-lg transition-all"
          >
            Explore the Career Accelerator
          </Link>
          <Link
            to="/internships"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all"
          >
            Direct Internship Placement
          </Link>
        </div>
        <div className="mt-4">
          <a
            href={MASTERCLASS_URL}
            className="inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors"
          >
            Or join the free Masterclass — no commitment needed
          </a>
        </div>
      </div>
    </section>
  );
}
