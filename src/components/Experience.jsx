import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { experienceData, achievementsData } from '../data/experience';
import { useTheme } from '../context/ThemeContext';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

function TimelineItem({ item, index, isDark }) {
  const ref = useScrollAnimation({ threshold: 0.1 });
  const isWork = item.type === 'work';

  return (
    <div
      ref={ref}
      className="reveal relative flex gap-6"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 z-10 transition-all duration-300 ${
          isWork
            ? isDark ? 'border-primary/60 bg-surface-container text-primary' : 'border-blue-500/60 bg-blue-50 text-blue-600'
            : isDark ? 'border-tertiary/60 bg-surface-container text-tertiary' : 'border-amber-500/60 bg-amber-50 text-amber-600'
        }`}>
          {isWork ? <Briefcase size={16} /> : <GraduationCap size={16} />}
        </div>
        {index < experienceData.length - 1 && (
          <div className={`w-px flex-1 mt-2 ${isDark ? 'bg-outline/20' : 'bg-gray-200'}`} />
        )}
      </div>

      {/* Card */}
      <div className={`glass-card p-6 mb-6 flex-1 group hover:border-primary/30 transition-all duration-300`}>
        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
          <div>
            <h3 className={`text-xl font-semibold group-hover:text-primary transition-colors duration-300 ${isDark ? 'text-on-background' : 'text-gray-900'}`}>
              {item.role}
            </h3>
            <p className={`text-base font-medium ${isDark ? 'text-primary/80' : 'text-blue-600'}`}>
              {item.organization}
            </p>
          </div>
          <div className="text-right">
            <span className={`text-sm font-mono block ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}>
              {item.period}
            </span>
            <span className={`text-sm font-mono ${isDark ? 'text-on-surface-variant/60' : 'text-gray-400'}`}>
              {item.location}
            </span>
          </div>
        </div>

        <p className={`text-base leading-relaxed mb-4 ${isDark ? 'text-on-surface-variant' : 'text-gray-600'}`}>
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {item.highlights.map((h) => (
            <span
              key={h}
              className={`text-xs font-mono px-2 py-1 border ${
                isDark
                  ? 'border-outline/20 text-on-surface-variant bg-surface-container'
                  : 'border-gray-200 text-gray-600 bg-gray-50'
              }`}
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AchievementCard({ achievement, index, isDark }) {
  const ref = useScrollAnimation({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`reveal glass-card p-5 flex gap-4 items-start hover:border-tertiary/30 transition-all duration-300`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
        isDark ? 'bg-tertiary/10 text-tertiary' : 'bg-amber-50 text-amber-600'
      }`}>
        <Award size={16} />
      </div>
      <div>
        <h4 className={`text-base font-semibold mb-0.5 ${isDark ? 'text-on-background' : 'text-gray-900'}`}>
          {achievement.title}
        </h4>
        <p className={`text-sm font-mono mb-2 ${isDark ? 'text-tertiary/80' : 'text-amber-600'}`}>
          {achievement.issuer} · {achievement.year}
        </p>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}>
          {achievement.description}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  const { isDark } = useTheme();
  const headerRef = useScrollAnimation();
  const awardsHeaderRef = useScrollAnimation();

  return (
    <section id="experience" className="pt-8 pb-8 px-4 md:px-8 max-w-[1220px] mx-auto" style={{ scrollMarginTop: '80px' }}>
      {/* Header */}
      <div ref={headerRef} className="reveal mb-8 flex items-center gap-6">
        <h2 className={`text-sm font-semibold tracking-[0.3em] uppercase ${isDark ? 'text-primary' : 'text-blue-700'}`}>
          Experience & Education
        </h2>
        <div className={`h-px flex-grow ${isDark ? 'bg-outline/20' : 'bg-gray-200'}`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Timeline */}
        <div className="lg:col-span-2">
          {experienceData.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} isDark={isDark} />
          ))}
        </div>

        {/* Awards sidebar */}
        <div>
          <div ref={awardsHeaderRef} className="reveal mb-6 flex items-center gap-4">
            <span className={`text-sm font-semibold tracking-[0.25em] uppercase ${isDark ? 'text-tertiary' : 'text-amber-600'}`}>
              Achievements
            </span>
            <div className={`h-px flex-grow ${isDark ? 'bg-outline/20' : 'bg-gray-200'}`} />
          </div>
          <div className="space-y-4">
            {achievementsData.map((a, i) => (
              <AchievementCard key={a.id} achievement={a} index={i} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
