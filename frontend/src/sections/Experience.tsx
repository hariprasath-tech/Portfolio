import { motion } from 'framer-motion'
import { Calendar, Wrench, CheckCircle2, AlertCircle } from 'lucide-react'
import { content } from '../data/content'
import { SectionTitle } from '../components/common/SectionTitle'

export function Experience() {
  const { experience } = content

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#8d0b1c]/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 relative z-10">
        <SectionTitle
          badge="TRACK RECORD"
          title="PROFESSIONAL EXPERIENCE"
          subtitle="Applied commercial media engagements and freelance video production workflows."
          align="center"
        />

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-[#d90429]/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="relative group"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-5 h-5 rounded-full bg-[#050505] border-2 border-[#ff2a45] shadow-[0_0_12px_#ff2a45] flex items-center justify-center group-hover:scale-125 transition-transform">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffe600]" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0f0f10] border border-white/10 hover:border-[#ff2a45]/50 transition-all shadow-xl space-y-4">
                {/* Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#ffe600] uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <h3 className="font-anton text-2xl sm:text-3xl text-white tracking-wide uppercase leading-tight mt-0.5">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-mono text-[#ff2a45] font-semibold">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-[#ffe600]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-sm text-zinc-300 leading-relaxed font-inter">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    KEY SCOPE & OUTCOMES:
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2a45] mt-1 shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Placeholder Note (as requested for strictly authentic disclosures) */}
                {(exp as { placeholderNote?: string }).placeholderNote && (
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <AlertCircle className="w-3.5 h-3.5 text-[#ffe600] shrink-0" />
                    <span>{(exp as { placeholderNote?: string }).placeholderNote}</span>
                  </div>
                )}

                {/* Tools Strip */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-500 mr-1 flex items-center gap-1">
                    <Wrench className="w-3 h-3" /> Tools:
                  </span>
                  {exp.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#8d0b1c]/20 border border-[#d90429]/30 text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
