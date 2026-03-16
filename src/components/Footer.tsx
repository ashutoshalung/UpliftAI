import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

const ASSESSMENT_URL = 'https://equip.co/assessments/nrzee/';

function ScrollLink({ to, hash, children }: { to?: string; hash?: string; children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  if (to) {
    return (
      <Link to={to} className="text-gray-400 text-sm hover:text-white transition-colors">
        {children}
      </Link>
    );
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!hash) return;

    if (location.pathname === '/') {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <button onClick={handleClick} className="text-gray-400 text-sm hover:text-white transition-colors text-left">
      {children}
    </button>
  );
}

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@upliftai.pro', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1535] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building AI-ready capability at global scale. Singapore-based, globally connected.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <s.icon size={18} className="text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">The Accelerator</h4>
            <ul className="space-y-3">
              <li><ScrollLink to="/accelerator">The 6 Programs</ScrollLink></li>
              <li><ScrollLink hash="pricing">Packages & Pricing</ScrollLink></li>
              <li><ScrollLink hash="where-to-start">Where To Start</ScrollLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li><ScrollLink to="/about">About Us</ScrollLink></li>
              <li><ScrollLink hash="mentors">Our Mentors</ScrollLink></li>
              <li><a href="mailto:hello@upliftai.pro" className="text-gray-400 text-sm hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Get Started</h4>
            <ul className="space-y-3">
              <li><a href={ASSESSMENT_URL} className="text-gray-400 text-sm hover:text-white transition-colors">AI Readiness Assessment</a></li>
              <li><ScrollLink hash="pricing">Enroll Now</ScrollLink></li>
              <li><a href="mailto:hello@upliftai.pro" className="text-gray-400 text-sm hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Uplift AI. Singapore.
          </p>
        </div>
      </div>
    </footer>
  );
}
