import { motion } from 'framer-motion'
import { Calendar, CheckCircle2, Milestone } from 'lucide-react'
import { content } from '../data/content'
import { SectionTitle } from '../components/common/SectionTitle'
import profilePhoto from '../assets/hari-prasath-profile.png'

export function About() {
  const { about } = content

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Red Accents */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#8d0b1c]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 relative z-10">
        <SectionTitle
          badge="ABOUT ME"
          title={about.title}
          subtitle={about.tagline}
          align="center"
        />

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* LEFT: Portrait with Red Glow Frame + Facts Table (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center gap-8">
            {/* Photo with Red Glow Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group w-full max-w-[380px]"
            >
              {/* Outer Red Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#d90429] via-[#ff2a45] to-[#ffe600] rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition-opacity duration-500" />

              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0f0f10] border-2 border-[#d90429]/60 p-2 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Hari Prasath S"
                  className="w-full h-[400px] sm:h-[440px] object-cover rounded-xl object-top group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#050505]/85 border border-white/10 backdrop-blur-md">
                  <div className="font-anton text-base text-white tracking-wider uppercase">
                    HARI PRASATH S
                  </div>
                  <div className="text-xs font-mono text-[#ffe600]">
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
              <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-xs font-mono font-bold text-[#ffe600] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#ffe600]" />
                <span>CORE PROFILE FACTS</span>
              </div>

              <div className="space-y-2.5 text-xs">
                {about.facts.map((fact) => (
                  <div key={fact.label} className="flex items-start justify-between gap-3">
                    <span className="font-mono text-[#9a9a9a]">{fact.label}:</span>
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
              className="space-y-4 text-base text-zinc-300 leading-relaxed font-inter"
            >
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="p-4 rounded-xl bg-[#0f0f10]/80 border border-white/5">
                  {p}
                </p>
              ))}
            </motion.div>

            {/* Journey Timeline */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ff2a45] uppercase tracking-wider">
                <Milestone className="w-4 h-4 text-[#ff2a45]" />
                <span>MILESTONE TIMELINE</span>
              </div>

              <div className="relative border-l-2 border-[#d90429]/40 ml-3 pl-6 space-y-6">
                {about.timeline.map((item, idx) => (
                  <motion.div
                    key={item.year + idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    className="relative group"
                  >
                    {/* Glowing Bullet */}
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#ff2a45] shadow-[0_0_10px_#ff2a45] group-hover:bg-[#ffe600] transition-colors" />

                    <div className="p-4 rounded-xl bg-[#0f0f10] border border-white/10 hover:border-[#d90429]/50 transition-all">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ffe600] mb-1">
                        <Calendar className="w-3.5 h-3.5 text-[#ffe600]" />
                        <span>{item.year}</span>
                      </div>
                      <h4 className="font-anton text-lg text-white tracking-wide uppercase">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed font-inter">
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
