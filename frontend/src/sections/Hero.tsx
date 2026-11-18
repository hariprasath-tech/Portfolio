import {
  ArrowDown,
  FileText,
  Mail,
  Sparkles,
  MapPin,
  Star,
  Terminal,
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
      className="relative min-h-[100svh] w-full flex items-center justify-center pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-[#080808]"
    >
      {/* 1. BACKGROUND GRADIENTS & RED VOLUMETRIC GLOWS */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#120206] to-[#080808] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-[#78001D]/40 via-[#A00025]/45 to-[#FF1538]/30 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-48 bg-[#FF1538]/20 blur-[130px] pointer-events-none" />

      {/* Subtle Animated Drifting Diagonal Red Streaks */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 select-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 80px,
              rgba(255, 21, 56, 0.4) 80px,
              rgba(255, 21, 56, 0.4) 83px,
              transparent 83px,
              transparent 180px,
              rgba(255, 240, 0, 0.2) 180px,
              rgba(255, 240, 0, 0.2) 182px
            )
          `,
        }}
      />

      {/* 2. CORNER METADATA TAGS (Exact Reference Placement from Image 3 @ 8.7s) */}
      <div className="absolute top-6 left-6 sm:left-10 lg:left-14 z-30 pointer-events-auto">
        <div className="flex flex-col">
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-[#FF1538] uppercase">
            FULL STACK DEVELOPER / AI & ROBOTICS ARCHITECT
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400">
            SRI ESHWAR COLLEGE OF ENGINEERING · COIMBATORE
          </span>
        </div>
      </div>

      <div className="absolute top-6 right-6 sm:right-10 lg:right-14 z-30 pointer-events-auto">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFF000] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFF000]" />
          </span>
          <div className="flex flex-col text-right">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#FFF000] uppercase">
              AVAILABLE FOR FREELANCE & INTERNSHIPS
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400">
              WINTER 2026 · COIMBATORE, TN
            </span>
          </div>
        </div>
      </div>

      {/* 3. COLOSSAL "PORTFOLIO" CINEMATIC WORDMARK BEHIND HARI */}
      {/* Exactly like Reference Image 1 & 3: massive condensed bold typography spanning horizontally behind the portrait */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <div
          className="font-bebas text-[20vw] lg:text-[19vw] leading-none tracking-tight font-extrabold uppercase text-[#A00025]/35 select-none"
          style={{
            textShadow:
              '0 0 50px rgba(160, 0, 37, 0.7), 0 0 100px rgba(255, 21, 56, 0.4), 0 0 160px rgba(120, 0, 29, 0.3)',
            WebkitTextStroke: '2px rgba(255, 21, 56, 0.55)',
            transform: 'translateY(-4%)',
          }}
        >
          PORTFOLIO
        </div>
      </div>

      {/* 4. MAIN THREE-COLUMN / SPLIT STAGE CONTENT CONTAINER */}
      <div className="relative w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 z-10 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[calc(100vh-9rem)]">

          {/* ============================================================== */}
          {/* LEFT FLANK: Hero Headline, Bio, Buttons, Socials (5 Cols) */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-30 pt-6 lg:pt-0">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider text-[#ffe600] bg-[#ffe600]/10 border border-[#ffe600]/30 mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(255,230,0,0.25)]"
            >
              <Star className="w-3.5 h-3.5 text-[#ffe600] fill-[#ffe600] animate-pulse" />
              <span>Available for Software Engineering & Full-Stack Roles</span>
            </motion.div>

            {/* Overline Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.3em] text-[#ff2a45] uppercase font-mono mb-1"
            >
              <Terminal className="w-4 h-4 text-[#ff2a45]" />
              <span>&gt;_ HELLO, WORLD! I'M</span>
            </motion.div>

            {/* Name Heading Typed Letter-by-Letter */}
            <h1 className="font-anton text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-white tracking-wide uppercase leading-[0.92] flex flex-wrap">
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
                  className="text-white hover:text-[#ff2a45] transition-colors"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
              <span className="text-[#ff2a45] ml-2" style={{ textShadow: '0 0 25px rgba(255, 42, 69, 0.8)' }}>
                S
              </span>
            </h1>

            {/* Subtitle: "DEVELOPER | CREATOR | FOUNDER" in Yellow with Outline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-2.5 font-bebas text-2xl sm:text-3xl lg:text-4xl text-[#ffe600] tracking-wider uppercase flex items-center gap-2"
              style={{
                textShadow: '0 0 20px rgba(255, 230, 0, 0.5)',
                WebkitTextStroke: '0.5px #ffffff',
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
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mt-1.5 text-xs sm:text-sm font-mono font-bold text-white tracking-wider uppercase"
            >
              Autonomous Robotics Architect · Full-Stack Engineer · Video Editor
            </motion.div>

            {/* Short Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="mt-3 text-xs sm:text-sm lg:text-base text-zinc-300 leading-relaxed font-inter max-w-xl"
            >
              Computer Science student at Sri Eshwar College of Engineering with a passion for building practical software solutions, exploring emerging technologies, and transforming ideas into meaningful digital products.
            </motion.p>

            {/* College & Degree Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
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
              transition={{ duration: 0.5, delay: 0.85 }}
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
                <FileText className="w-4 h-4 text-[#ffe600]" />
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
              transition={{ duration: 0.5, delay: 0.95 }}
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
          {/* CENTER STAGE: Cutout Profile Photo in Front of PORTFOLIO (4 Cols) */}
          {/* ============================================================== */}
          <div className="lg:col-span-4 flex justify-center items-end relative min-h-[520px] sm:min-h-[640px] lg:min-h-[720px]">
            {/* Center Volumetric Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[680px] bg-gradient-to-tr from-[#78001D]/40 via-[#A00025]/45 to-[#FF1538]/30 rounded-full blur-[110px] pointer-events-none" />

            {/* Glowing Ground Pedestal Light Beneath Shoes */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-16 bg-gradient-to-r from-transparent via-[#FF1538]/50 to-transparent rounded-full blur-xl pointer-events-none" />
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-64 h-2 bg-[#FFF000]/70 rounded-full blur-sm pointer-events-none" />

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
                alt="Hari Prasath S - Portrait Cutout"
                className="w-auto h-[58vh] sm:h-[68vh] lg:h-[78vh] xl:h-[84vh] max-h-[820px] object-contain select-none pointer-events-none"
                style={{
                  filter:
                    'drop-shadow(0 0 35px rgba(255, 21, 56, 0.45)) contrast(1.06) brightness(1.02)',
                }}
                loading="eager"
              />
            </motion.div>

            {/* Caption beneath Portrait */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap">
              <span className="text-[10px] font-mono text-zinc-400 bg-black/70 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                ● Hari Prasath · Sri Eshwar CSE (2025–2029)
              </span>
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT FLANK: 4 Floating Interactive Stat Cards (3 Cols) */}
          {/* ============================================================== */}
          <div className="lg:col-span-3 flex flex-col gap-3.5 z-30 justify-center">

            {/* Card 1: 600+ Solved */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.03, x: -4 }}
              className="p-3.5 rounded-2xl bg-[#0f0f10]/95 backdrop-blur-md border border-[#d90429]/40 shadow-xl transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#d90429]/20 border border-[#d90429]/50 flex items-center justify-center text-[#ff2a45] shrink-0 font-anton text-base">
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

            {/* Card 2: Java & Spring Boot */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.03, x: -4 }}
              className="p-3.5 rounded-2xl bg-[#0f0f10]/95 backdrop-blur-md border border-white/10 hover:border-[#ffe600]/40 shadow-xl transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ffe600]/10 border border-[#ffe600]/30 flex items-center justify-center text-[#ffe600] shrink-0">
                  <Terminal className="w-5 h-5 text-[#ffe600]" />
                </div>
                <div>
                  <div className="text-xs font-anton text-white tracking-wider">
                    JAVA & SPRING BOOT
                  </div>
                  <p className="text-[10px] text-zinc-400 font-mono">REST APIs · MySQL · JDBC</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: The Podium Ep 04 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.03, x: -4 }}
              onClick={() => scrollTo('#leadership')}
              className="p-3.5 rounded-2xl bg-[#0f0f10]/95 backdrop-blur-md border border-[#8d0b1c]/50 hover:border-[#ff2a45] shadow-xl transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8d0b1c]/30 border border-[#ff2a45]/40 flex items-center justify-center text-[#ff2a45] shrink-0 font-anton text-sm">
                  EP 04
                </div>
                <div>
                  <div className="text-xs font-anton text-white tracking-wider flex items-center gap-1.5">
                    <span>THE PODIUM INITIATIVE</span>
                    <Sparkles className="w-3 h-3 text-[#ffe600]" />
                  </div>
                  <p className="text-[10px] text-zinc-400 font-mono">Table-Topic Public Speaker</p>
                </div>
              </div>
            </motion.div>

            {/* Card 4: CocoCut Rover */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.03, x: -4 }}
              onClick={() => scrollTo('#projects')}
              className="p-3.5 rounded-2xl bg-[#0f0f10]/95 backdrop-blur-md border border-[#ff2a45]/40 shadow-xl transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#d90429]/20 border border-[#ff2a45]/50 flex items-center justify-center text-[#ffe600] shrink-0 font-anton text-sm">
                  ROVER
                </div>
                <div>
                  <div className="text-xs font-anton text-white tracking-wider">
                    COCOCUT HARDWARE
                  </div>
                  <p className="text-[10px] text-zinc-400 font-mono">Raspberry Pi · Offline ML</p>
                </div>
              </div>
            </motion.div>

            {/* Card 5: Video Editor ISSai & IDC */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.03, x: -4 }}
              onClick={() => scrollTo('#video-showcase')}
              className="p-3.5 rounded-2xl bg-[#0f0f10]/95 backdrop-blur-md border border-white/10 hover:border-[#ffe600]/50 shadow-xl transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center text-[#ffe600] shrink-0 font-anton text-sm">
                  14+
                </div>
                <div>
                  <div className="text-xs font-anton text-white tracking-wider">
                    FREELANCE VIDEO EDITOR
                  </div>
                  <p className="text-[10px] text-zinc-400 font-mono">ISSai & IDC Media (CapCut)</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}
