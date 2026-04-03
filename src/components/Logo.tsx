import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'default' | 'large';
}

const sizeConfig = {
  default: {
    textClass: 'text-2xl',
    svgWidth: 14,
    svgHeight: 6,
    svgBottom: '1px',
    svgLeft: '1px',
    strokeWidth: 3.5,
  },
  large: {
    textClass: 'text-4xl',
    svgWidth: 20,
    svgHeight: 9,
    svgBottom: '-4px',
    svgLeft: '2px',
    strokeWidth: 4.5,
  },
};

export default function Logo({ variant = 'dark', size = 'default' }: LogoProps) {
  const config = sizeConfig[size];

  return (
    <Link to="/" className="flex items-center group flex-shrink-0">
      <span
        className={`${config.textClass} font-extrabold tracking-tight transition-transform group-hover:scale-105 whitespace-nowrap ${
          variant === 'light' ? 'text-white' : 'text-gray-900'
        }`}
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        <span className="relative inline-block" style={{ letterSpacing: '-0.03em' }}>
          u
          <svg
            className="absolute"
            width={config.svgWidth}
            height={config.svgHeight}
            viewBox="0 0 14 6"
            fill="none"
            style={{ bottom: config.svgBottom, left: config.svgLeft }}
          >
            <path
              d="M1 1 Q7 5 13 1"
              stroke="url(#orangeGradient)"
              strokeWidth={config.strokeWidth}
              strokeLinecap="round"
              fill="none"
            />
            <defs>
              <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6B35" />
                <stop offset="100%" stopColor="#FF8E53" />
              </linearGradient>
            </defs>
          </svg>
        </span><span style={{ letterSpacing: '-0.03em' }}>plift</span>
        <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
          ai
        </span>
      </span>
    </Link>
  );
}
