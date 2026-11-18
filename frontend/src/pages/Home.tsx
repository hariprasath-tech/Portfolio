import { useState, useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Preloader } from '../components/common/Preloader'
import { CustomCursor } from '../components/common/CustomCursor'
import { ScrollProgressBar } from '../components/common/ScrollProgressBar'
import { FilmGrain } from '../components/common/FilmGrain'
import { Navbar } from '../components/navigation/Navbar'
import { ResumeModal } from '../components/common/ResumeModal'
import { Footer } from '../components/common/Footer'

import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { TechStack } from '../sections/TechStack'
import { Projects } from '../sections/Projects'
import { VideoShowcase } from '../sections/VideoShowcase'
import { Experience } from '../sections/Experience'
import { LeadershipAchievements } from '../sections/LeadershipAchievements'
import { BeyondCode } from '../sections/BeyondCode'
import { Contact } from '../sections/Contact'

gsap.registerPlugin(ScrollTrigger)

const SECTION_IDS = [
  'hero',
  'about',
  'tech-stack',
  'projects',
  'video-showcase',
  'experience',
  'leadership',
  'beyond-code',
  'contact',
]

export function Home() {
  const [isPreloaderActive, setIsPreloaderActive] = useState(true)
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Smooth Scroll with Lenis and GSAP integration
  useEffect(() => {
    if (isPreloaderActive) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const tickerCb = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tickerCb)
    gsap.ticker.lagSmoothing(0)

    // ScrollSpy for Active Navigation Link
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 180
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SECTION_IDS[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScrollSpy, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScrollSpy)
      gsap.ticker.remove(tickerCb)
      lenis.destroy()
    }
  }, [isPreloaderActive])

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5] flex flex-col relative selection:bg-[#d90429]/40 selection:text-white overflow-x-hidden font-inter">
      {/* 1. Page Load Preloader */}
      {isPreloaderActive && (
        <Preloader onComplete={() => setIsPreloaderActive(false)} />
      )}

      {/* 2. Custom Desktop Cursor */}
      <CustomCursor />

      {/* 3. Top Glowing Red Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* 4. Film Grain Overlay */}
      <FilmGrain />

      {/* 5. Sticky Transparent Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        onHireMeClick={() => {
          const contactEl = document.getElementById('contact')
          if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      {/* 6. Main Content Sections in Exact Sequence */}
      <main className="flex-grow">
        {/* Section 2: Hero */}
        <Hero onResumeClick={() => setIsResumeModalOpen(true)} />

        {/* Section 3: About */}
        <About />

        {/* Section 4: Tech Stack (Bento Grid) */}
        <TechStack />

        {/* Section 5: Featured Projects */}
        <Projects />

        {/* Section 6: Cinematic Video Editing Showcase */}
        <VideoShowcase />

        {/* Section 7: Professional Experience */}
        <Experience />

        {/* Section 8: Leadership & Achievements */}
        <LeadershipAchievements />

        {/* Section 9: Beyond Code */}
        <BeyondCode />

        {/* Section 10: Contact */}
        <Contact />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* 8. Candidate Profile / Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  )
}
