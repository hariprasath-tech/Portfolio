import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Layers,
  ArrowUpRight,
  Cpu,
  Shield,
  ShoppingCart,
  Flame,
  CloudRain,
  Key,
} from 'lucide-react'
import { content } from '../data/content'
import type { ProjectItem } from '../data/content'
import { SectionTitle } from '../components/common/SectionTitle'
import { ProjectModal } from '../components/common/ProjectModal'
import { GithubIcon } from '../components/common/BrandIcons'

const PROJECT_ICONS: Record<string, any> = {
  'cococut-rover': Cpu,
  'cybersentinel-ai': Shield,
  'localkart-namma-mart': ShoppingCart,
  'ev-fire-safety': Flame,
  'ai-carbon-monitor': CloudRain,
  'nexus-token': Key,
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  const heroProject = content.projects[0] // 01 CocoCut
  const secondProject = content.projects[1] // 02 CyberSentinel AI
  const gridProjects = content.projects.slice(2) // 03 LocalKart, 04 EV Safety, 05 Carbon, 06 Nexus Token

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Red Streak */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8d0b1c]/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 relative z-10">
        <SectionTitle
          badge="PORTFOLIO HIGHLIGHTS"
          title="FEATURED PROJECTS & SYSTEMS"
          subtitle="Prototyped software architectures, agricultural robotics, predictive AI defense, and full-stack systems."
          align="center"
        />

        {/* ============================================================== */}
        {/* 01. LARGEST HERO-SIZE CARD: COCOCUT ROVER */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group mb-10 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0f0f10] via-[#0f0f10] to-[#1a080d] border border-[#d90429]/40 shadow-[0_20px_60px_rgba(217,4,41,0.2)] overflow-hidden"
        >
          {/* Subtle Ambient Red Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff2a45]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-[#ffe600] bg-[#ffe600]/10 border border-[#ffe600]/30 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#ffe600]" />
                  <span>PRIORITY 01 · HERO VENTURE</span>
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-white bg-[#d90429]/30 border border-[#d90429]/50">
                  {heroProject.status}
                </span>
              </div>

              <div>
                <h3 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase leading-tight">
                  {heroProject.title}
                </h3>
                <p className="font-mono text-sm sm:text-base text-[#ffe600] mt-1 font-semibold">
                  {heroProject.subtitle}
                </p>
              </div>

              {/* Founder Story Callout */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-zinc-300 leading-relaxed font-inter">
                <span className="font-mono font-bold text-[#ff2a45] uppercase tracking-wider block mb-1">
                  FOUNDER STORY (Nithin Vasan, Adithiya Jayan & Hari Prasath S):
                </span>
                {heroProject.founderStory}
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-inter">
                <strong>Problem & Solution:</strong> {heroProject.problem} We engineered an autonomous mechanized climbing rover with high-torque motor drivers and cutting blades.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {heroProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[#8d0b1c]/25 border border-[#d90429]/35 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  onClick={() => setSelectedProject(heroProject)}
                  className="px-6 py-3 rounded-xl font-anton text-xs tracking-wider uppercase text-white bg-gradient-to-r from-[#8d0b1c] to-[#d90429] hover:brightness-110 shadow-[0_0_20px_rgba(255,42,69,0.4)] border border-[#ff2a45]/50 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Deep Dive Specs</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {heroProject.github && (
                  <a
                    href={heroProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 rounded-xl font-mono text-xs font-bold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 flex items-center gap-2 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View GitHub Repo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Visual Card (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden border border-[#d90429]/40 bg-[#050505] p-4 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 text-[#ff2a45]">
                    <Cpu className="w-3.5 h-3.5" />
                    HARDWARE TELEMETRY
                  </span>
                  <span>RASPBERRY PI 4B</span>
                </div>

                <div className="py-6 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-20 h-20 rounded-2xl bg-[#d90429]/20 border border-[#d90429]/50 flex items-center justify-center text-[#ff2a45] shadow-[0_0_30px_rgba(217,4,41,0.4)]">
                    <Cpu className="w-10 h-10" />
                  </div>
                  <div className="font-anton text-2xl text-white tracking-wide uppercase">
                    AUTONOMOUS CLIMBER
                  </div>
                  <div className="text-xs font-mono text-[#ffe600]">
                    Field Tested · Mechanized Pruning
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-white/10 text-xs font-mono text-zinc-300">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Dual Blades:</span>
                    <span className="text-white">High-Torque DC Servo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Vision System:</span>
                    <span className="text-white">Offline OpenCV ML</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Recognition:</span>
                    <span className="text-[#ffe600]">MIT App Contest Top 5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* 02. SECOND LARGEST CARD: CYBERSENTINEL AI (SIH 2026) */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative group mb-10 p-6 sm:p-8 rounded-3xl bg-[#0f0f10] border border-white/15 hover:border-[#ff2a45]/50 transition-all shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-[#ff2a45] bg-[#d90429]/15 border border-[#d90429]/30 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#ff2a45]" />
                  <span>PRIORITY 02 · SMART INDIA HACKATHON 2026</span>
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-[#ffe600] bg-[#ffe600]/10 border border-[#ffe600]/30">
                  Team Neural Nexus
                </span>
              </div>

              <div>
                <h3 className="font-anton text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide uppercase leading-tight">
                  {secondProject.title}
                </h3>
                <p className="font-mono text-sm text-[#ffe600] mt-0.5">{secondProject.subtitle}</p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-inter">
                {secondProject.problem} {secondProject.solution}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {secondProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setSelectedProject(secondProject)}
                  className="px-5 py-2.5 rounded-xl font-anton text-xs tracking-wider uppercase text-white bg-[#d90429] hover:bg-[#ff2a45] transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(255,42,69,0.3)]"
                >
                  <span>View Details Modal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {secondProject.github && (
                  <a
                    href={secondProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl font-mono text-xs font-bold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl bg-[#050505] border border-white/10 text-xs font-mono space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-white font-bold">
                <span>INTRUSION FORENSICS</span>
                <span className="text-[#ffe600]">LIGHTGBM + SHAP</span>
              </div>
              <p className="text-zinc-400 font-inter text-xs leading-relaxed">
                Evaluates packet sequence flow rates to forecast distributed zero-day DDoS and polymorphic attack payloads with feature attribution explainability.
              </p>
              <div className="p-2.5 rounded-lg bg-[#8d0b1c]/15 border border-[#d90429]/30 text-[#ff2a45] text-[11px]">
                Status: Verified SIH 2026 Initiative
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* 03-06. 2X2 GRID OF 3D TILT CARDS */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridProjects.map((p, idx) => {
            const Icon = PROJECT_ICONS[p.id] || Layers

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-[#0f0f10] border border-white/10 hover:border-[#ff2a45]/50 transition-all flex flex-col justify-between shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10 mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ffe600]">
                      <Icon className="w-4 h-4 text-[#ff2a45]" />
                      <span>{p.category}</span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">
                      PRIORITY 0{idx + 3}
                    </span>
                  </div>

                  <h4 className="font-anton text-2xl sm:text-3xl text-white tracking-wide uppercase group-hover:text-[#ffe600] transition-colors leading-tight">
                    {p.title}
                  </h4>
                  <p className="font-mono text-xs text-zinc-400 mt-1 mb-3">{p.subtitle}</p>

                  <p className="text-xs text-zinc-300 leading-relaxed font-inter mb-4">
                    {p.problem}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.techStack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(p)}
                    className="text-xs font-anton text-white hover:text-[#ff2a45] flex items-center gap-1.5 tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#ff2a45]" />
                  </button>

                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
