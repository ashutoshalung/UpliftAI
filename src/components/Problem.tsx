import { useInView } from '../hooks/useInView';

export default function Problem() {
  const { ref, visible } = useInView();

  return (
    <section className="py-20 bg-[#0f172a] overflow-hidden">
      <div ref={ref} className={`max-w-3xl mx-auto px-4 sm:px-6 text-center fade-up ${visible ? 'visible' : ''}`}>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          You've done the tutorials. Watched the YouTube playlists.
          <br className="hidden sm:block" />
          Maybe even built a chatbot.
        </p>

        <p className="mt-8 text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
          But when someone asks{' '}
          <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
            "What have you shipped?"
          </span>
          {' '}— you go quiet.
        </p>

        <div className="mt-10 space-y-4 text-lg text-gray-400 leading-relaxed">
          <p>
            That's the gap. Not between you and AI knowledge.
            <br className="hidden sm:block" />
            Between you and being <span className="font-bold text-white">hireable</span> in AI.
          </p>
          <p>
            Companies don't want people who "know AI."
            <br className="hidden sm:block" />
            They want people who can <span className="font-semibold text-gray-200">build, deploy, and prove it.</span>
          </p>
        </div>

        <div className="mt-10">
          <div className="inline-block px-6 py-3 rounded-full border border-brand-orange/30 bg-brand-orange/10">
            <span className="text-brand-orange font-bold text-lg">We close that gap.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
