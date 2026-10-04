import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useSmoothScroll } from '../context/SmoothScrollContext';
import { bio } from '../data/bio';

export default function Hero() {
  const { isDark } = useTheme();
  const scrollToTarget = useSmoothScroll();
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
    const target = document.getElementById(id);
    if (target) scrollToTarget(target);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden py-28"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 blueprint-grid z-5" />
        <motion.div
          className={`absolute -left-24 top-24 h-72 w-72 rounded-full blur-3xl ${isDark ? 'bg-primary/10' : 'bg-blue-200/50'}`}
          animate={{ x: [0, 20, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`absolute right-0 bottom-10 h-80 w-80 rounded-full blur-3xl ${isDark ? 'bg-cyan-400/10' : 'bg-sky-200/60'}`}
          animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* ── Content ── */}
      <motion.div
        ref={headlineRef}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-20 px-4 md:px-8 max-w-[1220px] mx-auto w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_320px] gap-0 items-center">
          <div className="max-w-4xl space-y-5">
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-px bg-primary" />
            <span className={`text-sm font-semibold tracking-[0.25em] uppercase ${isDark ? 'text-primary' : 'text-blue-700'}`}>
              {bio.tagline}
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: 'easeOut' }}
            className={`font-bold leading-[0.96] ${isDark ? 'text-on-background' : 'text-gray-900'}`}
            style={{ fontSize: 'clamp(2.3rem, 5vw, 4.6rem)', letterSpacing: '0.02em' }}
          >
            {bio.firstName}
            <br />
            {bio.secondName}
            <br />
            <span className="text-primary text-[0.6em]">{bio.headline}</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className={`text-xl leading-relaxed max-w-2xl ${
              isDark ? 'text-on-surface-variant' : 'text-gray-600'
            }`}
          >
            {bio.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="flex flex-wrap gap-4 pt-4"
          >
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
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="flex gap-8 pt-4"
          >
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
          </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center md:justify-start md:-translate-x-24 lg:-translate-x-28"
          >
            <div className="relative w-48 h-60 md:w-72 md:h-88 lg:w-80 lg:h-96">
              <div
                className="absolute -inset-3 rounded-[999px] border border-primary/25"
                style={{ animation: 'spin 20s linear infinite' }}
              />
              <div
                className="absolute -inset-6 rounded-[999px] border border-primary/10"
                style={{ animation: 'spin 30s linear infinite reverse' }}
              />
              <div className="w-full h-full rounded-[999px] overflow-hidden border-2 border-outline/20 grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
                <img
                  src={bio.profilePhoto}
                  alt={`${bio.fullName} — Mechanical Engineer`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
