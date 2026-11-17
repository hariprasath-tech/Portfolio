import apiClient from './apiClient'
import { initialProjects } from '../data/portfolioData'
import type { Project, ApiResponse } from '../types/portfolio'

export const projectsService = {
  async getProjects(): Promise<{ projects: Project[]; source: 'api' | 'local' }> {
    try {
      const response = await apiClient.get<ApiResponse<Project[]>>('/projects')
      if (response.data && response.data.data && Array.isArray(response.data.data)) {
        return { projects: response.data.data, source: 'api' }
      }
      return { projects: initialProjects, source: 'local' }
    } catch {
      // Backend not running or unreachable: use verified local portfolio data
      return { projects: initialProjects, source: 'local' }
    }
  },

  async getProjectById(id: string): Promise<Project | null> {
    try {
      const response = await apiClient.get<ApiResponse<Project>>(`/projects/${id}`)
      if (response.data && response.data.data) {
        return response.data.data
      }
      return initialProjects.find((p) => p.id === id) || null
    } catch {
      return initialProjects.find((p) => p.id === id) || null
    }
  },
}
