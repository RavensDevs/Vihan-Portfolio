import { Linkedin, Github, FileText, ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { bio } from '../data/bio';
import { useSmoothScroll } from '../context/SmoothScrollContext';

import { Link, useLocation, useNavigate } from 'react-router-dom';

const footerLinks = [
  { label: 'LinkedIn', icon: Linkedin, href: bio.socialLinks.linkedin },
  { label: 'GitHub', icon: Github, href: bio.socialLinks.github },
  { label: 'Resume', icon: FileText, href: bio.socialLinks.resume, download: true },
];

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  const { isDark } = useTheme();
  const scrollTo = useSmoothScroll();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTop = () => scrollTo(0);

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');

      if (location.pathname === '/') {
        // Already on home page — just scroll
        const el = document.getElementById(id);
        if (el) scrollTo(el);
      } else {
        // Navigate to home page first, then scroll after mount
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) scrollTo(el);
        }, 100);
      }
    }
  };

  return (
    <footer className={`border-t ${isDark ? 'bg-background border-outline/20' : 'bg-white border-gray-200'}`}>
      <div className="px-4 md:px-8 max-w-[1220px] mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-outline/10">
          {/* Brand column */}
          <div className="space-y-4">
            <div className={`text-2xl font-bold tracking-tighter ${isDark ? 'text-on-background' : 'text-gray-900'}`}>
              {bio.brandName.replace(bio.brandHighlight, '')}<span className="text-primary">{bio.brandHighlight}</span>
            </div>
            <p className={`text-xs font-mono tracking-wide leading-relaxed ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}>
              {bio.footerTagline}
              <br />
              {bio.location}
            </p>
            <div className="flex gap-3">
              {footerLinks.map(({ label, icon: Icon, href, download }) => (
                <a
                  key={label}
                  href={href}
                  {...(download ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
                  aria-label={label}
                  className={`w-9 h-9 rounded-full glass-card flex items-center justify-center transition-all duration-200 hover:border-primary/40 hover:text-primary hover:scale-110 ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav column */}
          <div>
            <h4 className={`text-xs font-mono tracking-[0.2em] uppercase mb-4 ${isDark ? 'text-primary' : 'text-blue-700'}`}>
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-xs font-mono tracking-wide transition-colors duration-200 ${
                    isDark ? 'text-on-surface-variant hover:text-primary' : 'text-gray-500 hover:text-blue-600'
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Expertise column */}
          <div>
            <h4 className={`text-xs font-mono tracking-[0.2em] uppercase mb-4 ${isDark ? 'text-primary' : 'text-blue-700'}`}>
              Specializations
            </h4>
            <div className="space-y-2">
              {bio.specializations.map((s) => (
                <div
                  key={s}
                  className={`text-xs font-mono tracking-wide ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}
                >
                  · {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4">
          <p className={`text-xs font-mono tracking-widest uppercase ${isDark ? 'text-on-surface-variant' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} {bio.copyrightName}. All Rights Reserved.
          </p>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className={`w-9 h-9 rounded-full glass-card flex items-center justify-center transition-all duration-200 hover:border-primary/40 hover:text-primary hover:-translate-y-1 ${isDark ? 'text-on-surface-variant' : 'text-gray-400'}`}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
