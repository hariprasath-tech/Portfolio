import { useState, useEffect } from 'react'
import {
  ArrowDown,
  FileText,
  Mail,
  Terminal,
  Code2,
  Trophy,
  Bot,
  Phone,
  Mic,
  Film,
  Sparkles,
  MapPin,
  CheckCircle2,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'
import standingCutout from '../assets/hari-standing-cutout.png'
import { GithubIcon, LinkedinIcon } from '../components/common/BrandIcons'
import { HeroParticleCanvas } from '../components/animations/HeroParticleCanvas'

interface HeroProps {
  onResumeClick: () => void
}

const ROLES = [
  'Backend Developer (Java Spring Boot)',
  'Competitive Programmer (600+ Solved)',
  'Public Speaker (The Podium Ep 04)',
  'Autonomous Robotics Architect (CocoCut)',
  'Professional Video Editor (ISSai & IDC)',
]

export function Hero({ onResumeClick }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex items-center justify-center pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-[#07090e]"
    >
      {/* 1. INTERACTIVE FULL-SCREEN PARTICLE STARFIELD */}
      <HeroParticleCanvas />

      {/* 2. HUGE FULL-WIDTH DRIFTING "PORTFOLIO" & "DEVELOPER" OUTLINE BACKGROUND TYPOGRAPHY */}
      <div className="absolute inset-0 w-full flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden opacity-[0.055] z-0">
        <motion.div
          animate={{ x: [-80, 80, -80] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          className="whitespace-nowrap font-black text-[18vw] leading-none tracking-tighter text-transparent select-none"
          style={{
            WebkitTextStroke: '2px #38bdf8',
          }}
        >
          PORTFOLIO · DEVELOPER · SYSTEM ARCHITECT
        </motion.div>
        <motion.div
          animate={{ x: [80, -80, 80] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="whitespace-nowrap font-black text-[16vw] leading-none tracking-tighter text-transparent mt-[-3vw] select-none"
          style={{
            WebkitTextStroke: '2px #818cf8',
          }}
        >
          HARI PRASATH · SPEAKER · ROBOTICS · CREATOR
        </motion.div>
      </div>

      {/* 3. AMBIENT ATMOSPHERIC NEBULA GLOWS THAT BLEED TO SCREEN EDGES */}
      <div className="absolute top-1/4 left-10 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[750px] h-[750px] bg-cyan-500/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[1200px] h-[300px] bg-indigo-600/12 rounded-full blur-[160px] pointer-events-none" />

      {/* Modern cyber grid floor */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* 4. EXPANSIVE FULL-WIDTH CONTAINER (Fills 100% of wide screens with responsive padding) */}
      <div className="relative w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-28 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center min-h-[calc(100vh-8rem)]">
          {/* ============================================================== */}
          {/* LEFT COLUMN: Editorial Presentation & Metrics (7 cols on lg) */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 mb-5 backdrop-blur-md shadow-lg shadow-emerald-950/40"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Open for Software Developer Internships & Full-Stack Roles</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 font-normal">Winter 2026</span>
            </motion.div>

            {/* Overline Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.25em] text-cyan-400 uppercase font-mono mb-2"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>HELLO, WORLD! I'M</span>
            </motion.div>

            {/* Candidate Name Heading (Truly Giant Editorial Typography) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black tracking-tight text-white leading-[0.98]"
            >
              HARI PRASATH{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                S
              </span>
            </motion.h1>

            {/* Dynamic Animated Role Rotator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-4 flex flex-wrap items-center gap-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold min-h-[48px]"
            >
              <span className="text-slate-400 font-normal">I am a</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.25 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Narrative Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Candidate College & Degree Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-cyan-300/90 font-mono"
            >
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Sri Eshwar College of Engineering, Coimbatore</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">B.E. Computer Science & Engineering (2025–2029)</span>
            </motion.div>

            {/* 4-Metric Glassmorphism Stats Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl"
            >
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0c1224]/85 border border-cyan-500/25 text-center shadow-lg backdrop-blur-md hover:border-cyan-400/50 transition-all">
                <div className="flex items-center justify-center gap-1.5 text-cyan-400 text-xs font-mono mb-1">
                  <Trophy className="w-4 h-4" />
                  <span>SkillRack</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">600+</div>
                <div className="text-xs text-slate-400 mt-0.5">Problems Solved</div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0c1224]/85 border border-blue-500/25 text-center shadow-lg backdrop-blur-md hover:border-blue-400/50 transition-all">
                <div className="flex items-center justify-center gap-1.5 text-blue-400 text-xs font-mono mb-1">
                  <Code2 className="w-4 h-4" />
                  <span>LeetCode</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">35+</div>
                <div className="text-xs text-slate-400 mt-0.5">DSA Challenges</div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0c1224]/85 border border-purple-500/25 text-center shadow-lg backdrop-blur-md hover:border-purple-400/50 transition-all">
                <div className="flex items-center justify-center gap-1.5 text-purple-400 text-xs font-mono mb-1">
                  <Mic className="w-4 h-4" />
                  <span>The Podium</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">Ep 04</div>
                <div className="text-xs text-slate-400 mt-0.5">Stage Speaker</div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0c1224]/85 border border-emerald-500/25 text-center shadow-lg backdrop-blur-md hover:border-emerald-400/50 transition-all">
                <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-xs font-mono mb-1">
                  <Film className="w-4 h-4" />
                  <span>Media Editor</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">14+</div>
                <div className="text-xs text-slate-400 mt-0.5">ISSai & IDC Edits</div>
              </div>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollTo('#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all shadow-xl shadow-blue-600/35 border border-blue-400/40 cursor-pointer"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onResumeClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-[#10172c] hover:bg-[#16203c] hover:text-white border border-white/15 transition-all cursor-pointer shadow-lg"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Full Resume</span>
              </button>

              <button
                onClick={() => scrollTo('#speaking')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-sm text-purple-300 hover:text-white bg-purple-900/20 hover:bg-purple-900/40 border border-purple-500/30 transition-all cursor-pointer"
              >
                <Mic className="w-4 h-4 text-purple-400" />
                <span>Watch Speaking Videos</span>
              </button>
            </motion.div>

            {/* Social & Contact Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-4 text-slate-400"
            >
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#0d1428] border border-white/10 hover:border-cyan-400/60 text-slate-300 hover:text-white transition-all hover:scale-110 shadow-md"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#0d1428] border border-white/10 hover:border-blue-400/60 text-slate-300 hover:text-white transition-all hover:scale-110 shadow-md"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="p-3 rounded-xl bg-[#0d1428] border border-white/10 hover:border-emerald-400/60 text-slate-300 hover:text-white transition-all hover:scale-110 shadow-md"
                  aria-label="Send direct email"
                  title={personalInfo.contact.email}
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalInfo.contact.phone}`}
                  className="p-3 rounded-xl bg-[#0d1428] border border-white/10 hover:border-amber-400/60 text-slate-300 hover:text-white transition-all hover:scale-110 shadow-md"
                  aria-label="Call direct phone"
                  title={personalInfo.contact.formattedPhone}
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-[#0d1428]/80 border border-white/10 px-4 py-2 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Coimbatore, TN · irah208prasath@gmail.com · +91 63694 24966</span>
              </div>
            </motion.div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: Life-Size Standing Cutout with Orbiting Badges */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end relative min-h-[580px] lg:min-h-[760px] xl:min-h-[840px]">
            <div className="relative w-full max-w-[560px] xl:max-w-[640px] flex flex-col items-center justify-end">
              {/* Backlight Cyber Glow Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] xl:w-[600px] h-[750px] bg-gradient-to-tr from-cyan-500/25 via-blue-600/30 to-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />

              {/* Holographic Framing Card Behind Hari */}
              <div className="absolute inset-x-4 inset-y-6 rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-white/[0.04] via-transparent to-cyan-500/[0.03] pointer-events-none backdrop-blur-[1px]" />

              {/* Glowing Cyber Pedestal Stage Beneath Hari's Shoes */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-14 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-80 h-3 bg-cyan-300/60 rounded-full blur-md pointer-events-none" />

              {/* Ground Grid Reflection Line */}
              <div className="absolute bottom-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

              {/* Standing Figure (Full-Body Studio Cutout) */}
              <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
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
                className="relative z-10 w-full flex justify-center drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)]"
              >
                <img
                  src={standingCutout}
                  alt="Hari Prasath S - Full Standing Portrait"
                  className="w-auto h-[65vh] sm:h-[75vh] lg:h-[84vh] xl:h-[88vh] 2xl:h-[90vh] max-h-[860px] object-contain select-none pointer-events-none"
                  style={{
                    filter:
                      'drop-shadow(0 0 35px rgba(56, 189, 248, 0.3)) contrast(1.04) brightness(1.02)',
                  }}
                  loading="eager"
                />
              </motion.div>

              {/* ============================================================== */}
              {/* ORBITING EXPANSIVE ACHIEVEMENT BADGES (SPREAD ACROSS RIGHT SIDE) */}
              {/* ============================================================== */}

              {/* Badge 1: Top-Left - 600+ SkillRack Top Performer */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-10 -left-4 sm:-left-12 xl:-left-16 z-20 p-3.5 rounded-2xl bg-[#0c1224]/92 backdrop-blur-md border border-cyan-500/40 shadow-2xl shadow-black/80 hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/35 flex items-center justify-center text-cyan-400 shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white flex items-center gap-1.5">
                      <span>600+ Solved</span>
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono">SkillRack Top Performer</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge 2: Top-Right - Java & Spring Boot Backend */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-32 -right-4 sm:-right-10 xl:-right-14 z-20 p-3.5 rounded-2xl bg-[#0c1224]/92 backdrop-blur-md border border-blue-500/40 shadow-2xl shadow-black/80 hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/35 flex items-center justify-center text-blue-400 shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white">Java & Spring Boot</div>
                    <p className="text-[11px] text-slate-400 font-mono">REST APIs · MySQL · JPA</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge 3: Mid-Left - The Podium Ep 04 Table-Topic Speaker */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="absolute top-[320px] -left-4 sm:-left-14 xl:-left-20 z-20 p-3.5 rounded-2xl bg-[#140f28]/92 backdrop-blur-md border border-purple-500/40 shadow-2xl shadow-black/80 hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/35 flex items-center justify-center text-purple-400 shrink-0">
                    <Mic className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white flex items-center gap-1.5">
                      <span>The Podium Ep 04</span>
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    </div>
                    <p className="text-[11px] text-purple-300 font-mono">Table-Topic Speaker</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge 4: Mid-Right - Professional Video Editor */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-[450px] -right-4 sm:-right-10 xl:-right-14 z-20 p-3.5 rounded-2xl bg-[#0c1824]/92 backdrop-blur-md border border-cyan-400/40 shadow-2xl shadow-black/80 hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/35 flex items-center justify-center text-cyan-300 shrink-0">
                    <Film className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white">ISSai & IDC Media</div>
                    <p className="text-[11px] text-slate-400 font-mono">14+ Commercial Edits</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge 5: Bottom-Left - CocoCut Autonomous Rover */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="absolute bottom-16 -left-4 sm:-left-10 xl:-left-14 z-20 p-3.5 rounded-2xl bg-[#0a1816]/92 backdrop-blur-md border border-emerald-500/40 shadow-2xl shadow-black/80 hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center text-emerald-400 shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white">CocoCut Rover</div>
                    <p className="text-[11px] text-slate-400 font-mono">Raspberry Pi · ML · IoT</p>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Identity Label */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono bg-[#0c1224]/80 border border-white/10 px-4 py-1.5 rounded-full shadow-md z-20">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Hari Prasath · Sri Eshwar CSE (2025–2029)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
