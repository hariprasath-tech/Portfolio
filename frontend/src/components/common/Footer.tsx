import { ArrowUp, Mail, Phone } from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-[#05070b] text-slate-400 py-12 relative">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-black shadow-md shadow-blue-500/20">
              HP
            </span>
            <div>
              <span className="font-extrabold text-white text-base tracking-tight">
                {personalInfo.name}
              </span>
              <p className="text-xs text-slate-400">
                {personalInfo.role} · Sri Eshwar College of Engineering
              </p>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#0c101c] border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#0c101c] border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="p-2.5 rounded-xl bg-[#0c101c] border border-white/10 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${personalInfo.contact.phone}`}
              className="p-2.5 rounded-xl bg-[#0c101c] border border-white/10 text-slate-300 hover:text-white hover:border-amber-500/40 transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:text-white hover:bg-blue-600 transition-all cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="font-mono text-center sm:text-right text-slate-400">
            Sri Eshwar College of Engineering · irah208prasath@gmail.com
          </p>
        </div>
      </div>
    </footer>
  )
}
