import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const LOGO = 'https://i.ibb.co/60dxwj2m/VYORA-GROWTH-1.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/workshops', label: 'Workshops' },
  { to: '/portfolio', label: 'Work' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div
          className={`flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled
              ? 'glass-strong px-4 py-2 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]'
              : 'px-2 py-2'
          }`}
        >
          <Link to="/" className="flex items-center gap-2 pl-1">
            <img src={LOGO} alt="Vyora Growth" className="h-9 w-9 rounded-full object-cover ring-1 ring-cream-50/20" />
            <div className="leading-tight">
              <div className="font-display text-cream-50 text-lg tracking-tight">Vyora Growth</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-cream-50/50">Brand Banega • Business Badhega</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm rounded-full transition-colors ${
                    isActive ? 'text-cream-50 bg-cream-50/10' : 'text-cream-50/70 hover:text-cream-50'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block"><ThemeToggle compact /></div>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full bg-cream-50 text-ink-950 hover:bg-cream-100 transition"
            >
              Book Call <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-cream-50/15"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-3 mx-5">
          <div className="glass-strong rounded-3xl p-4 flex flex-col">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-2xl text-base ${isActive ? 'text-cream-50 bg-cream-50/10' : 'text-cream-50/80'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-3 flex items-center gap-2">
              <ThemeToggle />
              <Link to="/contact" className="btn-primary flex-1 justify-center">Book Free Consultation</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
