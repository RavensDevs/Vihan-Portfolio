import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { bio } from '../data/bio';

export default function Hero() {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const headlineRef = useRef(null);


  // Headline entrance animation
  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 150);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 z-0">
        {/* Blueprint grid */}
        <div className="absolute inset-0 blueprint-grid z-5" />
      </div>

      {/* ── Content ── */}
      <div
        ref={headlineRef}
        className="relative z-20 px-6 md:px-16 max-w-[1280px] mx-auto w-full"
      >
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow label */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            <span className={`text-xs font-semibold tracking-[0.25em] uppercase ${isDark ? 'text-primary' : 'text-blue-700'}`}>
              {bio.tagline}
            </span>
          </div>

          {/* Main headline */}
          <h1 className={`font-bold leading-tight ${isDark ? 'text-on-background' : 'text-gray-900'}`}
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', letterSpacing: '0.02em' }}
          >
            {bio.fullName}
            <br />
            <span className="text-primary">— {bio.headline}</span>
          </h1>

          {/* Sub-headline */}
          <p
            className={`text-lg leading-relaxed max-w-2xl ${
              isDark ? 'text-on-surface-variant' : 'text-gray-600'
            }`}
          >
            {bio.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => navigate('/projects')}
              className="flex items-center gap-2 px-8 py-4 bg-[#1E90FF] text-white text-xs font-semibold tracking-widest uppercase hover:brightness-110 hover:gap-3 transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              VIEW PROJECTS <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo('experience')}
              className={`flex items-center gap-2 px-8 py-4 text-xs font-semibold tracking-widest uppercase border transition-all duration-300 ${
                isDark
                  ? 'border-outline/40 text-on-background hover:border-primary hover:text-primary'
                  : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-700'
              }`}
            >
              <GraduationCap size={14} />
              EDUCATION
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className={`px-8 py-4 text-xs font-semibold tracking-widest uppercase border transition-all duration-300 ${
                isDark
                  ? 'border-outline/40 text-on-background hover:border-primary hover:text-primary'
                  : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-700'
              }`}
            >
              GET IN TOUCH
            </button>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 pt-4">
            {bio.stats.slice(0, 3).map((stat) => (
              <div key={stat.label}>
                <div className={`text-2xl font-bold ${isDark ? 'text-on-background' : 'text-gray-900'}`}>
                  {stat.value}
                </div>
                <div className={`text-xs tracking-widest uppercase font-mono ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
