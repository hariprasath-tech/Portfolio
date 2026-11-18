import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavbarProps {
  activeSection: string
  onHireMeClick: () => void
}

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'TECH STACK', href: '#tech-stack', id: 'tech-stack' },
  { label: 'PROJECTS', href: '#projects', id: 'projects' },
  { label: 'SHOWREEL', href: '#video-showcase', id: 'video-showcase' },
  { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
  { label: 'LEADERSHIP', href: '#leadership', id: 'leadership' },
  { label: 'BEYOND CODE', href: '#beyond-code', id: 'beyond-code' },
  { label: 'CONTACT', href: '#contact', id: 'contact' },
]

export function Navbar({ activeSection, onHireMeClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-5 sm:px-10 lg:px-14 xl:px-20 2xl:px-24">
        <div className="flex items-center justify-between">
          {/* Brand Logo "HP" */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            className="group flex items-center gap-3 text-white focus:outline-none"
            aria-label="Hari Prasath S - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d90429] via-[#8d0b1c] to-[#0f0f10] border border-[#ff2a45]/50 flex items-center justify-center text-white font-anton text-lg tracking-wider shadow-[0_0_15px_rgba(255,42,69,0.4)] group-hover:scale-105 transition-transform">
              HP
            </div>
            <div className="flex flex-col">
              <span className="font-anton text-lg sm:text-xl tracking-wider text-white group-hover:text-[#ff2a45] transition-colors leading-none">
                HARI PRASATH <span className="text-[#ff2a45]">.</span>
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#9a9a9a] uppercase mt-0.5">
                SHOWREEL · 2026
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#0f0f10]/80 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-[#d90429] shadow-[0_0_15px_rgba(255,42,69,0.5)] border border-[#ff2a45]/60'
                      : 'text-[#9a9a9a] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Right Action: "Hire Me" Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onHireMeClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-anton text-sm tracking-wider uppercase text-white bg-gradient-to-r from-[#8d0b1c] via-[#d90429] to-[#ff2a45] hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,42,69,0.45)] border border-[#ff2a45]/50 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-[#0f0f10] border border-white/10 text-white hover:border-[#ff2a45]/50 transition-colors"
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff2a45]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-[#050505]/95 border-b border-white/10 backdrop-blur-xl px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className={`px-4 py-3 rounded-xl text-sm font-mono font-bold tracking-wider transition-all ${
                      isActive
                        ? 'bg-[#d90429] text-white shadow-[0_0_15px_rgba(255,42,69,0.4)]'
                        : 'text-[#9a9a9a] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}

              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onHireMeClick()
                }}
                className="mt-3 w-full py-3.5 rounded-xl font-anton text-sm tracking-wider uppercase text-white bg-gradient-to-r from-[#8d0b1c] to-[#d90429] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,42,69,0.4)] border border-[#ff2a45]/40"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Hire Me / Get In Touch</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
