import { useState, useEffect } from 'react'
import {
  ArrowDown,
  FileText,
  Mail,
  Sparkles,
  MapPin,
  Star,
  Terminal,
  ChevronRight,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { content } from '../data/content'
import standingCutout from '../assets/hari-standing-cutout.png'
import { GithubIcon, LinkedinIcon } from '../components/common/BrandIcons'

interface HeroProps {
  onResumeClick: () => void
}

const NAME_LETTERS = Array.from('HARI PRASATH S.')

export function Hero({ onResumeClick }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % content.personal.roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#050505]"
    >
      {/* 1. HUGE FADED "PORTFOLIO" BACKGROUND TYPOGRAPHY (Cinematic Red Edge) */}
      <div className="absolute inset-0 w-full flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden opacity-[0.06] z-0">
        <motion.div
          animate={{ x: [-50, 50, -50] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="whitespace-nowrap font-anton text-[22vw] leading-none tracking-tight text-transparent select-none"
          style={{
            WebkitTextStroke: '2px #d90429',
          }}
        >
          PORTFOLIO · DEVELOPER · FOUNDER
        </motion.div>
        <motion.div
          animate={{ x: [50, -50, 50] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
          className="whitespace-nowrap font-anton text-[18vw] leading-none tracking-tight text-transparent mt-[-4vw] select-none"
          style={{
            WebkitTextStroke: '2px #ffe600',
          }}
        >
          HARI PRASATH · SHOWREEL · CREATOR
        </motion.div>
      </div>

      {/* 2. AMBIENT RED NEBULA BACKDROP GLOWS */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#8d0b1c]/25 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#d90429]/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[1000px] h-[250px] bg-[#ff2a45]/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Dot Grid Floor */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #ff2a45 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* 3. FULL-BLEED RESPONSIVE CONTAINER */}
      <div className="relative w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center min-h-[calc(100vh-8rem)]">
          {/* ============================================================== */}
          {/* LEFT COLUMN: Editorial Presentation & Letter-by-Letter Reveal */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
            {/* "Available for Opportunities" Badge with Blinking Star */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider text-[#ffe600] bg-[#ffe600]/10 border border-[#ffe600]/30 mb-5 backdrop-blur-md shadow-[0_0_15px_rgba(255,230,0,0.25)]"
            >
              <Star className="w-3.5 h-3.5 text-[#ffe600] fill-[#ffe600] animate-pulse" />
              <span>{content.personal.availabilityBadge}</span>
              <span className="text-zinc-500">|</span>
              <span className="text-white font-normal">Winter 2026</span>
            </motion.div>

            {/* "Hello, I'm" Overline Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.3em] text-[#ff2a45] uppercase font-mono mb-2"
            >
              <Terminal className="w-4 h-4 text-[#ff2a45]" />
              <span>{content.personal.greeting}</span>
            </motion.div>

            {/* Name Heading Typed Letter-by-Letter */}
            <h1 className="font-anton text-6xl sm:text-7xl md:text-8xl xl:text-9xl text-white tracking-wide uppercase leading-[0.92] flex flex-wrap">
              {NAME_LETTERS.map((char, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.4,
                    delay: 0.12 + idx * 0.045,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={char === 'S' || char === '.' ? 'text-[#ff2a45]' : ''}
                  style={
                    char === 'S' || char === '.'
                      ? {
                          textShadow: '0 0 20px rgba(255, 42, 69, 0.8)',
                        }
                      : {}
                  }
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>

            {/* Headline: "BUILDING IDEAS INTO REALITY." */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4 font-anton text-2xl sm:text-3xl md:text-4xl text-[#ffe600] tracking-wider uppercase leading-tight"
              style={{
                WebkitTextStroke: '0.8px #ffffff',
                textShadow: '0 0 15px rgba(255, 230, 0, 0.4)',
              }}
            >
              {content.personal.headline}
            </motion.div>

            {/* Roles Line: Developer. Creator. Founder. */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-2.5 flex items-center gap-2 text-base sm:text-xl font-mono text-zinc-300 font-semibold"
            >
              <span className="text-[#9a9a9a]">Role:</span>
              <div className="flex items-center gap-2 text-white font-bold">
                {content.personal.roles.map((r, i) => (
                  <span
                    key={r}
                    className={`transition-all duration-300 ${
                      i === roleIndex ? 'text-[#ff2a45] scale-105' : 'text-zinc-400'
                    }`}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Short Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-4 text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed max-w-2xl font-inter"
            >
              {content.personal.bio}
            </motion.p>

            {/* College & Degree Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-zinc-400 font-mono"
            >
              <MapPin className="w-4 h-4 text-[#ff2a45] shrink-0" />
              <span>{content.personal.college}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-white font-medium">{content.personal.batch}</span>
            </motion.div>

            {/* Animated Stat Counters (Projects, Domains, Hackathons, Solved) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl"
            >
              {content.personal.counters.map((c) => (
                <div
                  key={c.id}
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#0f0f10] border border-white/10 text-center shadow-lg hover:border-[#d90429]/50 transition-all"
                >
                  <div className="font-anton text-2xl sm:text-3xl text-white tracking-wide">
                    {c.value}
                    <span className="text-[#ff2a45]">{c.suffix}</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-[#ffe600] mt-0.5">
                    {c.label}
                  </div>
                  <div className="text-[10px] text-[#9a9a9a] mt-0.5 font-sans leading-tight">
                    {c.desc}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs: Explore Work, Download Resume, Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollTo('#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-anton text-sm tracking-wider uppercase text-white bg-gradient-to-r from-[#8d0b1c] via-[#d90429] to-[#ff2a45] hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,42,69,0.45)] border border-[#ff2a45]/50 cursor-pointer"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onResumeClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-anton text-sm tracking-wider uppercase text-white bg-[#0f0f10] hover:bg-[#171719] border border-white/15 transition-all cursor-pointer shadow-lg"
              >
                <FileText className="w-4 h-4 text-[#ffe600]" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-anton text-sm tracking-wider uppercase text-[#f5f5f5] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              >
                <span>Contact</span>
                <ChevronRight className="w-4 h-4 text-[#ff2a45]" />
              </button>
            </motion.div>

            {/* Social Links Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-8 flex flex-wrap items-center gap-4 text-[#9a9a9a]"
            >
              <div className="flex items-center gap-2.5">
                <a
                  href={content.personal.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#0f0f10] border border-white/10 hover:border-[#ff2a45]/60 text-white transition-all hover:scale-105 shadow-md"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={content.personal.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#0f0f10] border border-white/10 hover:border-[#ff2a45]/60 text-white transition-all hover:scale-105 shadow-md"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${content.personal.contact.email}`}
                  className="p-3 rounded-xl bg-[#0f0f10] border border-white/10 hover:border-[#ff2a45]/60 text-white transition-all hover:scale-105 shadow-md"
                  aria-label="Send direct email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <span className="text-xs font-mono text-[#9a9a9a]">
                {content.personal.contact.email} · {content.personal.location}
              </span>
            </motion.div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: Life-Size Cutout Photo with Red Glow Framing */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end relative min-h-[580px] lg:min-h-[760px] xl:min-h-[840px]">
            <div className="relative w-full max-w-[560px] xl:max-w-[640px] flex flex-col items-center justify-end">
              {/* Volumetric Red Glow Behind Hari */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] xl:w-[620px] h-[750px] bg-gradient-to-tr from-[#8d0b1c]/30 via-[#d90429]/35 to-[#ff2a45]/20 rounded-full blur-[110px] pointer-events-none" />

              {/* Holographic Red Framing Card Behind Hari */}
              <div className="absolute inset-x-6 inset-y-8 rounded-3xl border border-[#d90429]/30 bg-gradient-to-b from-white/[0.03] via-transparent to-[#d90429]/[0.05] pointer-events-none backdrop-blur-[2px]" />

              {/* Glowing Cyber Red Pedestal Stage Beneath Shoes */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-16 bg-gradient-to-r from-transparent via-[#ff2a45]/45 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-80 h-3 bg-[#ffe600]/60 rounded-full blur-md pointer-events-none" />

              {/* Standing Figure (Full-Body Studio Cutout) */}
              <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={{
                  opacity: 1,
                  y: [0, -8, 0],
                  scale: 1,
                }}
                transition={{
                  opacity: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: 0.7 },
                }}
                className="relative z-10 w-full flex justify-center drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)]"
              >
                <img
                  src={standingCutout}
                  alt="Hari Prasath S - Full Standing Portrait"
                  className="w-auto h-[65vh] sm:h-[75vh] lg:h-[84vh] xl:h-[88vh] 2xl:h-[90vh] max-h-[860px] object-contain select-none pointer-events-none"
                  style={{
                    filter:
                      'drop-shadow(0 0 35px rgba(217, 4, 41, 0.35)) contrast(1.05) brightness(1.02)',
                  }}
                  loading="eager"
                />
              </motion.div>

              {/* ORBITING CINEMATIC BADGES AROUND HARI */}

              {/* Badge 1: Top-Left - 600+ SkillRack Solved */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-10 -left-4 sm:-left-12 xl:-left-16 z-20 p-3.5 rounded-2xl bg-[#0f0f10]/95 backdrop-blur-md border border-[#d90429]/40 shadow-2xl hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#d90429]/20 border border-[#d90429]/40 flex items-center justify-center text-[#ff2a45] shrink-0 font-anton text-base">
                    600+
                  </div>
                  <div>
                    <div className="text-xs font-anton text-white tracking-wider flex items-center gap-1.5">
                      <span>PROBLEMS SOLVED</span>
                      <span className="w-2 h-2 rounded-full bg-[#ffe600] animate-pulse" />
                    </div>
                    <p className="text-[10px] text-zinc-400 font-mono">SkillRack Top Performer</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge 2: Top-Right - CocoCut Founder */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-32 -right-4 sm:-right-10 xl:-right-14 z-20 p-3.5 rounded-2xl bg-[#0f0f10]/95 backdrop-blur-md border border-[#ffe600]/40 shadow-2xl hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ffe600]/15 border border-[#ffe600]/30 flex items-center justify-center text-[#ffe600] shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-anton text-white tracking-wider">
                      COCOCUT FOUNDER
                    </div>
                    <p className="text-[10px] text-[#ffe600] font-mono">MIT App Contest Top 5</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge 3: Mid-Left - Video Editor */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="absolute top-[320px] -left-4 sm:-left-14 xl:-left-20 z-20 p-3.5 rounded-2xl bg-[#0f0f10]/95 backdrop-blur-md border border-[#ff2a45]/40 shadow-2xl hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#8d0b1c]/30 border border-[#d90429]/40 flex items-center justify-center text-[#ff2a45] shrink-0 font-anton text-sm">
                    14+
                  </div>
                  <div>
                    <div className="text-xs font-anton text-white tracking-wider">
                      VIDEO EDITOR
                    </div>
                    <p className="text-[10px] text-zinc-400 font-mono">ISSai & IDC Media</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge 4: Mid-Right - SIH 2026 Team Neural Nexus */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-[440px] -right-4 sm:-right-10 xl:-right-14 z-20 p-3.5 rounded-2xl bg-[#0f0f10]/95 backdrop-blur-md border border-[#d90429]/40 shadow-2xl hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#d90429]/20 border border-[#d90429]/40 flex items-center justify-center text-white shrink-0 font-anton text-sm">
                    SIH
                  </div>
                  <div>
                    <div className="text-xs font-anton text-white tracking-wider">
                      TEAM NEURAL NEXUS
                    </div>
                    <p className="text-[10px] text-zinc-400 font-mono">CyberSentinel AI</p>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Candidate Bar */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono bg-[#0f0f10]/80 border border-white/10 px-4 py-1.5 rounded-full shadow-md z-20">
                <span className="w-2 h-2 rounded-full bg-[#ff2a45] animate-pulse" />
                <span>Hari Prasath · Sri Eshwar CSE (2025–2029)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
