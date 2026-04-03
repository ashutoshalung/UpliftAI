import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

function AnimatedStat({ target, suffix, prefix, label, color, visible }: {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  color: string;
  visible: boolean;
}) {
  const count = useCountUp(target, 1800, visible);
  return (
    <div>
      <div className={`text-4xl sm:text-5xl font-extrabold ${color}`}>
        {prefix}{count}{suffix}
      </div>
      <p className="mt-2 text-sm text-gray-500 font-semibold uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function SocialProof() {
  const { ref, visible } = useInView();

  return (
    <section className="py-12 bg-white">
      <div ref={ref} className={`max-w-5xl mx-auto px-4 sm:px-6 fade-up ${visible ? 'visible' : ''}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <AnimatedStat target={6} label="AI job programs" color="text-brand-orange" visible={visible} />
          <div>
            <div className="text-4xl sm:text-5xl font-extrabold text-[#1E1B4B]">$65K–$150K+</div>
            <p className="mt-2 text-sm text-gray-500 font-semibold uppercase tracking-wider">Target salaries</p>
          </div>
          <AnimatedStat target={5} label="Placement regions" color="text-brand-teal" visible={visible} />
          <div>
            <div className="text-4xl sm:text-5xl font-extrabold text-brand-magenta">1:1</div>
            <p className="mt-2 text-sm text-gray-500 font-semibold uppercase tracking-wider">Job mentorship</p>
          </div>
        </div>
      </div>
    </section>
  );
}
