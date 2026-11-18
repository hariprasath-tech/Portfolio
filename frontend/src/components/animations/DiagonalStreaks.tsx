import { motion } from 'framer-motion'

interface DiagonalStreaksProps {
  className?: string
  intensity?: 'normal' | 'subtle' | 'vibrant'
}

export function DiagonalStreaks({ className = '', intensity = 'normal' }: DiagonalStreaksProps) {
  const opacity = intensity === 'vibrant' ? 'opacity-40' : intensity === 'subtle' ? 'opacity-15' : 'opacity-25'

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}>
      {/* Background Gradient Base: Dark Maroon & Crimson */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#78001D] via-[#A00025] to-[#400010]" />

      {/* Animated Drifting Diagonal Line Group 1 */}
      <motion.div
        animate={{
          x: [-120, 120],
          y: [-60, 60],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className={`absolute -inset-[50%] w-[200%] h-[200%] ${opacity}`}
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 70px,
              rgba(255, 240, 0, 0.25) 70px,
              rgba(255, 240, 0, 0.25) 73px,
              transparent 73px,
              transparent 140px,
              rgba(255, 21, 56, 0.45) 140px,
              rgba(255, 21, 56, 0.45) 145px,
              transparent 145px,
              transparent 220px,
              rgba(255, 255, 255, 0.3) 220px,
              rgba(255, 255, 255, 0.3) 223px
            )
          `,
        }}
      />

      {/* Floating Light Specks / Lens Accents */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#FF1538]/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#FFF000]/10 rounded-full blur-[160px]" />
    </div>
  )
}
