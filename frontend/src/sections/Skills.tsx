import { useState, useEffect } from 'react'
import { Code2, Globe, Database, Wrench, Cpu, Check, Layers } from 'lucide-react'
import { SectionHeading } from '../components/common/SectionHeading'
import { FadeIn } from '../components/animations/FadeIn'
import { skillsService } from '../services/skillsService'
import type { SkillCategory } from '../types/portfolio'
import { initialSkills } from '../data/portfolioData'

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Database,
  Wrench,
  Cpu,
}

export function Skills() {
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>(initialSkills)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  useEffect(() => {
    let mounted = true
    skillsService.getSkills().then((res) => {
      if (mounted && res.skills) {
        setSkillCategories(res.skills)
      }
    })
    return () => {
      mounted = false
    }
  }, [])

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory)

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeading
          badge="Technical Skills"
          title="TECHNICAL EXPERTISE & TOOLS"
          subtitle="Core engineering languages, modern web stack, databases, and emerging hardware-software domains."
        />

        {/* Filter Pills */}
        <FadeIn direction="up" delay={0.1} className="mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-400/30'
                  : 'bg-[#101626] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-400/30'
                    : 'bg-[#101626] text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Layers

            return (
              <FadeIn key={category.id} direction="up" delay={0.08 * index}>
                <div className="h-full flex flex-col justify-between p-6 rounded-3xl bg-[#0d1222] border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 group">
                  <div>
                    {/* Header with Icon */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-1">{category.tagline}</p>
                      </div>
                    </div>

                    {/* Skill Pills / List */}
                    <div className="space-y-2.5 mt-5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-3 rounded-xl bg-[#111728] border border-white/5 hover:border-white/10 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs sm:text-sm font-semibold text-slate-200">
                              {skill.name}
                            </span>
                            <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                              <Check className="w-2.5 h-2.5" />
                              Demonstrable
                            </span>
                          </div>
                          {skill.description && (
                            <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                              {skill.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer note */}
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>{category.skills.length} skills listed</span>
                    <span className="text-blue-400">Strictly verified</span>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

        {/* Note on integrity */}
        <FadeIn direction="up" delay={0.25} className="mt-8 text-center">
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            * Skills are listed strictly based on practical demonstration ability, academic lab implementations, and self-authored code.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
