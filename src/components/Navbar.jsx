import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Download, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { bio } from '../data/bio';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Referrals', to: '/referrals' },
];

export default function Navbar() {
  const { isDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/' && !location.hash;
    if (to.startsWith('/#')) return location.pathname === '/' && location.hash === to.replace('/', '');
    return location.pathname === to;
  };

  const handleNavClick = (to) => {
    setMenuOpen(false);
    // If it's a hash link, handle cross-page navigation
    if (to.startsWith('/#')) {
      const id = to.replace('/#', '');
      if (location.pathname === '/') {
        // Already on home page — just scroll
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to home page first, then scroll after mount
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-background/90 backdrop-blur-md border-b border-outline/20 shadow-lg shadow-black/20'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg shadow-gray-200/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center w-full px-3 md:px-6 h-20 max-w-[1220px] mx-auto">
        {/* Brand */}
        <Link
          to="/"
          className={`text-[1.8rem] font-bold tracking-tighter transition-colors duration-200 ${
            isDark ? 'text-on-background hover:text-primary' : 'text-gray-900 hover:text-blue-700'
          }`}
        >
          {bio.brandName.replace(bio.brandHighlight, '')}<span className="text-primary">{bio.brandHighlight}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => {
            const active = isActive(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`text-[0.98rem] font-medium tracking-wide transition-all duration-200 relative group ${
                  active
                    ? 'text-primary font-bold'
                    : isDark
                    ? 'text-on-surface-variant hover:text-primary'
                    : 'text-gray-600 hover:text-blue-700'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Download CV — glowing button */}
          <a
            href="/cv.pdf"
            download
            className={`hidden md:flex items-center gap-2 px-4 py-2 text-[0.7rem] font-semibold tracking-widest uppercase border transition-all duration-300 relative overflow-hidden group ${
              isDark
                ? 'border-primary/60 text-primary hover:bg-primary/10 shadow-[0_0_12px_rgba(165,200,255,0.25)] hover:shadow-[0_0_20px_rgba(165,200,255,0.4)]'
                : 'border-blue-500/60 text-blue-700 hover:bg-blue-50 shadow-[0_0_12px_rgba(30,144,255,0.2)] hover:shadow-[0_0_20px_rgba(30,144,255,0.35)]'
            }`}
          >
            <span className="absolute inset-0 bg-primary/5 animate-pulse" />
            <Download size={14} className="relative z-10" />
            <span className="relative z-10">Download CV</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            className={`md:hidden p-2 transition-colors duration-200 ${
              isDark ? 'text-on-surface-variant hover:text-primary' : 'text-gray-600 hover:text-blue-700'
            }`}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        } ${isDark ? 'bg-surface-container-lowest border-b border-outline/20' : 'bg-white border-b border-gray-200'}`}
      >
        <div className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`py-3 px-4 text-base font-medium tracking-wide border-l-2 transition-all duration-200 ${
                  active
                    ? 'border-primary text-primary bg-primary/5'
                    : isDark
                    ? 'border-transparent text-on-surface-variant hover:border-primary/40 hover:text-primary'
                    : 'border-transparent text-gray-600 hover:border-blue-500/40 hover:text-blue-700'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {/* Education link — mobile only */}
          <Link
            to="/#experience"
            onClick={() => handleNavClick('/#experience')}
            className={`py-3 px-4 text-base font-medium tracking-wide border-l-2 transition-all duration-200 flex items-center gap-2 ${
              isDark
                ? 'border-transparent text-on-surface-variant hover:border-primary/40 hover:text-primary'
                : 'border-transparent text-gray-600 hover:border-blue-500/40 hover:text-blue-700'
            }`}
          >
            <GraduationCap size={16} /> Education
          </Link>
          {/* Download CV — mobile only */}
          <a
            href="/cv.pdf"
            download
            className={`mt-2 py-3 px-4 text-base font-medium tracking-wide border-l-2 transition-all duration-200 flex items-center gap-2 ${
              isDark
                ? 'border-primary text-primary'
                : 'border-blue-500 text-blue-700'
            }`}
          >
            <Download size={16} /> Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
