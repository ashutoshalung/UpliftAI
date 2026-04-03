import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const MASTERCLASS_URL = 'https://community.upliftai.pro/join?invitation_token=f428b930d629d809a0145adaa77f482ff6bc4bde-afeaad75-1e2b-473a-985d-9dd3ef56aaa7';

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@upliftai.pro', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E1B4B] text-white">
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
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <s.icon size={18} className="text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Job Programs</h4>
            <ul className="space-y-3">
              <li><Link to="/programs" className="text-gray-400 text-sm hover:text-white transition-colors">The 6 Programs</Link></li>
              <li><Link to="/pricing" className="text-gray-400 text-sm hover:text-white transition-colors">Packages & Pricing</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 text-sm hover:text-white transition-colors">How It Works</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/internships" className="text-gray-400 text-sm hover:text-white transition-colors">Internships & Placements</Link></li>
              <li><a href="mailto:hello@upliftai.pro" className="text-gray-400 text-sm hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Get Started</h4>
            <ul className="space-y-3">
              <li><a href={MASTERCLASS_URL} className="text-gray-400 text-sm hover:text-white transition-colors">Free Masterclass</a></li>
              <li><Link to="/pricing" className="text-gray-400 text-sm hover:text-white transition-colors">Enroll Now</Link></li>
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
