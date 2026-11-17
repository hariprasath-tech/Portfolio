import { X, Download, ExternalLink, GraduationCap, Code2, Award, Mail, Phone, Briefcase, Trophy } from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null

  const handleDownload = () => {
    window.print()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#0d1220] border border-white/15 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl text-slate-200 z-10 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between border-b border-white/10 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-2">
              Verified Candidate Resume
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">{personalInfo.name}</h3>
            <p className="text-sm text-slate-400 mt-0.5">
              {personalInfo.role} · {personalInfo.secondaryRole}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Resume View */}
        <div className="mt-6 space-y-6 text-sm">
          {/* Quick Contact Bar */}
          <div className="flex flex-wrap items-center gap-4 p-3 rounded-xl bg-[#111728] border border-white/5 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{personalInfo.contact.formattedPhone}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <a href={`mailto:${personalInfo.contact.email}`} className="text-cyan-300 hover:underline">
                {personalInfo.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors text-blue-400"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors text-indigo-400"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              About Me
            </h4>
            <p className="text-slate-300 leading-relaxed bg-[#111728] p-3.5 rounded-xl border border-white/5">
              {personalInfo.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <div className="space-y-2">
              <div className="bg-[#111728] p-3.5 rounded-xl border border-white/5">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-semibold text-white">
                      {personalInfo.education.institution}
                    </h5>
                    <p className="text-xs text-slate-300">
                      {personalInfo.education.degree} – {personalInfo.education.major}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    2025 – 2029
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {personalInfo.education.schooling.map((s) => (
                  <div key={s.level} className="bg-[#111728] p-2.5 rounded-xl border border-white/5">
                    <span className="text-white font-medium block">{s.level}</span>
                    <span className="text-slate-400">{s.name} ({s.period})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Competitive Programming & Coding Achievements */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              <Trophy className="w-4 h-4" />
              <span>Competitive Coding Track Record</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-[#111728] p-3 rounded-xl border border-cyan-500/30">
                <span className="text-xl font-bold text-white block">600+</span>
                <span className="text-[11px] text-cyan-300">SkillRack Solved</span>
              </div>
              <div className="bg-[#111728] p-3 rounded-xl border border-indigo-500/30">
                <span className="text-xl font-bold text-white block">35+</span>
                <span className="text-[11px] text-indigo-300">LeetCode Solved</span>
              </div>
              <div className="bg-[#111728] p-3 rounded-xl border border-emerald-500/30">
                <span className="text-xl font-bold text-white block">30+</span>
                <span className="text-[11px] text-emerald-300">HackerRank Solved</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              <Code2 className="w-4 h-4" />
              <span>Key Projects</span>
            </div>
            <ul className="space-y-2.5">
              <li className="bg-[#111728] p-3 rounded-xl border border-white/5">
                <span className="font-semibold text-white text-xs block">CocoCut – Autonomous Coconut Frond Cutting Rover</span>
                <p className="text-xs text-slate-400 mt-0.5">
                  Autonomous rover with Raspberry Pi compute, offline ML detection camera, obstacle avoidance sensors, GPS boundary marking, and companion mobile app.
                </p>
              </li>
              <li className="bg-[#111728] p-3 rounded-xl border border-white/5">
                <span className="font-semibold text-white text-xs block">EV Charging & Camera Network</span>
                <p className="text-xs text-slate-400 mt-0.5">
                  Full-stack smart pole management platform built in Java Spring Boot with Spring Data JPA and MySQL; layered Maven architecture and REST APIs.
                </p>
              </li>
            </ul>
          </div>

          {/* Industry Experience */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </div>
            <div className="bg-[#111728] p-3.5 rounded-xl border border-white/5">
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-semibold text-white">Media Team Intern – Issai Technology</h5>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Worked with the media team on creative video, photo, and poster content; gained exposure to working in a technology company environment.
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400">1 Month</span>
              </div>
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              <Award className="w-4 h-4" />
              <span>Achievements & Certifications</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-[#111728] p-2.5 rounded-xl border border-white/5">
                <span className="font-semibold text-white">Top Performer – MIT APP Project Contest</span>
              </div>
              <div className="bg-[#111728] p-2.5 rounded-xl border border-white/5">
                <span className="font-semibold text-white">Academic Champion – Sri Eshwar College</span>
              </div>
              <div className="bg-[#111728] p-2.5 rounded-xl border border-white/5">
                <span className="font-semibold text-white">Youth for Climate Action</span>
              </div>
              <div className="bg-[#111728] p-2.5 rounded-xl border border-white/5">
                <span className="font-semibold text-white">Certified in C Programming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
