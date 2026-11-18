import { useEffect } from 'react'
import { X, Film } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { VideoShowcaseItem } from '../../data/content'

interface LightboxModalProps {
  item: VideoShowcaseItem | null
  onClose: () => void
}

export function LightboxModal({ item, onClose }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (item) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, onClose])

  if (!item) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/92 backdrop-blur-xl"
        />

        {/* Modal Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0f0f10] border border-white/20 rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(217,4,41,0.3)] z-10 flex flex-col"
        >
          {/* Top Bar */}
          <div className="p-4 sm:p-5 bg-[#050505] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#d90429]/20 border border-[#d90429]/40 flex items-center justify-center text-[#ff2a45]">
                <Film className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-anton text-lg sm:text-xl text-white tracking-wide uppercase leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-[#9a9a9a]">
                  {item.clientOrContext} · {item.tool} · {item.duration}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#d90429] transition-colors"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player Frame */}
          <div className="relative bg-black flex items-center justify-center min-h-[380px] sm:min-h-[500px] max-h-[70vh]">
            <video
              src={item.videoUrl}
              controls
              autoPlay
              playsInline
              className="w-full max-h-[68vh] object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Description Footer */}
          <div className="p-4 sm:p-6 bg-[#0a0a0b] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 shrink-0">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-[#ff2a45]"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
