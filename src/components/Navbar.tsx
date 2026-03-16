import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const ASSESSMENT_URL = 'https://equip.co/assessments/nrzee/';

function NavLink({ href, to, children, onClick }: {
  href?: string;
  to?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const location = useLocation();
  const navigate = useNavigate();

  if (to) {
    return (
      <Link to={to} onClick={onClick} className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">
        {children}
      </Link>
    );
  }

  const handleClick = (e: React.MouseEvent) => {
    onClick?.();
    if (href && location.pathname !== '/') {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <a href={href} className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors" onClick={handleClick}>
      {children}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          <a href="https://community.upliftai.pro/join?invitation_token=f428b930d629d809a0145adaa77f482ff6bc4bde-afeaad75-1e2b-473a-985d-9dd3ef56aaa7" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">Free Masterclass</a>
          <NavLink to="/accelerator">The Accelerator</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink to="/about">About</NavLink>

          <a
            href={ASSESSMENT_URL}
            className="text-sm font-semibold text-white px-5 py-2 rounded-full bg-gradient-to-r from-brand-orange to-brand-coral hover:shadow-lg hover:shadow-brand-coral/25 transition-all"
          >
            AI Readiness Assessment
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-600"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4">
          <a
            href="https://community.upliftai.pro/join?invitation_token=f428b930d629d809a0145adaa77f482ff6bc4bde-afeaad75-1e2b-473a-985d-9dd3ef56aaa7"
            onClick={() => setOpen(false)}
            className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900 border-b border-gray-50"
          >
            Free Masterclass
          </a>
          <Link
            to="/accelerator"
            onClick={() => setOpen(false)}
            className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900 border-b border-gray-50"
          >
            The Accelerator
          </Link>
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900 border-b border-gray-50"
          >
            Pricing
          </a>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900 border-b border-gray-50"
          >
            About
          </Link>
          <a
            href={ASSESSMENT_URL}
            onClick={() => setOpen(false)}
            className="mt-3 block text-center text-base font-semibold text-white px-6 py-3 rounded-full bg-gradient-to-r from-brand-orange to-brand-coral"
          >
            AI Readiness Assessment
          </a>
        </div>
      )}
    </nav>
  );
}
