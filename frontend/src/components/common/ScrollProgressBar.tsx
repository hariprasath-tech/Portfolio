import { useEffect, useState } from 'react'

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[9990] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#8d0b1c] via-[#d90429] to-[#ff2a45] shadow-[0_0_12px_#ff2a45] transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
