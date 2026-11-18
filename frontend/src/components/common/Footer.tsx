import { ArrowUp, Mail } from 'lucide-react'
import { content } from '../../data/content'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-[#050505] text-[#9a9a9a] py-12 relative overflow-hidden">
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[100px] bg-[#d90429]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d90429] via-[#8d0b1c] to-[#0f0f10] border border-[#ff2a45]/40 flex items-center justify-center text-white font-anton text-lg tracking-wider shadow-[0_0_15px_rgba(255,42,69,0.3)]">
              HP
            </div>
            <div>
              <span className="font-anton text-xl tracking-wider text-white">
                HARI PRASATH S <span className="text-[#ff2a45]">.</span>
              </span>
              <p className="text-xs font-mono text-[#9a9a9a]">
                B.E. Computer Science & Engineering · Sri Eshwar College of Engineering
              </p>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={content.personal.contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-[#0f0f10] border border-white/10 text-[#f5f5f5] hover:text-white hover:border-[#ff2a45]/50 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={content.personal.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-[#0f0f10] border border-white/10 text-[#f5f5f5] hover:text-white hover:border-[#ff2a45]/50 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${content.personal.contact.email}`}
              className="p-3 rounded-xl bg-[#0f0f10] border border-white/10 text-[#f5f5f5] hover:text-white hover:border-[#ff2a45]/50 transition-colors"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0f0f10] border border-white/10 hover:border-[#d90429] text-xs font-mono text-white transition-all ml-2"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#ff2a45]" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Mission */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9a9a9a]">
          <p>
            © {new Date().getFullYear()} Hari Prasath S. Architected with React, TypeScript & Framer Motion.
          </p>
          <div className="flex items-center gap-2 text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a45] animate-pulse" />
            <span>Coimbatore, Tamil Nadu · Open for Internships</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
