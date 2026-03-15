import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const acceleratorLinks = [
  { label: 'The 6 Tiers', to: '/accelerator' },
  { label: 'Packages & Pricing', href: '#pricing' },
  { label: 'Where To Start', href: '#where-to-start' },
];

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Mentors', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Careers', href: '#' },
];

const getStartedLinks = [
  { label: 'AI Readiness Assessment', href: '#assessment' },
  { label: 'Enroll Now', href: '#pricing' },
  { label: 'Contact Us', href: '#' },
];

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: '#', label: 'Email' },
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
              {acceleratorLinks.map((l) => (
                <li key={l.label}>
                  {l.to ? (
                    <Link to={l.to} className="text-gray-400 text-sm hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  {l.to ? (
                    <Link to={l.to} className="text-gray-400 text-sm hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Get Started</h4>
            <ul className="space-y-3">
              {getStartedLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Uplift AI. Singapore.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
