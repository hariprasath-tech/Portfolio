import { useEffect } from 'react'
import { X, ExternalLink, CheckCircle2, AlertCircle, Cpu, Layers } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ProjectItem } from '../../data/content'
import { GithubIcon } from './BrandIcons'

interface ProjectModalProps {
  project: ProjectItem | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0f0f10] border border-white/15 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Banner */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#8d0b1c]/40 via-[#0f0f10] to-[#0f0f10] border-b border-white/10 flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-[#ffe600] uppercase bg-[#ffe600]/10 border border-[#ffe600]/25 mb-2">
                <span>{project.category}</span>
                <span>·</span>
                <span className="text-[#ff2a45]">{project.status}</span>
              </div>
              <h2 className="font-anton text-3xl sm:text-4xl text-white tracking-wide uppercase">
                {project.title}
              </h2>
              <p className="text-sm text-[#9a9a9a] mt-1 font-medium">{project.subtitle}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-[#9a9a9a] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#f5f5f5]">
            {/* Founder Story (if available, e.g. CocoCut) */}
            {project.founderStory && (
              <div className="p-5 rounded-2xl bg-[#d90429]/10 border border-[#d90429]/30">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ff2a45] uppercase tracking-wider mb-2">
                  <Cpu className="w-4 h-4 text-[#ff2a45]" />
                  <span>FOUNDER STORY & ROVER ORIGINS</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.founderStory}
                </p>
              </div>
            )}

            {/* Problem Statement */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ffe600] uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-[#ffe600]" />
                <span>THE ENGINEERING PROBLEM</span>
              </div>
              <p className="text-zinc-300 leading-relaxed bg-[#050505] p-4 rounded-xl border border-white/5">
                {project.problem}
              </p>
            </div>

            {/* Proposed Solution */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ff2a45] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#ff2a45]" />
                <span>ARCHITECTED SOLUTION</span>
              </div>
              <p className="text-zinc-300 leading-relaxed bg-[#050505] p-4 rounded-xl border border-white/5">
                {project.solution}
              </p>
            </div>

            {/* Key Technical Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider">
                <Layers className="w-4 h-4 text-[#d90429]" />
                <span>KEY IMPLEMENTATION CAPABILITIES</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5 text-xs text-zinc-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a45] mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="space-y-2.5 pt-2 border-t border-white/10">
              <div className="text-xs font-mono text-[#9a9a9a] uppercase tracking-wider">
                TECHNOLOGIES & TOOLS:
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#8d0b1c]/20 border border-[#d90429]/30 text-[#f5f5f5]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action Bar */}
          <div className="p-5 sm:p-6 bg-[#050505] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono text-[#9a9a9a]">
              Status: <span className="text-white font-bold">{project.status}</span>
            </span>

            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-[#d90429] hover:bg-[#ff2a45] transition-all shadow-[0_0_15px_rgba(255,42,69,0.4)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Prototype</span>
                </a>
              )}

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-[#9a9a9a] hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
