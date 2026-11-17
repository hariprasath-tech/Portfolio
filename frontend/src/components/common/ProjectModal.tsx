import { X, ExternalLink, CheckCircle2, Cpu, Wrench, ShieldAlert, Sparkles } from 'lucide-react'
import type { Project } from '../../types/portfolio'
import { GithubIcon } from './BrandIcons'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#0d1222] border border-white/15 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl text-slate-200 z-10 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-5">
          <div className="pr-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20">
                {project.status}
              </span>
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="px-2 py-0.5 rounded-full text-[11px] font-medium text-slate-400 bg-white/5 border border-white/10"
                >
                  {cat}
                </span>
              ))}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 mt-1">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="mt-6 space-y-6">
          {/* Overview Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#121829] border border-white/10 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none opacity-20"
              style={{ backgroundColor: project.accentColor }}
            />
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Proposed Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#101524] border border-white/5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>The Engineering Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#101524] border border-white/5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Proposed Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.proposedSolution}
              </p>
            </div>
          </div>

          {/* System Architecture */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
              <Cpu className="w-4 h-4" />
              <span>System Architecture & Components</span>
            </div>
            <ul className="grid grid-cols-1 gap-2.5">
              {project.architecture.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#101626] border border-white/5 text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Contribution */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
              <Wrench className="w-4 h-4" />
              <span>Personal Engineering Contribution</span>
            </div>
            <ul className="space-y-2">
              {project.personalContribution.map((contrib, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#101626] border border-white/5 text-xs sm:text-sm text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium text-slate-200 bg-[#161d30] border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links & Repository Status */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Status Notice: </span>
              Active development & design phase. Codebase repositories and hardware schematics are maintained on GitHub.
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              ) : (
                <a
                  href="https://github.com/hariprasath-tech"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
