import { motion } from 'framer-motion'
import { Film, Activity, Shield, Mic, Rocket, Sparkles } from 'lucide-react'
import { content } from '../data/content'
import { SectionTitle } from '../components/common/SectionTitle'

const ICONS: Record<string, any> = {
  Film,
  Activity,
  Shield,
  Mic,
  Rocket,
}

export function BeyondCode() {
  const { beyondCode } = content

  return (
    <section id="beyond-code" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Volumetric Red Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8d0b1c]/15 rounded-full blur-[190px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 relative z-10">
        <SectionTitle
          badge="MULTIDISCIPLINARY"
          title="BEYOND CODE"
          subtitle="Athletic rigor, motion storytelling, spontaneous stage articulation, and entrepreneurial grit."
          align="center"
        />

        {/* Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beyondCode.map((item, idx) => {
            const Icon = ICONS[item.icon] || Sparkles
            // Make the first item (video editing) or last (entrepreneurship) span 2 on md if appropriate
            const isFeatured = idx === 0 || idx === 4

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                whileHover={{ y: -6 }}
                className={`p-7 rounded-2xl bg-[#0f0f10] border border-white/10 hover:border-[#ff2a45]/50 transition-all shadow-xl flex flex-col justify-between group ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1' : 'col-span-1'
                }`}
              >
                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                    <span className="text-xs font-mono font-bold text-[#ffe600] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white border transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${item.accentColor}20`,
                        borderColor: `${item.accentColor}45`,
                        color: item.accentColor,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Headline */}
                  <h3 className="font-anton text-2xl sm:text-3xl text-white tracking-wide uppercase leading-tight group-hover:text-[#ffe600] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-[#ff2a45] font-semibold mt-1 mb-3">
                    {item.headline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-inter">
                    {item.description}
                  </p>
                </div>

                {/* Takeaway Ribbon */}
                <div className="mt-6 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono text-zinc-400">
                  <span className="text-[#ffe600] font-bold block mb-0.5">ENGINEERING IMPACT:</span>
                  <span>{item.takeaway}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
