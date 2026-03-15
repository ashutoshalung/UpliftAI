import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const ASSESSMENT_URL = '#assessment';

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
      <Link to={to} onClick={onClick} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
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
    <a href={href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={handleClick}>
      {children}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/accelerator">The Accelerator</NavLink>
          <NavLink to="/about">About</NavLink>

          <a
            href={ASSESSMENT_URL}
            className="text-sm font-semibold text-white px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-coral hover:shadow-lg hover:shadow-brand-coral/25 transition-all"
          >
            Find Your Tier →
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
          <Link
            to="/accelerator"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm font-medium text-gray-600 hover:text-gray-900 border-b border-gray-50"
          >
            The Accelerator
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm font-medium text-gray-600 hover:text-gray-900 border-b border-gray-50"
          >
            About
          </Link>
          <a
            href={ASSESSMENT_URL}
            onClick={() => setOpen(false)}
            className="mt-3 block text-center text-sm font-semibold text-white px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-coral"
          >
            Find Your Tier →
          </a>
        </div>
      )}
    </nav>
  );
}
