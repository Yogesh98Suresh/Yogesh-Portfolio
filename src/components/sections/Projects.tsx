import { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../../data/portfolioData';
import { ExternalLink, Github, Info, X } from 'lucide-react';

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-textMuted text-lg">
            Real-world applications, AI experiments, and developer tools built with precision and modern engineering practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass rounded-2xl border border-white/10 hover:border-primary/50 transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
                    {project.status}
                  </span>
                  {project.isFrontendOnly && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-textMuted border border-white/10">
                      Frontend Only
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-textMuted text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-textMuted border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-8 py-4 bg-white/[0.02] border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-sm font-medium text-text hover:text-primary flex items-center gap-1.5 transition-colors"
                >
                  <Info size={16} /> View Details
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-textMuted hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary transition-colors flex items-center gap-1.5 text-xs font-medium"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl animate-fadeIn">
          <div className="glass max-w-2xl w-full p-8 rounded-3xl border border-white/20 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-textMuted hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30 inline-block mb-4">
              {selectedProject.status}
            </span>

            <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>

            <p className="text-textMuted text-base mb-6 leading-relaxed">
              {selectedProject.detailedDescription || selectedProject.description}
            </p>

            {selectedProject.problemStatement && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Problem Statement</h4>
                <p className="text-textMuted text-sm">{selectedProject.problemStatement}</p>
              </div>
            )}

            {selectedProject.features && selectedProject.features.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Key Features</h4>
                <ul className="list-disc list-inside text-textMuted text-sm space-y-1">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedProject.architecture && (
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Architecture</h4>
                <p className="text-textMuted text-sm">{selectedProject.architecture}</p>
              </div>
            )}

            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium flex items-center gap-2 text-sm transition-colors"
                >
                  <Github size={18} /> GitHub Repository
                </a>
              )}
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-primary text-white font-medium flex items-center gap-2 text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
