import { useInView } from '../hooks/useInView';

export default function Problem() {
  const { ref, visible } = useInView();

  return (
    <section className="relative py-20 bg-[#1E1B4B]">
      <div ref={ref} className={`relative max-w-3xl mx-auto px-4 sm:px-6 text-center fade-up ${visible ? 'visible' : ''}`}>
        <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
          You've done the tutorials. Watched the YouTube playlists.
          <br className="hidden sm:block" />
          Maybe even built a chatbot.
        </p>

        <p className="mt-8 text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white leading-tight">
          But when someone asks{' '}
          <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">"What have you shipped?"</span>
          {' '}&mdash; you go quiet.
        </p>

        <div className="mt-8 space-y-4 text-xl sm:text-2xl text-gray-400 leading-relaxed">
          <p>
            That's the gap. Not between you and AI knowledge.
            <br className="hidden sm:block" />
            Between you and being <span className="font-semibold text-white">hireable</span> in AI.
          </p>
          <p>
            Companies don't want people who "know AI."
            <br className="hidden sm:block" />
            They want people who can <span className="font-semibold text-gray-200">build, deploy, and prove it.</span>
          </p>
        </div>

        <div className="mt-10">
          <div className="inline-block px-6 py-3 rounded-xl border border-brand-orange/30 bg-brand-orange/10">
            <span className="text-brand-orange font-extrabold text-xl sm:text-2xl">We close that gap.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
