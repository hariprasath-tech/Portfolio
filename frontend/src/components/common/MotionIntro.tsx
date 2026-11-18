import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import standingCutout from '../../assets/hari-standing-cutout.png'

interface MotionIntroProps {
  onComplete: () => void
}

const LETTERS = ['P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O']

export function MotionIntro({ onComplete }: MotionIntroProps) {
  // Phase timer: 0-8 seconds
  const [phase, setPhase] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // 0-1s: Pure black screen (phase 0)
    const t1 = setTimeout(() => setPhase(1), 1000) // 1-2s: Red glowing typography starts
    const t2 = setTimeout(() => setPhase(2), 2000) // 2-4s: PORTFOLIO character-by-character
    const t3 = setTimeout(() => setPhase(3), 4000) // 4-5s: Silhouette rises from bottom
    const t4 = setTimeout(() => setPhase(4), 5000) // 5-7s: Real photograph mask reveal
    const t5 = setTimeout(() => setPhase(5), 7000) // 7-8s: Name HARI PRASATH reveals
    const tEnd = setTimeout(() => {
      setIsExiting(true)
      setTimeout(onComplete, 800)
    }, 8200)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
      clearTimeout(tEnd)
    }
  }, [onComplete])

  const handleSkip = () => {
    setIsExiting(true)
    setTimeout(onComplete, 400)
  }

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="motion-intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-[#080808] flex items-center justify-center overflow-hidden select-none"
        >
          {/* Skip Intro Button */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 z-50 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest text-[#FFF000] bg-black/60 border border-[#FFF000]/40 hover:bg-[#A00025] hover:text-white transition-all cursor-pointer shadow-lg"
          >
            SKIP INTRO ➔
          </button>

          {/* Phase 1-5: Ambient Red Space Background */}
          {phase >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#A00025]/30 rounded-full blur-[180px]" />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#FF1538]/20 rounded-full blur-[160px]" />
            </motion.div>
          )}

          {/* Phase 2-5: Massive "PORTFOLIO" Letters Character by Character */}
          {phase >= 2 && (
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-4">
              <div className="flex items-center justify-center gap-1 sm:gap-3 md:gap-5 overflow-hidden">
                {LETTERS.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: '140%', opacity: 0, filter: 'blur(10px)' }}
                    animate={{ y: '0%', opacity: 0.95, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="font-bebas text-6xl sm:text-8xl md:text-9xl lg:text-[14vw] tracking-wider uppercase leading-none select-none"
                    style={{
                      color: '#FF1538',
                      textShadow:
                        '0 0 30px rgba(255, 21, 56, 0.8), 0 0 60px rgba(160, 0, 37, 0.6), 0 0 100px rgba(120, 0, 29, 0.5)',
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {/* Phase 3 & 4: Silhouette Rises, then Real Photo Mask Reveal */}
          {phase >= 3 && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex justify-center items-end pointer-events-none">
              {/* Ground Red Cyber Glow under feet */}
              <div className="absolute bottom-0 w-[420px] h-[70px] bg-gradient-to-r from-transparent via-[#FF1538]/50 to-transparent blur-2xl" />

              <motion.div
                initial={{ y: 220, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Real Photo with Phase 4 Mask Transition */}
                <motion.img
                  src={standingCutout}
                  alt="Hari Prasath S"
                  initial={{
                    clipPath: 'circle(0% at 50% 100%)',
                    filter: 'brightness(0) drop-shadow(0 0 35px #FF1538)',
                  }}
                  animate={{
                    clipPath: phase >= 4 ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 100%)',
                    filter:
                      phase >= 4
                        ? 'brightness(1.02) contrast(1.06) drop-shadow(0 0 40px rgba(255, 21, 56, 0.45))'
                        : 'brightness(0) drop-shadow(0 0 35px #FF1538)',
                  }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-auto h-[65vh] sm:h-[75vh] md:h-[82vh] max-h-[820px] object-contain select-none"
                />
              </motion.div>
            </div>
          )}

          {/* Phase 5: Name "HARI PRASATH" Kinetic Reveal */}
          {phase >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-1/4 left-1/2 -translate-x-1/2 z-30 text-center pointer-events-none"
            >
              <div className="text-xs sm:text-sm font-mono tracking-[0.3em] text-[#FFF000] uppercase mb-1">
                HELLO, I'M
              </div>
              <h1
                className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider uppercase text-white leading-none"
                style={{
                  textShadow: '0 0 35px rgba(255, 240, 0, 0.7), 0 0 70px rgba(255, 21, 56, 0.5)',
                }}
              >
                HARI PRASATH
              </h1>
              <div className="text-xs sm:text-base font-mono text-[#FF1538] font-bold tracking-[0.25em] uppercase mt-2">
                DEVELOPER · CREATOR · FOUNDER
              </div>
            </motion.div>
          )}

          {/* Bottom Progress Bar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-64 flex flex-col items-center gap-1.5 pointer-events-none">
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${(phase / 5) * 100}%` }}
                transition={{ duration: 0.4 }}
                className="h-full bg-gradient-to-r from-[#A00025] via-[#FF1538] to-[#FFF000] shadow-[0_0_12px_#FF1538]"
              />
            </div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              CINEMATIC OPENING SEQUENCE · {phase}/5
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
