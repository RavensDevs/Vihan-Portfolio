import { useEffect } from 'react';
import { X, Cpu, Settings, Code, Factory } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const techIconMap = {
  developer_board: Cpu,
  settings_input_component: Settings,
  code: Code,
  precision_manufacturing: Factory,
};

export default function ProjectModal({ project, onClose }) {
  const { isDark } = useTheme();

  // Lock body scroll + ESC key
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 backdrop-blur-sm transition-opacity duration-300 ${
          isDark ? 'bg-background/60' : 'bg-black/30'
        }`}
        onClick={onClose}
      />

      {/* Panel — centered */}
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] shadow-2xl border overflow-y-auto transition-transform duration-500 ease-out ${
          isDark
            ? 'bg-surface-container-low border-outline/20'
            : 'bg-white border-gray-200'
        }`}
        style={{ scrollbarWidth: 'none' }}
      >
        {/* Sticky top bar */}
        <div
          className={`sticky top-0 z-[110] flex items-center justify-between px-6 py-3 border-b backdrop-blur-md ${
            isDark
              ? 'bg-surface-container-low/90 border-outline/20'
              : 'bg-white/90 border-gray-200'
          }`}
        >
          <span className={`text-xs font-mono tracking-widest uppercase truncate pr-4 ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}>
            {project.title}
          </span>
          <button
            onClick={onClose}
            aria-label="Close project details"
            className={`shrink-0 p-2 border transition-colors duration-200 ${
              isDark
                ? 'border-outline/20 text-on-surface-variant hover:border-primary hover:text-primary'
                : 'border-gray-200 text-gray-500 hover:border-blue-500 hover:text-blue-600'
            }`}
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-8 md:p-12 lg:p-16">
          {/* Hero image */}
          <div className={`w-full h-72 md:h-80 mb-12 overflow-hidden ${isDark ? 'bg-surface-container' : 'bg-gray-100'}`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="space-y-12">
            {/* Header */}
            <section>
              <span className={`text-xs font-semibold tracking-[0.15em] uppercase mb-2 block ${isDark ? 'text-primary' : 'text-blue-700'}`}>
                PROJECT CASE STUDY
              </span>
              <h2
                className={`font-bold mb-4 ${isDark ? 'text-on-background' : 'text-gray-900'}`}
                style={{ fontSize: 'clamp(1.35rem, 3.5vw, 2.2rem)', lineHeight: 1.15 }}
              >
                {project.title}
              </h2>
              <p className={`text-base leading-relaxed ${isDark ? 'text-on-surface-variant' : 'text-gray-600'}`}>
                {project.detailDescription}
              </p>
            </section>

            {/* Tech Stack */}
            <section>
              <h4 className={`text-xs font-semibold tracking-[0.15em] uppercase border-b pb-2 mb-5 ${
                isDark ? 'text-on-surface-variant border-outline/20' : 'text-gray-500 border-gray-200'
              }`}>
                TECHNICAL ARCHITECTURE
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.techStack.map((tech) => {
                  const Icon = techIconMap[tech.icon] || Cpu;
                  return (
                    <div key={tech.name} className="flex items-center gap-2">
                      <Icon size={18} className={isDark ? 'text-primary' : 'text-blue-600'} />
                      <span className={`text-sm font-mono ${isDark ? 'text-on-surface' : 'text-gray-700'}`}>
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Metrics */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className={`p-5 border ${
                    isDark
                      ? 'bg-primary-container/10 border-primary/20'
                      : 'bg-blue-50 border-blue-200'
                  }`}
                >
                  <div className={`text-xs font-semibold tracking-[0.15em] uppercase mb-1 ${isDark ? 'text-primary' : 'text-blue-700'}`}>
                    {m.label}
                  </div>
                  <div className={`text-2xl font-bold ${isDark ? 'text-primary' : 'text-blue-700'}`}>
                    {m.value}
                  </div>
                  <div className={`text-xs font-mono mt-0.5 ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}>
                    {m.sub}
                  </div>
                </div>
              ))}
            </section>

            {/* Challenges & Solutions */}
            <section>
              <h4 className={`text-xs font-semibold tracking-[0.15em] uppercase border-b pb-2 mb-5 ${
                isDark ? 'text-on-surface-variant border-outline/20' : 'text-gray-500 border-gray-200'
              }`}>
                CHALLENGES & SOLUTIONS
              </h4>
              <ul className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-4">
                    <span className={`font-bold shrink-0 ${isDark ? 'text-primary' : 'text-blue-700'}`}>
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-on-surface-variant' : 'text-gray-600'}`}>
                      {challenge}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
