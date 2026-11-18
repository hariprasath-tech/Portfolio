import { motion } from 'framer-motion'

interface SectionTitleProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
}: SectionTitleProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={`relative mb-12 sm:mb-16 flex flex-col ${
        isCenter ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      {/* Background Red Streak Aura */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[70px] bg-gradient-to-r from-transparent via-[#d90429]/20 to-transparent blur-2xl pointer-events-none ${
          isCenter ? 'left-1/2 -translate-x-1/2' : 'left-0'
        }`}
      />

      {/* Monospace Badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-mono tracking-[0.25em] text-[#ff2a45] uppercase bg-[#8d0b1c]/15 border border-[#d90429]/30 mb-3 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a45] animate-pulse" />
          <span>{badge}</span>
        </motion.div>
      )}

      {/* Yellow Outlined Anton Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-anton text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider uppercase leading-none"
        style={{
          color: '#ffe600',
          WebkitTextStroke: '1.5px #ffffff',
          textShadow: '0 0 25px rgba(255, 230, 0, 0.45)',
        }}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-sm sm:text-base text-[#9a9a9a] max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
