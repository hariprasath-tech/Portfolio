import { ExternalLink, ChevronRight } from 'lucide-react'
import type { Project } from '../../types/portfolio'
import { ProjectVisual } from './ProjectVisual'
import { GithubIcon } from '../common/BrandIcons'

interface ProjectCardProps {
  project: Project
  onOpenDetails: (project: Project) => void
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  return (
    <div className="group h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#0d1222] border border-white/10 hover:border-blue-500/35 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
      <div>
        {/* Visual Mockup Container */}
        <div className="mb-6 overflow-hidden rounded-2xl">
          <ProjectVisual type={project.image} accentColor={project.accentColor} />
        </div>

        {/* Status and Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20">
            {project.status}
          </span>
          {project.categories.slice(0, 2).map((cat) => (
            <span
              key={cat}
              className="px-2 py-0.5 rounded-full text-[10px] font-medium text-slate-400 bg-white/5 border border-white/5"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Project Title & Tagline */}
        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-xs text-blue-400/90 font-mono mt-1 line-clamp-1">
          {project.tagline}
        </p>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-[#121828] border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 rounded-md text-[11px] font-mono text-slate-400 bg-white/5">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl transition-all shadow-md shadow-blue-600/20 cursor-pointer"
        >
          <span>View Details</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-[#121828] hover:bg-white/10 border border-white/10 transition-colors"
              title="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          ) : (
            <a
              href="https://github.com/hariprasath-tech"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-[#121828] hover:bg-white/10 border border-white/10 transition-colors"
              title="View on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-[#121828] hover:bg-white/10 border border-white/10 transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
