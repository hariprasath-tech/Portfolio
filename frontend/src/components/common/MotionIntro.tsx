import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import portraitCutout from '../../assets/hari-prasath-cutout.png'

interface MotionIntroProps {
  onComplete: () => void
}

const LETTERS = ['P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O']

export function MotionIntro({ onComplete }: MotionIntroProps) {
  // Phase 0: Pure black (0 - 1.5s)
  // Phase 1: Red ambient glow breathes in (1.5 - 3.2s)
  // Phase 2: PORTFOLIO characters reveal (3.2 - 5.5s)
  // Phase 3: Silhouette rises gently (5.5 - 7.5s)
  // Phase 4: Smooth photographic reveal with soft rim light (7.5 - 9.5s)
  // Phase 5: Name "HARI PRASATH" reveals (9.5 - 11.2s)
  const [phase, setPhase] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1400) // 1.4s
    const t2 = setTimeout(() => setPhase(2), 2800) // 2.8s
    const t3 = setTimeout(() => setPhase(3), 5200) // 5.2s (Silhouette gently rises)
    const t4 = setTimeout(() => setPhase(4), 7400) // 7.4s (Photograph dissolves in smoothly)
    const t5 = setTimeout(() => setPhase(5), 9400) // 9.4s (Name & title reveal)
    const tEnd = setTimeout(() => {
      setIsExiting(true)
      setTimeout(onComplete, 800)
    }, 11400)

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
    setTimeout(onComplete, 350)
  }

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="motion-intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: 'blur(8px)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-[#080808] flex items-center justify-center overflow-hidden select-none"
        >
          {/* Skip Intro Button */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 z-50 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest text-zinc-300 bg-white/5 border border-white/20 hover:bg-[#d90429] hover:text-white hover:border-[#ff2a45] transition-all cursor-pointer backdrop-blur-md shadow-xl"
          >
            SKIP INTRO ➔
          </button>

          {/* Phase 1+: Ambient Red Nebula Atmosphere */}
          {phase >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#8d0b1c]/30 rounded-full blur-[200px]" />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#d90429]/20 rounded-full blur-[180px]" />
            </motion.div>
          )}

          {/* Phase 2+: Massive Glowing "PORTFOLIO" Letters */}
          {phase >= 2 && (
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-4">
              <div className="flex items-center justify-center gap-1 sm:gap-3 md:gap-4 overflow-hidden">
                {LETTERS.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: '120%', opacity: 0, filter: 'blur(12px)' }}
                    animate={{ y: '0%', opacity: 0.9, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.9,
                      delay: i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="font-bebas text-6xl sm:text-8xl md:text-9xl lg:text-[13vw] tracking-wider uppercase leading-none select-none text-[#d90429]"
                    style={{
                      textShadow:
                        '0 0 40px rgba(217, 4, 41, 0.75), 0 0 80px rgba(141, 11, 28, 0.5)',
                      WebkitTextStroke: '1px rgba(255, 42, 69, 0.6)',
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {/* Phase 3 & 4: Silhouette Rises Gently, Then Smooth Photographic Reveal */}
          {phase >= 3 && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex justify-center items-end pointer-events-none">
              {/* Volumetric stage light under portrait */}
              <div className="absolute bottom-0 w-[550px] h-[100px] bg-gradient-to-r from-transparent via-[#ff2a45]/40 to-transparent blur-3xl pointer-events-none" />

              <motion.div
                initial={{ y: 160, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Silhouette Stage (Phase 3) */}
                <motion.img
                  src={portraitCutout}
                  alt="Hari Prasath S"
                  initial={{ opacity: 1, filter: 'brightness(0) drop-shadow(0 0 35px #d90429)' }}
                  animate={{
                    opacity: phase >= 4 ? 0 : 1,
                    filter: 'brightness(0) drop-shadow(0 0 35px #d90429)',
                  }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  className="w-auto h-[55vh] sm:h-[65vh] md:h-[75vh] max-h-[720px] object-contain select-none"
                />

                {/* Real Photograph Stage (Phase 4: Dissolves in smoothly over the silhouette) */}
                <motion.img
                  src={portraitCutout}
                  alt="Hari Prasath S"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: phase >= 4 ? 1 : 0,
                  }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-auto h-[55vh] sm:h-[65vh] md:h-[75vh] max-h-[720px] object-contain select-none"
                  style={{
                    filter:
                      'brightness(1.02) contrast(1.04) drop-shadow(0 0 45px rgba(217, 4, 41, 0.45))',
                  }}
                />
              </motion.div>
            </div>
          )}

          {/* Phase 5: Name "HARI PRASATH" Elegant Reveal */}
          {phase >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[18%] left-1/2 -translate-x-1/2 z-30 text-center pointer-events-none w-full px-4"
            >
              <div className="text-xs sm:text-sm font-mono tracking-[0.35em] text-[#ff2a45] uppercase mb-1 font-bold">
                HELLO, I'M
              </div>
              <h1
                className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider uppercase text-white leading-none"
                style={{
                  textShadow:
                    '0 0 35px rgba(255, 255, 255, 0.5), 0 0 70px rgba(217, 4, 41, 0.6)',
                }}
              >
                HARI PRASATH
              </h1>
              <div className="text-xs sm:text-sm font-mono text-zinc-300 font-semibold tracking-[0.25em] uppercase mt-2">
                FULL STACK DEVELOPER · AI/ML · VIDEO EDITOR
              </div>
            </motion.div>
          )}

          {/* Bottom Progress Bar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-56 flex flex-col items-center gap-1.5 pointer-events-none">
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${(phase / 5) * 100}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-[#8d0b1c] via-[#d90429] to-[#ff2a45] shadow-[0_0_12px_#ff2a45]"
              />
            </div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              CINEMATIC OPENING · {phase}/5
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
