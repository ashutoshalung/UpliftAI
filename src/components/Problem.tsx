import { useInView } from '../hooks/useInView';

export default function Problem() {
  const { ref, visible } = useInView();

  return (
    <section className="relative py-24 bg-[#0f172a] overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-[-100px] left-[-50px] w-[400px] h-[400px] bg-gradient-to-br from-brand-orange/8 via-brand-coral/5 to-transparent rounded-full blur-3xl pointer-events-none animate-orb" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[350px] h-[350px] bg-gradient-to-tl from-brand-magenta/8 via-brand-coral/5 to-transparent rounded-full blur-3xl pointer-events-none animate-orb-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-brand-orange/4 via-brand-coral/3 to-brand-magenta/4 rounded-full blur-3xl pointer-events-none animate-orb-slow" />

      <div ref={ref} className={`relative max-w-3xl mx-auto px-4 sm:px-6 text-center fade-up ${visible ? 'visible' : ''}`}>
        <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
          You've done the tutorials. Watched the YouTube playlists.
          <br className="hidden sm:block" />
          Maybe even built a chatbot.
        </p>

        <p className="mt-8 text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white leading-tight">
          But when someone asks{' '}
          <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
            "What have you shipped?"
          </span>
          {' '}— you go quiet.
        </p>

        <div className="mt-10 space-y-5 text-xl sm:text-2xl text-gray-400 leading-relaxed">
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

        <div className="mt-12">
          <div className="inline-block px-8 py-4 rounded-full border border-brand-orange/30 bg-brand-orange/10">
            <span className="text-brand-orange font-bold text-xl sm:text-2xl">We close that gap.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
