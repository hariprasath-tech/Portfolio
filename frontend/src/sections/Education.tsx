import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle2, School } from 'lucide-react'
import { SectionHeading } from '../components/common/SectionHeading'
import { FadeIn } from '../components/animations/FadeIn'
import { personalInfo } from '../data/portfolioData'

export function Education() {
  const { education } = personalInfo

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        <SectionHeading
          badge="Academic Background"
          title="EDUCATION"
          subtitle="Computer science engineering studies, foundational schooling, and academic excellence."
        />

        <div className="space-y-6">
          {/* College Degree Card */}
          <FadeIn direction="up" delay={0.1}>
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0d1222] border border-blue-500/25 hover:border-blue-500/40 transition-all duration-300 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {education.institution}
                      </h3>
                      <p className="text-base text-blue-400 font-semibold mt-1">
                        {education.degree} – {education.major}
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-blue-400" />
                          {education.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-2 font-mono">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 w-fit">
                      {education.status}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Batch: {education.period}
                    </span>
                  </div>
                </div>

                {/* Coursework & Focus Highlights */}
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    <BookOpen className="w-4 h-4 text-blue-400" />
                    <span>Curriculum & Academic Highlights:</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {education.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-2xl bg-[#111728] border border-white/5 text-xs sm:text-sm text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Schooling Cards (HSLC & SSLC) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.schooling.map((school, sIdx) => (
              <FadeIn key={school.level} direction="up" delay={0.15 + sIdx * 0.05}>
                <div className="p-6 rounded-2xl bg-[#0d1222] border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <School className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-purple-400 uppercase font-semibold">
                        {school.level}
                      </span>
                      <h4 className="text-sm font-bold text-white line-clamp-1">{school.name}</h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mt-2">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>Period: {school.period}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
