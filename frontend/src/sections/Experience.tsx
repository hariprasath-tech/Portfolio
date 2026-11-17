import { Calendar, MapPin, CheckCircle2, Briefcase, Bot, Zap } from 'lucide-react'
import { SectionHeading } from '../components/common/SectionHeading'
import { FadeIn } from '../components/animations/FadeIn'

const experiences = [
  {
    role: 'Media Team Intern',
    organization: 'Issai Technology',
    period: '1 Month Internship',
    type: 'Industry Internship',
    location: 'Technology Environment',
    icon: Briefcase,
    accentColor: '#38bdf8',
    description:
      'Worked with the core media team on creative content production, multimedia digital assets, and company promotional materials.',
    deliverables: [
      'Created video, photo, and poster content for internal and client-facing company use',
      'Collaborated closely with design and media leads to ensure brand consistency',
      'Gained valuable hands-on exposure to working within a fast-paced technology company environment',
    ],
  },
  {
    role: 'Lead Project Architect & Prototyper – CocoCut Rover',
    organization: 'Sri Eshwar Innovation Cell & Hardware Lab',
    period: '2025 – Present',
    type: 'Autonomous Robotics Project',
    location: 'Sri Eshwar College of Engineering',
    icon: Bot,
    accentColor: '#10b981',
    description:
      'Architecting a real-world agricultural automation rover to mechanically detect and cut fallen coconut fronds between plantation trees.',
    deliverables: [
      'Configured Raspberry Pi compute hub with camera telemetry running offline ML frond detection',
      'Engineered multi-directional obstacle avoidance sensors and GPS boundary geofencing',
      'Developed companion mobile app architecture with live camera feed and emergency STOP overrides',
    ],
  },
  {
    role: 'Backend Developer – Smart EV Charging & Camera Network',
    organization: 'Enterprise Web Application Initiative',
    period: '2025',
    type: 'Full-Stack Software Development',
    location: 'Sri Eshwar College of Engineering',
    icon: Zap,
    accentColor: '#818cf8',
    description:
      'Built a centralized web management application for smart street light poles integrating electric vehicle charging telemetry and camera surveillance.',
    deliverables: [
      'Architected backend services using Java Spring Boot, Spring Data JPA, and MySQL with a layered Maven structure',
      'Implemented robust input validation, exception handling, and database-backed audit records',
      'Built responsive frontend views in HTML, CSS, and JavaScript consuming RESTful endpoints',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        <SectionHeading
          badge="Experience & Engineering Projects"
          title="EXPERIENCE & APPLIED INITIATIVES"
          subtitle="Real-world internships, autonomous robotics system prototyping, and enterprise Java backend development."
        />

        <div className="space-y-6">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon

            return (
              <FadeIn key={exp.role} direction="up" delay={0.1 * idx}>
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0d1222] border border-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                    <div className="flex items-start gap-3.5">
                      <div
                        className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 mt-1"
                        style={{
                          backgroundColor: `${exp.accentColor}18`,
                          border: `1px solid ${exp.accentColor}40`,
                          color: exp.accentColor,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-full"
                            style={{
                              backgroundColor: `${exp.accentColor}15`,
                              color: exp.accentColor,
                              border: `1px solid ${exp.accentColor}30`,
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-sm text-slate-300 font-medium">{exp.organization}</p>
                      </div>
                    </div>

                    <div className="text-left sm:text-right font-mono text-xs text-slate-400 space-y-1">
                      <div className="flex items-center sm:justify-end gap-1.5 text-blue-300">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center sm:justify-end gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Key Highlights & Accomplishments:
                    </span>
                    <ul className="grid grid-cols-1 gap-2 text-xs text-slate-300">
                      {exp.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
