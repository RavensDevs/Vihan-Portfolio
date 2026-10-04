import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { projectsData, projectCategories } from '../data/projects';
import ProjectModal from './ProjectModal';

function ProjectCard({ project, activeProjectId, setActiveProjectId, onSelect }) {
  const { isDark } = useTheme();
  const ref = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    const card = ref.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveProjectId(project.id);
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [project.id, ref, setActiveProjectId]);

  return (
    <div
      ref={ref}
      className="reveal project-card-reveal grid grid-cols-[84px_minmax(0,1fr)] md:grid-cols-[30%_70%] items-stretch"
    >
      <div className="relative flex justify-end items-center pr-5 md:pr-8">
        <div className={`text-right font-mono uppercase ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}>
          <span className="block text-xs md:text-sm font-semibold">{project.period}</span>
          <span className="block text-[10px] md:text-xs opacity-70 normal-case">
            Duration: {project.duration === '—' ? 'Not specified' : project.duration}
          </span>
        </div>
        <span
          className={`absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 w-3 h-3 rounded-full border-[3px] ${
            project.id === activeProjectId
              ? 'bg-primary border-background shadow-[0_0_10px_rgba(39,146,255,0.5)]'
              : isDark
              ? 'bg-outline/40 border-background'
              : 'bg-gray-400 border-white'
          }`}
        />
      </div>

      <div className="pl-7 md:pl-10">
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onSelect(project);
          }
        }}
        className={`group cursor-pointer border transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
          isDark
            ? 'bg-surface-container-low border-outline/10 hover:border-primary/40'
            : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100/40'
        }`}
        onClick={() => onSelect(project)}
      >
        <div className="flex flex-col sm:flex-row">
          <div className={`w-full h-44 sm:w-2/5 sm:h-auto min-h-44 shrink-0 overflow-hidden ${isDark ? 'bg-surface-container' : 'bg-gray-100'}`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex-1 p-5 md:p-7">
            <h3 className={`text-xl font-bold leading-snug mb-3 group-hover:text-primary transition-colors duration-300 ${isDark ? 'text-on-background' : 'text-gray-900'}`}>
              {project.title}
            </h3>
            <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-on-surface-variant' : 'text-gray-600'}`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`font-mono text-[10px] px-2 py-1 border ${
                    isDark
                      ? 'border-outline/20 text-on-surface-variant'
                      : 'bg-gray-100 text-gray-700 border-gray-200'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [activeProjectId, setActiveProjectId] = useState(projectsData[0]?.id);
  const [selectedProject, setSelectedProject] = useState(null);
  const headerRef = useScrollAnimation();

  const filtered =
    activeFilter === 'ALL'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  useEffect(() => {
    setActiveProjectId(filtered[0]?.id);
  }, [activeFilter]);

  return (
    <>
      <main className="max-w-[1220px] mx-auto px-4 md:px-8 py-20 min-h-screen pt-28">
        {/* Filter header */}
        <div ref={headerRef} className="reveal flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1
              className={`font-bold mb-1 ${isDark ? 'text-on-background' : 'text-gray-900'}`}
              style={{ fontSize: 'clamp(2rem, 4.5vw, 2.9rem)', letterSpacing: '0.05em', lineHeight: 1.1 }}
            >
              Timeline
            </h1>
            <p className={`text-base opacity-60 ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}>
              A chronological record of technical milestones and industrial contributions.
            </p>
          </div>

          {/* Category tabs */}
          <div className={`flex flex-wrap gap-4 text-xs font-semibold tracking-[0.15em] border-b pb-2 ${isDark ? 'border-outline/10' : 'border-gray-200'}`}>
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`pb-1 px-1 transition-all duration-200 uppercase ${
                  activeFilter === cat
                    ? isDark
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-blue-700 border-b-2 border-blue-700'
                    : isDark
                    ? 'text-on-surface-variant hover:text-on-surface'
                    : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project cards */}
        <div className="relative mx-auto w-full max-w-6xl space-y-12 md:space-y-16 md:-translate-x-3 lg:-translate-x-24">
          <div className="absolute top-0 bottom-0 left-[84px] md:left-[30%] w-px bg-outline/20" />
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              activeProjectId={activeProjectId}
              setActiveProjectId={setActiveProjectId}
              onSelect={setSelectedProject}
            />
          ))}

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className={`text-center py-32 font-mono text-sm ${isDark ? 'text-on-surface-variant' : 'text-gray-400'}`}>
              No projects in this category.
            </div>
          )}
        </div>
      </main>

      {/* Detail modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
