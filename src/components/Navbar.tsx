import { useState } from 'react';
import { Menu, X, Play } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const MASTERCLASS_URL = 'https://community.upliftai.pro/join?invitation_token=f428b930d629d809a0145adaa77f482ff6bc4bde-afeaad75-1e2b-473a-985d-9dd3ef56aaa7';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Logo />
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <Link
            to="/programs"
            className={`text-sm font-medium whitespace-nowrap transition-colors ${isActive('/programs') ? 'text-brand-orange' : 'text-gray-700 hover:text-gray-900'}`}
          >
            Job Programs
          </Link>
          <Link
            to="/how-it-works"
            className={`text-sm font-medium whitespace-nowrap transition-colors ${isActive('/how-it-works') ? 'text-brand-orange' : 'text-gray-700 hover:text-gray-900'}`}
          >
            How It Works
          </Link>
          <Link
            to="/internships"
            className={`text-sm font-medium whitespace-nowrap transition-colors ${isActive('/internships') ? 'text-brand-teal' : 'text-gray-700 hover:text-gray-900'}`}
          >
            Internships
          </Link>
          <Link
            to="/pricing"
            className={`text-sm font-medium whitespace-nowrap transition-colors ${isActive('/pricing') ? 'text-brand-orange' : 'text-gray-700 hover:text-gray-900'}`}
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium whitespace-nowrap transition-colors ${isActive('/about') ? 'text-brand-orange' : 'text-gray-700 hover:text-gray-900'}`}
          >
            About
          </Link>

          <div className="w-px h-5 bg-gray-200 mx-1" />

          <a
            href={MASTERCLASS_URL}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2 rounded-lg bg-brand-orange hover:bg-brand-orange/90 transition-all whitespace-nowrap"
          >
            <Play size={10} fill="currentColor" />
            Free Masterclass
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-gray-600"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pb-4">
          <Link to="/programs" onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900 border-b border-gray-50">Job Programs</Link>
          <Link to="/how-it-works" onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900 border-b border-gray-50">How It Works</Link>
          <Link to="/internships" onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900 border-b border-gray-50">Internships</Link>
          <Link to="/pricing" onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900 border-b border-gray-50">Pricing</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900 border-b border-gray-50">About</Link>
          <a href={MASTERCLASS_URL} onClick={() => setOpen(false)} className="mt-3 block text-center text-base font-semibold text-white px-6 py-3 rounded-lg bg-brand-orange">Free Masterclass</a>
        </div>
      )}
    </nav>
  );
}
