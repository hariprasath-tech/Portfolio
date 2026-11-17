import { useState } from 'react'
import { Navbar } from '../components/navigation/Navbar'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Skills } from '../sections/Skills'
import { Projects } from '../sections/Projects'
import { Experience } from '../sections/Experience'
import { Speaking } from '../sections/Speaking'
import { Achievements } from '../sections/Achievements'
import { Education } from '../sections/Education'
import { Contact } from '../sections/Contact'
import { Footer } from '../components/common/Footer'
import { ResumeModal } from '../components/common/ResumeModal'
import { useScrollSpy } from '../hooks/useScrollSpy'

const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'projects',
  'experience',
  'speaking',
  'achievements',
  'education',
  'contact',
]

export function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const activeSection = useScrollSpy(SECTION_IDS, 120)

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f8fafc] flex flex-col selection:bg-blue-600/30 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onResumeClick={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onResumeClick={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Speaking />
        <Achievements />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  )
}
