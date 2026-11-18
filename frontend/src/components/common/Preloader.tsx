import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

const LETTERS = ['P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O']

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    const startTime = Date.now()
    const duration = 2400

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const currentProgress = Math.min(Math.floor((elapsed / duration) * 100), 100)
      setProgress(currentProgress)

      if (currentProgress >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          setIsFinished(true)
          setTimeout(onComplete, 700)
        }, 400)
      }
    }, 25)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-[#050505] flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Subtle Red Nebula in Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d90429]/20 rounded-full blur-[140px] pointer-events-none" />

          {/* Glitch Scanline Beam */}
          <motion.div
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff2a45] to-transparent opacity-75 shadow-[0_0_15px_#ff2a45] pointer-events-none"
          />

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col items-center px-4">
            {/* Top Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-sm font-mono tracking-[0.35em] text-[#ffe600] uppercase mb-4"
            >
              HARI PRASATH S · SHOWREEL
            </motion.div>

            {/* Giant Letters Reveal */}
            <div className="flex items-center justify-center gap-1 sm:gap-2.5 md:gap-4 overflow-hidden py-3">
              {LETTERS.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: '120%', opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-anton text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-wider"
                  style={{
                    textShadow:
                      '0 0 15px rgba(255, 42, 69, 0.8), 0 0 35px rgba(217, 4, 41, 0.6), 0 0 60px rgba(141, 11, 28, 0.4)',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Bottom Progress Bar & Percent */}
            <div className="w-64 sm:w-80 mt-8 flex flex-col items-center gap-2">
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#8d0b1c] via-[#d90429] to-[#ff2a45] rounded-full shadow-[0_0_10px_#ff2a45]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between w-full text-[11px] font-mono text-zinc-400 mt-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a45] animate-ping" />
                  INITIALIZING ARCHITECTURE
                </span>
                <span className="text-[#ffe600] font-bold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
