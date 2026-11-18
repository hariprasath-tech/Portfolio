import {
  ArrowDown,
  FileText,
  Mail,
  Sparkles,
  MapPin,
  Terminal,
  Scissors,
  Mic,
  Cpu,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { content } from '../data/content'
import standingCutout from '../assets/hari-standing-cutout.png'
import { GithubIcon, LinkedinIcon } from '../components/common/BrandIcons'

interface HeroProps {
  onResumeClick: () => void
}

const NAME_LETTERS = Array.from('HARI PRASATH')

export function Hero({ onResumeClick }: HeroProps) {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex items-center justify-center pt-28 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-[#080808]"
    >
      {/* 1. BACKGROUND GRADIENTS & RED VOLUMETRIC GLOWS */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#100306] to-[#080808] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#8d0b1c]/30 via-[#d90429]/35 to-[#ff2a45]/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-44 bg-[#d90429]/15 blur-[140px] pointer-events-none" />

      {/* Subtle Dot Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ff2a45 1px, transparent 0)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* 2. CINEMATIC "PORTFOLIO" WORDMARK */}
      {/* Centered behind the standing cutout with subtle low contrast so all text stays 100% legible */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <div
          className="font-bebas text-[22vw] lg:text-[20vw] leading-none tracking-tight font-extrabold uppercase text-[#d90429]/15 select-none"
          style={{
            textShadow: '0 0 80px rgba(217, 4, 41, 0.45)',
            WebkitTextStroke: '1.5px rgba(255, 42, 69, 0.25)',
            transform: 'translateY(-2%)',
          }}
        >
          PORTFOLIO
        </div>
      </div>

      {/* 3. MAIN THREE-COLUMN FULL-BLEED STAGE */}
      <div className="relative w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 z-10 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[calc(100vh-8.5rem)]">

          {/* ============================================================== */}
          {/* LEFT FLANK: High-Legibility Editorial Typography & Actions (5 Cols) */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-30 pt-4 lg:pt-0">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider text-[#ff2a45] bg-[#d90429]/15 border border-[#ff2a45]/35 mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(255,42,69,0.25)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2a45] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff2a45]" />
              </span>
              <span>Available for Software Roles & Projects · 2026</span>
            </motion.div>

            {/* Overline Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.3em] text-zinc-400 uppercase font-mono mb-1"
            >
              <Terminal className="w-4 h-4 text-[#ff2a45]" />
              <span>&gt;_ HELLO, I'M</span>
            </motion.div>

            {/* Name Heading Typed Letter-by-Letter */}
            <h1 className="font-anton text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-white tracking-wide uppercase leading-[0.92] flex flex-wrap">
              {NAME_LETTERS.map((char, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.35,
                    delay: 0.1 + idx * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-white hover:text-[#ff2a45] transition-colors"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
              <span
                className="text-[#ff2a45] ml-2"
                style={{ textShadow: '0 0 25px rgba(255, 42, 69, 0.8)' }}
              >
                S.
              </span>
            </h1>

            {/* Subtitle: "DEVELOPER · CREATOR · FOUNDER" in crisp white & crimson */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-2.5 font-bebas text-2xl sm:text-3xl lg:text-4xl text-white tracking-wider uppercase flex items-center gap-2"
              style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.35)',
              }}
            >
              <span>DEVELOPER</span>
              <span className="text-[#ff2a45]">·</span>
              <span>CREATOR</span>
              <span className="text-[#ff2a45]">·</span>
              <span>FOUNDER</span>
            </motion.div>

            {/* Headline Role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-1 text-xs sm:text-sm font-mono font-bold text-zinc-300 tracking-wider uppercase"
            >
              Autonomous Robotics Architect · Full-Stack Engineer · Video Editor
            </motion.div>

            {/* Clean Short Bio with 100% Legibility */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-3.5 text-xs sm:text-sm lg:text-base text-zinc-300 leading-relaxed font-inter max-w-xl"
            >
              Computer Science student at Sri Eshwar College of Engineering with a passion for building practical software solutions, exploring emerging technologies, and transforming ideas into meaningful digital products.
            </motion.p>

            {/* College & Degree Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="mt-2.5 flex items-center gap-2 text-xs text-zinc-400 font-mono"
            >
              <MapPin className="w-3.5 h-3.5 text-[#ff2a45] shrink-0" />
              <span>Sri Eshwar College of Engineering</span>
              <span className="text-zinc-600">·</span>
              <span className="text-white font-medium">Batch 2025–2029</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-anton text-xs sm:text-sm tracking-wider uppercase text-white bg-gradient-to-r from-[#8d0b1c] via-[#d90429] to-[#ff2a45] hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,42,69,0.45)] border border-[#ff2a45]/50 cursor-pointer"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onResumeClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-anton text-xs sm:text-sm tracking-wider uppercase text-white bg-[#0f0f10] hover:bg-[#1a080d] border border-white/15 hover:border-[#ff2a45]/60 transition-all cursor-pointer shadow-lg"
              >
                <FileText className="w-4 h-4 text-[#ff2a45]" />
                <span>View Full Resume</span>
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-anton text-xs sm:text-sm tracking-wider uppercase text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#ff2a45]" />
                <span>Get In Touch</span>
              </button>
            </motion.div>

            {/* Social Icons Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="mt-6 flex items-center gap-3 text-zinc-400"
            >
              <a
                href={content.personal.contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#0f0f10] border border-white/10 hover:border-[#ff2a45]/60 hover:text-white transition-all hover:scale-105 shadow-md"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={content.personal.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#0f0f10] border border-white/10 hover:border-[#ff2a45]/60 hover:text-white transition-all hover:scale-105 shadow-md"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${content.personal.contact.email}`}
                className="p-2.5 rounded-xl bg-[#0f0f10] border border-white/10 hover:border-[#ff2a45]/60 hover:text-white transition-all hover:scale-105 shadow-md"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4 text-[#ff2a45]" />
              </a>
              <span className="text-[11px] font-mono text-zinc-400 ml-2">
                Coimbatore, TN · {content.personal.contact.email}
              </span>
            </motion.div>
          </div>

          {/* ============================================================== */}
          {/* CENTER STAGE: Full Standing Cutout (Clean, No Plants or Pillars) (4 Cols) */}
          {/* ============================================================== */}
          <div className="lg:col-span-4 flex justify-center items-end relative min-h-[520px] sm:min-h-[640px] lg:min-h-[740px]">
            {/* Center Volumetric Crimson Glow behind standing figure */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[680px] bg-gradient-to-tr from-[#8d0b1c]/35 via-[#d90429]/40 to-[#ff2a45]/20 rounded-full blur-[120px] pointer-events-none" />

            {/* Glowing Ground Stage Pedestal Beneath Shoes */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-16 bg-gradient-to-r from-transparent via-[#ff2a45]/50 to-transparent rounded-full blur-xl pointer-events-none" />
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-64 h-2 bg-[#ff2a45]/70 rounded-full blur-sm pointer-events-none" />

            {/* Full-Height Standing Cutout */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={{
                opacity: 1,
                y: [0, -6, 0],
                scale: 1,
              }}
              transition={{
                opacity: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 0.7 },
              }}
              className="relative z-20 w-full flex justify-center drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)]"
            >
              <img
                src={standingCutout}
                alt="Hari Prasath S - Portrait"
                className="w-auto h-[58vh] sm:h-[68vh] lg:h-[78vh] xl:h-[84vh] max-h-[820px] object-contain select-none pointer-events-none"
                style={{
                  filter:
                    'drop-shadow(0 0 35px rgba(217, 4, 41, 0.4)) contrast(1.05) brightness(1.02)',
                }}
                loading="eager"
              />
            </motion.div>

            {/* Subtle Identity Pill */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap">
              <span className="text-[10px] font-mono text-zinc-300 bg-black/80 px-3.5 py-1 rounded-full border border-white/15 backdrop-blur-md shadow-lg">
                ● Hari Prasath · Sri Eshwar CSE (2025–2029)
              </span>
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT FLANK: 4 Compact Polished Metric Cards (3 Cols) */}
          {/* ============================================================== */}
          <div className="lg:col-span-3 flex flex-col gap-3.5 z-30 justify-center items-stretch lg:items-end">

            {/* Metric 1: 600+ Solved */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.03, x: -3 }}
              className="w-full max-w-[320px] p-4 rounded-2xl bg-[#0f0f10]/95 backdrop-blur-md border border-white/10 hover:border-[#ff2a45]/60 shadow-xl transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#d90429]/20 border border-[#d90429]/50 flex items-center justify-center text-[#ff2a45] shrink-0 font-anton text-base">
                  600+
                </div>
                <div>
                  <div className="text-xs font-anton text-white tracking-wider flex items-center gap-1.5">
                    <span>PROBLEMS SOLVED</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 font-mono">SkillRack Top Performer</p>
                </div>
              </div>
            </motion.div>

            {/* Metric 2: CocoCut Rover */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.03, x: -3 }}
              onClick={() => scrollTo('#projects')}
              className="w-full max-w-[320px] p-4 rounded-2xl bg-[#0f0f10]/95 backdrop-blur-md border border-white/10 hover:border-[#ff2a45]/60 shadow-xl transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#8d0b1c]/30 border border-[#d90429]/50 flex items-center justify-center text-[#ff2a45] shrink-0">
                  <Cpu className="w-5 h-5 text-[#ff2a45]" />
                </div>
                <div>
                  <div className="text-xs font-anton text-white tracking-wider flex items-center gap-1.5">
                    <span>COCOCUT ROVER</span>
                    <Sparkles className="w-3 h-3 text-[#ff2a45]" />
                  </div>
                  <p className="text-[11px] text-zinc-400 font-mono">MIT App Contest Top 5 Finalist</p>
                </div>
              </div>
            </motion.div>

            {/* Metric 3: Video Editor ISSai & IDC */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ scale: 1.03, x: -3 }}
              onClick={() => scrollTo('#video-showcase')}
              className="w-full max-w-[320px] p-4 rounded-2xl bg-[#0f0f10]/95 backdrop-blur-md border border-white/10 hover:border-[#ff2a45]/60 shadow-xl transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white shrink-0">
                  <Scissors className="w-5 h-5 text-[#ff2a45]" />
                </div>
                <div>
                  <div className="text-xs font-anton text-white tracking-wider">
                    FREELANCE VIDEO EDITOR
                  </div>
                  <p className="text-[11px] text-zinc-400 font-mono">14+ Commercial Client Edits</p>
                </div>
              </div>
            </motion.div>

            {/* Metric 4: The Podium Ep 04 */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ scale: 1.03, x: -3 }}
              onClick={() => scrollTo('#leadership')}
              className="w-full max-w-[320px] p-4 rounded-2xl bg-[#0f0f10]/95 backdrop-blur-md border border-white/10 hover:border-[#ff2a45]/60 shadow-xl transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#d90429]/20 border border-[#ff2a45]/40 flex items-center justify-center text-[#ff2a45] shrink-0">
                  <Mic className="w-5 h-5 text-[#ff2a45]" />
                </div>
                <div>
                  <div className="text-xs font-anton text-white tracking-wider">
                    THE PODIUM · EP 04
                  </div>
                  <p className="text-[11px] text-zinc-400 font-mono">Table-Topic Public Speaker</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}
