import { useState, useEffect } from 'react'
import { SectionHeading } from '../components/common/SectionHeading'
import { FadeIn } from '../components/animations/FadeIn'
import { ProjectCard } from '../components/cards/ProjectCard'
import { ProjectModal } from '../components/common/ProjectModal'
import { projectsService } from '../services/projectsService'
import { initialProjects } from '../data/portfolioData'
import type { Project } from '../types/portfolio'

export function Projects() {
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    let mounted = true
    projectsService.getProjects().then((res) => {
      if (mounted && res.projects) {
        setProjects(res.projects)
      }
    })
    return () => {
      mounted = false
    }
  }, [])

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeading
          badge="Featured Engineering"
          title="FEATURED PROJECTS & SYSTEMS"
          subtitle="Prototyped software architectures, agricultural robotics, predictive AI defense, and full-stack commerce."
        />

        {/* Projects 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <FadeIn key={project.id} direction="up" delay={0.1 * idx}>
              <ProjectCard project={project} onOpenDetails={handleOpenDetails} />
            </FadeIn>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <FadeIn direction="up" delay={0.3} className="mt-12">
          <div className="p-6 rounded-2xl bg-[#0c101c] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-sm font-semibold text-white">
                Interested in system implementation details or code reviews?
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Each project's architectural schematics and self-authored modules can be discussed during interview rounds.
              </p>
            </div>
            <a
              href="https://github.com/hariprasath-tech"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors shrink-0"
            >
              Browse GitHub Repositories
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}
