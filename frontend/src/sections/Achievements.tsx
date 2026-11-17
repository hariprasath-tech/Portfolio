import { useState, useEffect } from 'react'
import { Trophy, Users, Award, GitBranch, Calendar, CheckCircle2, Mic, Sparkles } from 'lucide-react'
import { SectionHeading } from '../components/common/SectionHeading'
import { FadeIn } from '../components/animations/FadeIn'
import { achievementsService } from '../services/achievementsService'
import { initialAchievements } from '../data/portfolioData'
import type { AchievementItem, AchievementCategory } from '../types/portfolio'

const categoryIcons: Record<AchievementCategory, React.ElementType> = {
  Hackathon: Trophy,
  'Technical Leadership': GitBranch,
  'Team Collaboration': Users,
  'College Technical Activity': Award,
  'Project Demonstration': Award,
  'Public Speaking': Mic,
  'Cultural Coordination': Sparkles,
}

export function Achievements() {
  const [achievements, setAchievements] = useState<AchievementItem[]>(initialAchievements)

  useEffect(() => {
    let mounted = true
    achievementsService.getAchievements().then((res) => {
      if (mounted && res.achievements) {
        setAchievements(res.achievements)
      }
    })
    return () => {
      mounted = false
    }
  }, [])

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        <SectionHeading
          badge="Leadership & Track Record"
          title="LEADERSHIP & RECOGNITIONS"
          subtitle="Event coordination, public speaking, hackathons, and competitive algorithmic problem solving."
        />

        {/* Timeline Layout */}
        <div className="relative border-l border-blue-500/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {achievements.map((item, idx) => {
            const Icon = categoryIcons[item.category] || Award

            return (
              <FadeIn key={item.id} direction="up" delay={0.08 * idx}>
                <div className="relative group">
                  {/* Timeline Node Point */}
                  <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0a0f1d] border-2 border-blue-500 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-md shadow-blue-500/20">
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 rounded-3xl bg-[#0d1222] border border-white/10 group-hover:border-blue-500/35 transition-all duration-300 shadow-xl group-hover:shadow-blue-500/10">
                    {/* Period and Category Pill */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {item.period}
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-400 mt-0.5">
                      {item.organization}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Verified Status & Tags */}
                    <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400 border border-white/5"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified Achievement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
