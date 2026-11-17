import apiClient from './apiClient'
import { initialAchievements } from '../data/portfolioData'
import type { AchievementItem, ApiResponse } from '../types/portfolio'

export const achievementsService = {
  async getAchievements(): Promise<{ achievements: AchievementItem[]; source: 'api' | 'local' }> {
    try {
      const response = await apiClient.get<ApiResponse<AchievementItem[]>>('/achievements')
      if (response.data && response.data.data && Array.isArray(response.data.data)) {
        return { achievements: response.data.data, source: 'api' }
      }
      return { achievements: initialAchievements, source: 'local' }
    } catch {
      return { achievements: initialAchievements, source: 'local' }
    }
  },
}
