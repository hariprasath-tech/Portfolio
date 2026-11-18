import { motion } from 'framer-motion'
import { Code2, Layout, Server, Database, Brain, Wrench, Film, Sparkles } from 'lucide-react'
import { content } from '../data/content'
import { SectionTitle } from '../components/common/SectionTitle'

const CATEGORY_ICONS: Record<string, any> = {
  programming: Code2,
  frontend: Layout,
  backend: Server,
  databases: Database,
  aiml: Brain,
  tools: Wrench,
  creative: Film,
}

export function TechStack() {
  const { techStack } = content

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-[#d90429]/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 relative z-10">
        <SectionTitle
          badge="CAPABILITIES"
          title={techStack.title}
          subtitle={techStack.subtitle}
          align="center"
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {techStack.categories.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat.id] || Sparkles
            // Give programming & backend larger bento spans on wide screens
            const isWide = cat.id === 'programming' || cat.id === 'backend'

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * idx }}
                className={`relative group p-6 rounded-2xl bg-[#0f0f10] border border-white/10 hover:border-[#ff2a45]/50 transition-all duration-300 shadow-xl flex flex-col justify-between ${
                  isWide ? 'md:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Glowing Corner Indicator */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-tr-2xl opacity-15 group-hover:opacity-35 transition-opacity blur-xl pointer-events-none"
                  style={{ backgroundColor: cat.color }}
                />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/10 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white border transition-transform group-hover:scale-105"
                        style={{
                          backgroundColor: `${cat.color}20`,
                          borderColor: `${cat.color}50`,
                          color: cat.color,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-anton text-xl text-white tracking-wide uppercase">
                          {cat.title}
                        </h3>
                        <p className="text-[11px] font-mono text-[#9a9a9a]">{cat.tagline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div
                    className={`grid gap-2.5 ${
                      isWide ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
                    }`}
                  >
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all group/item"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-mono text-xs font-bold text-white group-hover/item:text-[#ffe600] transition-colors">
                            {skill.name}
                          </span>
                          <span
                            className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider"
                            style={{
                              backgroundColor: `${cat.color}25`,
                              color: cat.color,
                            }}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#9a9a9a] leading-tight font-inter">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Category Status */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#9a9a9a]">
                  <span>{cat.skills.length} VERIFIED TOOLS</span>
                  <span className="text-[#ffe600] font-bold">READY FOR PROD</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
