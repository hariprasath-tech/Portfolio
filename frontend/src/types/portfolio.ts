export type ProjectStatus =
  | 'Concept & Prototype'
  | 'In Active Development'
  | 'Research & Design'
  | 'Prototype Testing'

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  categories: string[]
  technologies: string[]
  status: ProjectStatus
  githubUrl?: string
  liveUrl?: string
  image: string
  accentColor: string
  problemStatement: string
  proposedSolution: string
  architecture: string[]
  personalContribution: string[]
  implementationDetails: string[]
  featured: boolean
}

export interface SkillItem {
  name: string
  category: string
  verified: boolean
  description?: string
}

export interface SkillCategory {
  id: string
  title: string
  tagline: string
  icon: string
  skills: SkillItem[]
}

export interface SpeakingEngagement {
  id: string
  title: string
  event: string
  description: string
  duration?: string
  date?: string
  youtubeId?: string
  videoUrl?: string
  localVideoUrl?: string
  isPlaceholder: boolean
  topics: string[]
}

export interface VideoEditingProject {
  id: string
  title: string
  client: string
  type: string
  tool: string
  videoUrl?: string
  description: string
  tags: string[]
}

export type AchievementCategory =
  | 'Hackathon'
  | 'Technical Leadership'
  | 'Team Collaboration'
  | 'College Technical Activity'
  | 'Project Demonstration'
  | 'Public Speaking'
  | 'Cultural Coordination'

export interface AchievementItem {
  id: string
  title: string
  organization: string
  category: AchievementCategory
  period: string
  description: string
  verified: boolean
  tags: string[]
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}
