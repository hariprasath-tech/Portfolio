import { Layers, Terminal, Users, Cpu, BookOpen } from 'lucide-react'
import { SectionHeading } from '../components/common/SectionHeading'
import { FadeIn } from '../components/animations/FadeIn'
import { personalInfo } from '../data/portfolioData'

const highlights = [
  {
    icon: Terminal,
    title: 'Full-Stack Software Focus',
    description:
      'Designing robust web systems, typed React frontends, and RESTful Node.js APIs backed by relational and document databases.',
    badge: 'Core Focus',
  },
  {
    icon: Layers,
    title: 'Algorithms & Problem Solving',
    description:
      'Building strong computer science fundamentals through continuous practice in Data Structures, Object-Oriented Design, and algorithmic efficiency.',
    badge: 'Foundation',
  },
  {
    icon: Cpu,
    title: 'AI, IoT & Robotics',
    description:
      'Experimenting beyond purely digital software into hardware actuation (CocoCut) and machine learning threat forecasting (CyberSentinel).',
    badge: 'Exploration',
  },
  {
    icon: Users,
    title: 'Leadership & Public Speaking',
    description:
      'Demonstrated experience in technical team collaboration, hackathons, and presenting complex engineering topics to student peers and mentors.',
    badge: 'Communication',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeading
          badge="About Me"
          title="A LITTLE ABOUT ME"
          subtitle="Engineering curiosity meets hands-on software development and technical communication."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative bio left side (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <FadeIn direction="up" delay={0.1}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0d1222] border border-white/10 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-blue-400">
                  <BookOpen className="w-4 h-4" />
                  <span>Engineering Journey & Vision</span>
                </div>

                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {personalInfo.detailedBio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Focus Badges */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    B.E. Computer Science & Engg
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    600+ SkillRack Solved
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    Public Speaker (The Podium)
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    Video Editor (ISSai & IDC)
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Quick stats / Highlights row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <FadeIn direction="up" delay={0.15}>
                <div className="p-4 rounded-2xl bg-[#0c101c] border border-white/5 text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">4+</div>
                  <div className="text-xs text-slate-400 mt-1">Key Prototypes</div>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <div className="p-4 rounded-2xl bg-[#0c101c] border border-white/5 text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">100%</div>
                  <div className="text-xs text-slate-400 mt-1">Self-Authored Code</div>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.25} className="col-span-2 sm:col-span-1">
                <div className="p-4 rounded-2xl bg-[#0c101c] border border-white/5 text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">SECE</div>
                  <div className="text-xs text-slate-400 mt-1">Autonomous Inst.</div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Core Philosophy Cards right side (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <FadeIn key={item.title} direction="left" delay={0.1 + idx * 0.08}>
                  <div className="group p-5 rounded-2xl bg-[#0d1222] border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                            {item.title}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
