import apiClient from './apiClient'
import { initialSpeaking } from '../data/portfolioData'
import type { SpeakingEngagement, ApiResponse } from '../types/portfolio'

export const speakingService = {
  async getSpeakingVideos(): Promise<{ videos: SpeakingEngagement[]; source: 'api' | 'local' }> {
    try {
      const response = await apiClient.get<ApiResponse<SpeakingEngagement[]>>('/speaking')
      if (response.data && response.data.data && Array.isArray(response.data.data)) {
        return { videos: response.data.data, source: 'api' }
      }
      return { videos: initialSpeaking, source: 'local' }
    } catch {
      return { videos: initialSpeaking, source: 'local' }
    }
  },
}
