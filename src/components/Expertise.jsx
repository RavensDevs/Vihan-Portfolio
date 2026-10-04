import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { expertiseData } from '../data/expertise';
import { useTheme } from '../context/ThemeContext';

// Material Symbols via inline SVG paths replaced with Lucide equivalents
const iconMap = {
  settings: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  precision_manufacturing: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  eco: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
  view_in_ar: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
  science: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15a2.25 2.25 0 01-.659 1.591l-4.432 4.432a.75.75 0 01-1.061 0L9.218 16.59A2.25 2.25 0 018.56 15M19.8 15l-9.6 0M8.56 15H5.2a2.25 2.25 0 01-.659-1.591L5 7.5m14.8 7.5L5 7.5" />
    </svg>
  ),
};

export default function Expertise() {
  const { isDark } = useTheme();
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="expertise"
      className={`py-8 px-4 md:px-8 max-w-[1220px] mx-auto`}
    >
      {/* Section header */}
      <div ref={sectionRef} className="reveal mb-8 flex items-center gap-6">
        <h2 className={`text-sm font-semibold tracking-[0.3em] uppercase ${isDark ? 'text-primary' : 'text-blue-700'}`}>
          Core Expertise
        </h2>
        <div className={`h-px flex-grow ${isDark ? 'bg-outline/20' : 'bg-gray-200'}`} />
      </div>

      {/* Cards grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-l border-t ${isDark ? 'border-outline/10' : 'border-gray-200'}`}>
        {expertiseData.map((item, index) => (
          <ExpertiseCard key={item.id} item={item} index={index} isDark={isDark} />
        ))}
      </div>
    </section>
  );
}

function ExpertiseCard({ item, index, isDark }) {
  const ref = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`reveal delay-${(index + 1) * 100} group p-8 border-r border-b transition-all duration-300 cursor-default ${
        isDark
          ? 'border-outline/10 hover:bg-surface-container-low'
          : 'border-gray-200 hover:bg-blue-50/60'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={`mb-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1`}>
        {iconMap[item.icon]}
      </div>
      <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-on-background' : 'text-gray-900'}`}>
        {item.title}
      </h3>
      <p className={`text-base leading-relaxed ${isDark ? 'text-on-surface-variant' : 'text-gray-600'}`}>
        {item.description}
      </p>
    </div>
  );
}
