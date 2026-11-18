import { motion } from 'framer-motion'
import { Calendar, CheckCircle2 } from 'lucide-react'
import { content } from '../data/content'
import profilePhoto from '../assets/hari-prasath-profile.png'

export function About() {
  const { about } = content

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#080808] border-t border-white/5">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-[#8d0b1c]/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 relative z-10">
        {/* Section Header with Pure White Typography */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-[0.25em] text-[#ff2a45] uppercase bg-[#8d0b1c]/15 border border-[#d90429]/30 mb-3 shadow-[0_0_15px_rgba(217,4,41,0.2)]">
            <span>ABOUT ME</span>
          </div>

          <h2
            className="font-bebas text-5xl sm:text-7xl md:text-8xl tracking-wider uppercase leading-none text-white"
            style={{
              textShadow: '0 0 30px rgba(255, 42, 69, 0.4), 0 0 60px rgba(141, 11, 28, 0.25)',
            }}
          >
            {about.heading || 'MORE THAN JUST CODE.'}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed font-inter">
            {about.tagline}
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start max-w-7xl mx-auto">
          {/* LEFT: Portrait with Red Glow Frame + Facts Table (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center gap-8">
            {/* Photo with Red Glow Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group w-full max-w-[380px]"
            >
              {/* Outer Crimson Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#8d0b1c] via-[#d90429] to-[#ff2a45] rounded-3xl blur-xl opacity-35 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0f0f10] border-2 border-[#d90429]/60 p-2 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Hari Prasath S"
                  className="w-full h-[380px] sm:h-[420px] object-cover rounded-xl object-top group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#080808]/90 border border-white/10 backdrop-blur-md">
                  <div className="font-anton text-base text-white tracking-wider uppercase">
                    HARI PRASATH S
                  </div>
                  <div className="text-xs font-mono text-[#ff2a45]">
                    CSE Student · Robotics Builder · Video Editor
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Facts Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full max-w-[380px] p-5 rounded-2xl bg-[#0f0f10] border border-white/10 shadow-xl space-y-3"
            >
              <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-xs font-mono font-bold text-[#ff2a45] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#ff2a45]" />
                <span>CORE PROFILE FACTS</span>
              </div>

              <div className="space-y-2.5 text-xs">
                {about.facts.map((fact) => (
                  <div key={fact.label} className="flex items-start justify-between gap-3">
                    <span className="font-mono text-zinc-400">{fact.label}:</span>
                    <span className="font-semibold text-white text-right">{fact.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Narrative Biography & Journey Timeline (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Summary Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-inter"
            >
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="p-4 sm:p-5 rounded-2xl bg-[#0f0f10] border border-white/5 shadow-md">
                  {p}
                </p>
              ))}
            </motion.div>

            {/* Journey Timeline */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ff2a45] uppercase tracking-wider pb-2 border-b border-white/10">
                <Calendar className="w-4 h-4 text-[#ff2a45]" />
                <span>MILESTONE TIMELINE</span>
              </div>

              <div className="relative border-l-2 border-[#d90429]/40 ml-3 pl-6 space-y-6">
                {about.timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.08 * idx }}
                    className="relative group"
                  >
                    {/* Glowing Bullet */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#080808] border-2 border-[#ff2a45] shadow-[0_0_8px_#ff2a45] group-hover:scale-125 transition-transform" />

                    <div className="p-4 rounded-xl bg-[#0f0f10] border border-white/5 hover:border-[#ff2a45]/40 transition-all">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-anton text-base text-white tracking-wide uppercase">
                          {item.title}
                        </span>
                        <span className="text-xs font-mono font-bold text-[#ff2a45] bg-[#d90429]/15 px-2.5 py-0.5 rounded-full border border-[#d90429]/30 shrink-0">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-inter">
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
