import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { softwareTools, skillGroups } from '../data/skills';
import { useTheme } from '../context/ThemeContext';

function SkillBar({ name, level, isDark }) {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
      <span className={`text-base font-medium ${isDark ? 'text-on-surface' : 'text-gray-700'}`}>{name}</span>
      <span className={`text-sm font-mono ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}>{level}%</span>
      </div>
      <div className={`h-1 rounded-full overflow-hidden ${isDark ? 'bg-surface-container-high' : 'bg-gray-200'}`}>
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

// Extracted as standalone component so hook rules are satisfied
function SkillGroup({ group, delay, isDark }) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="reveal glass-card p-6 space-y-5"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className={`text-sm font-semibold tracking-[0.2em] uppercase mb-6 ${isDark ? 'text-primary' : 'text-blue-700'}`}>
        {group.category}
      </h3>
      {group.skills.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} isDark={isDark} />
      ))}
    </div>
  );
}

export default function Skills() {
  const { isDark } = useTheme();
  const headerRef = useScrollAnimation();

  // Duplicate tools array for seamless infinite ticker
  const tickerItems = [...softwareTools, ...softwareTools];

  return (
    <section id="skills" className="pt-8 pb-6 px-4 md:px-8 max-w-[1220px] mx-auto">
      {/* Section header */}
      <div ref={headerRef} className="reveal mb-8 flex items-center gap-6">
        <h2 className={`text-sm font-semibold tracking-[0.3em] uppercase ${isDark ? 'text-primary' : 'text-blue-700'}`}>
          Technical Skills
        </h2>
        <div className={`h-px flex-grow ${isDark ? 'bg-outline/20' : 'bg-gray-200'}`} />
      </div>

      {/* Software ticker */}
      <div className="overflow-hidden relative">
        <div className={`absolute left-0 top-0 bottom-0 w-16 z-10 ${isDark ? 'bg-gradient-to-r from-background' : 'bg-gradient-to-r from-[#f4f6f9]'} to-transparent pointer-events-none`} />
        <div className={`absolute right-0 top-0 bottom-0 w-16 z-10 ${isDark ? 'bg-gradient-to-l from-background' : 'bg-gradient-to-l from-[#f4f6f9]'} to-transparent pointer-events-none`} />
        <div className="ticker-track">
          {tickerItems.map((tool, i) => (
            <span
              key={i}
              className={`mx-3 shrink-0 text-xs font-mono border px-4 py-2 tracking-widest uppercase whitespace-nowrap ${isDark
                  ? 'border-outline/20 text-on-surface-variant'
                  : 'border-gray-200 text-gray-500'
                }`}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
