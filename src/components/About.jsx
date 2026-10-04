import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../context/ThemeContext';
import { bio } from '../data/bio';

export default function About() {
  const { isDark } = useTheme();
  const headerRef = useScrollAnimation();
  const photoRef = useScrollAnimation();
  const bioRef = useScrollAnimation();
  const statsRef = useScrollAnimation();

  return (
    <section
      id="about"
      className={`py-8 border-y ${
        isDark
          ? 'border-outline/10'
          : 'border-gray-200'
      }`}
    >
      <div className="px-4 md:px-8 max-w-[1220px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-8 flex items-center gap-6">
          <h2 className={`text-xs font-semibold tracking-[0.3em] uppercase ${isDark ? 'text-primary' : 'text-blue-700'}`}>
            About
          </h2>
          <div className={`h-px flex-grow ${isDark ? 'bg-outline/20' : 'bg-gray-200'}`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Profile photo */}
          <div ref={photoRef} className="reveal md:col-span-3 flex justify-start">
            <div className="relative w-52 h-52">
              {/* Spinning ring */}
              <div
                className="absolute -inset-3 rounded-full border border-primary/25"
                style={{ animation: 'spin 20s linear infinite' }}
              />
              <div
                className="absolute -inset-6 rounded-full border border-primary/10"
                style={{ animation: 'spin 30s linear infinite reverse' }}
              />
              {/* Photo */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-outline/20 grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
                <img
                  src={bio.profilePhoto}
                  alt={`${bio.fullName} — Mechanical Engineer`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div ref={bioRef} className="reveal delay-200 md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              <span className={`text-sm font-semibold tracking-widest uppercase ${isDark ? 'text-primary' : 'text-blue-700'}`}>
                Biography
              </span>
            </div>
            <h3 className={`text-3xl font-bold leading-tight ${isDark ? 'text-on-background' : 'text-gray-900'}`}>
              {bio.bioTitle}
            </h3>
            {bio.bioText.map((paragraph, i) => (
              <p key={i} className={`text-base leading-relaxed ${i === 0 ? (isDark ? 'text-on-surface' : 'text-gray-700') : (isDark ? 'text-on-surface-variant' : 'text-gray-600')}`}>
                {paragraph}
              </p>
            ))}

            {/* Competencies row */}
            <div className="flex flex-wrap gap-2 pt-2">
              {bio.competencies.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-mono px-3 py-1 border tracking-wider uppercase ${
                    isDark
                      ? 'border-primary/20 text-primary/80 bg-primary/5'
                      : 'border-blue-300 text-blue-700 bg-blue-50'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="reveal delay-300 md:col-span-4 grid grid-cols-2 gap-6">
            {bio.stats.map((s) => (
              <div
                key={s.label}
                className={`glass-card p-5 group hover:border-primary/30 transition-all duration-300`}
              >
                <div className={`text-3xl font-bold tracking-tight mb-1 group-hover:text-primary transition-colors duration-300 ${isDark ? 'text-on-background' : 'text-gray-900'}`}>
                  {s.value}
                </div>
                <div className={`text-xs font-mono tracking-widest uppercase ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
