import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { projectsData, projectCategories } from '../data/projects';
import ProjectModal from './ProjectModal';

function ProjectCard({ project, index, onSelect }) {
  const { isDark } = useTheme();
  const ref = useScrollAnimation({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className="reveal project-card-reveal"
      style={{ transitionDelay: `${(index % 6) * 140}ms` }}
    >
      <div
        className={`group cursor-pointer border transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
          isDark
            ? 'border-outline/10 hover:border-primary/40'
            : 'border-gray-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100/40'
        }`}
        onClick={() => onSelect(project)}
      >
        <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          {/* Image */}
          <div className={`w-full md:w-1/2 h-64 md:h-80 shrink-0 overflow-hidden ${isDark ? 'bg-surface-container' : 'bg-gray-100'}`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            />
          </div>

          {/* Text content */}
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
            {/* Period badge */}
            <span className={`inline-block text-xs font-mono uppercase tracking-wider mb-3 ${isDark ? 'text-primary' : 'text-blue-600'}`}>
              {project.period}
              <span className="opacity-60 text-[10px] lowercase ml-2">({project.duration})</span>
            </span>

            <h3 className={`text-2xl font-bold leading-snug mb-3 group-hover:text-primary transition-colors duration-300 ${isDark ? 'text-on-background' : 'text-gray-900'}`}>
              {project.title}
            </h3>
            <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-on-surface-variant' : 'text-gray-600'}`}>
              {project.description}
            </p>

            {/* Tags */}
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
  );
}

export default function Projects() {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
  const headerRef = useScrollAnimation();

  const filtered =
    activeFilter === 'ALL'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <>
      <main className="max-w-[1220px] mx-auto px-4 md:px-8 py-20 min-h-screen pt-28">
        {/* Filter header */}
        <div ref={headerRef} className="reveal flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1
              className={`font-bold mb-1 ${isDark ? 'text-on-background' : 'text-gray-900'}`}
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '0.05em', lineHeight: 1.1 }}
            >
              Timeline
            </h1>
            <p className={`text-lg opacity-60 ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}>
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
        <div className="space-y-10">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
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
