import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Trophy, Sparkles, ChevronLeft, ChevronRight, Mic, BookOpen, Rocket } from 'lucide-react'
import { content } from '../data/content'

const CATEGORY_ICONS: Record<string, any> = {
  Leadership: Users,
  Founder: Rocket,
  Hackathon: Trophy,
  Competition: Award,
  Speaking: Mic,
  Course: BookOpen,
}

export function LeadershipAchievements() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { leadershipAchievements } = content

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="leadership" className="py-24 relative overflow-hidden bg-[#080808] border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#d90429]/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-[0.2em] text-[#ff2a45] uppercase bg-[#8d0b1c]/15 border border-[#d90429]/30 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RECOGNITION & INITIATIVE</span>
            </div>
            <h2
              className="font-anton text-3xl sm:text-5xl md:text-6xl tracking-wider uppercase leading-none text-white"
              style={{
                textShadow: '0 0 25px rgba(255, 42, 69, 0.45)',
              }}
            >
              LEADERSHIP & ACHIEVEMENTS
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-xl font-inter">
              Placement coordination, agricultural robotics startup founding, hackathons, and public speaking.
            </p>
          </div>

          {/* Scroll Navigation Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleScroll('left')}
              className="p-3 rounded-xl bg-[#0f0f10] border border-white/10 hover:border-[#ff2a45] text-white transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Scroll achievements left"
            >
              <ChevronLeft className="w-5 h-5 text-[#ff2a45]" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-3 rounded-xl bg-[#0f0f10] border border-white/10 hover:border-[#ff2a45] text-white transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Scroll achievements right"
            >
              <ChevronRight className="w-5 h-5 text-[#ff2a45]" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {leadershipAchievements.map((item, idx) => {
            const Icon = CATEGORY_ICONS[item.category] || Award

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * idx }}
                className="w-[320px] sm:w-[380px] shrink-0 p-6 sm:p-7 rounded-2xl bg-[#0f0f10] border border-white/10 hover:border-[#ff2a45]/60 transition-all flex flex-col justify-between shadow-xl group snap-start"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ff2a45]">
                      <Icon className="w-4 h-4 text-[#ff2a45]" />
                      <span>{item.category.toUpperCase()}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-white bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="font-anton text-2xl text-white tracking-wide uppercase leading-tight group-hover:text-[#ff2a45] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-[#ff2a45] mt-1 font-semibold">
                    {item.subtitle}
                  </p>

                  <div className="text-xs font-mono text-zinc-400 mt-2 mb-3">
                    Role: <span className="text-white font-medium">{item.role}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-inter">
                    {item.highlight}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-[#8d0b1c]/20 border border-[#d90429]/30 text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
