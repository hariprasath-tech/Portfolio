import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (
        target?.closest('a') ||
        target?.closest('button') ||
        target?.closest('input') ||
        target?.closest('textarea') ||
        target?.closest('[role="button"]') ||
        target?.hasAttribute('data-cursor-hover')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Central Red Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#ff2a45] rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#ff2a45]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Trailing Ring with Red Glow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#d90429] pointer-events-none z-[9998]"
        style={{
          boxShadow: isHovered
            ? '0 0 20px rgba(255, 42, 69, 0.6), inset 0 0 10px rgba(255, 42, 69, 0.3)'
            : '0 0 8px rgba(217, 4, 41, 0.35)',
        }}
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered ? 'rgba(217, 4, 41, 0.18)' : 'rgba(217, 4, 41, 0.04)',
          borderColor: isHovered ? '#ff2a45' : 'rgba(217, 4, 41, 0.6)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 280, mass: 0.2 }}
      />
    </>
  )
}
