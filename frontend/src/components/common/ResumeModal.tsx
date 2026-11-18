import { useEffect } from 'react'
import { X, Download, FileText, CheckCircle2, GraduationCap, Award, Code2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { content } from '../../data/content'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

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
          className="relative w-full max-w-3xl bg-[#0f0f10] border border-white/15 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#8d0b1c]/40 via-[#0f0f10] to-[#0f0f10] border-b border-white/10 flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#d90429]/20 border border-[#d90429]/40 flex items-center justify-center text-[#ff2a45]">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-anton text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  {content.personal.name} · RESUME
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#9a9a9a] mt-0.5">
                  {content.personal.degree} · {content.personal.college}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-[#9a9a9a] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
            {/* Academic Credentials */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ffe600] uppercase">
                <GraduationCap className="w-4 h-4 text-[#ffe600]" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <p className="text-white font-bold">{content.personal.college}</p>
              <p className="text-xs text-zinc-400">
                {content.personal.degree} ({content.personal.batch}) · {content.personal.location}
              </p>
            </div>

            {/* Core Competencies */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ff2a45] uppercase">
                <Code2 className="w-4 h-4 text-[#ff2a45]" />
                <span>TECHNICAL CAPABILITIES</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                {[
                  'Java & Spring Boot',
                  'Python & Scikit-learn',
                  'C Programming',
                  'React & TypeScript',
                  'MySQL & MongoDB',
                  'CapCut & Video Production',
                  'Raspberry Pi Robotics',
                  'Fastify & REST APIs',
                  'Git & GitHub',
                ].map((s) => (
                  <div
                    key={s}
                    className="p-2 rounded-lg bg-[#050505] border border-white/5 flex items-center gap-2 text-zinc-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2a45]" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Accomplishments */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase">
                <Award className="w-4 h-4 text-[#ffe600]" />
                <span>SELECT VERIFIED MILESTONES</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffe600] mt-1.5 shrink-0" />
                  <span>
                    <strong>600+ Algorithmic Challenges Solved</strong> on SkillRack in Java, C, and Python.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffe600] mt-1.5 shrink-0" />
                  <span>
                    <strong>Co-Founder of CocoCut</strong>: Autonomous coconut leaf cutting rover prototype (MIT App Contest Top 5).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffe600] mt-1.5 shrink-0" />
                  <span>
                    <strong>Smart India Hackathon (SIH 2026)</strong>: Team Neural Nexus developing CyberSentinel AI.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffe600] mt-1.5 shrink-0" />
                  <span>
                    <strong>Freelance Video Editor</strong>: Authored 14+ commercial edits for ISSai Technology & IDC Media.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-5 sm:p-6 bg-[#050505] border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-[#9a9a9a]">Verified Candidate Profile</span>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${content.personal.contact.email}?subject=Requesting%20Hari%20Prasath%20Resume%20PDF`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-anton text-sm tracking-wider uppercase text-white bg-gradient-to-r from-[#8d0b1c] to-[#d90429] shadow-[0_0_15px_rgba(255,42,69,0.4)] hover:brightness-110 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Request Official PDF</span>
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl font-mono text-xs text-[#9a9a9a] hover:text-white"
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
