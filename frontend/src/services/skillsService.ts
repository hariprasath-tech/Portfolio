import apiClient from './apiClient'
import { initialSkills } from '../data/portfolioData'
import type { SkillCategory, ApiResponse } from '../types/portfolio'

export const skillsService = {
  async getSkills(): Promise<{ skills: SkillCategory[]; source: 'api' | 'local' }> {
    try {
      const response = await apiClient.get<ApiResponse<SkillCategory[]>>('/skills')
      if (response.data && response.data.data && Array.isArray(response.data.data)) {
        return { skills: response.data.data, source: 'api' }
      }
      return { skills: initialSkills, source: 'local' }
    } catch {
      return { skills: initialSkills, source: 'local' }
    }
  },
}
