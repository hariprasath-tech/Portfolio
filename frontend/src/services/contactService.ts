import apiClient from './apiClient'
import type { ContactFormData, ApiResponse } from '../types/portfolio'

export interface ContactSubmissionResult {
  success: boolean
  message: string
  errorType?: 'OFFLINE' | 'VALIDATION' | 'SERVER_ERROR'
}

export const contactService = {
  async submitContact(data: ContactFormData): Promise<ContactSubmissionResult> {
    try {
      const response = await apiClient.post<ApiResponse<{ id: string }>>('/contact', data)
      if (response.data && response.data.success) {
        return {
          success: true,
          message: response.data.message || 'Thank you! Your message has been transmitted successfully.',
        }
      }
      return {
        success: false,
        message: response.data?.message || 'The server rejected the message payload.',
        errorType: 'SERVER_ERROR',
      }
    } catch (err: unknown) {
      // Accurate handling: do NOT fake success
      const error = err as { code?: string; response?: { status?: number; data?: { message?: string } } }
      
      if (error.code === 'ECONNABORTED' || error.code === 'ERR_NETWORK' || !error.response) {
        return {
          success: false,
          message:
            'Backend API server is currently offline or unreachable at ' +
            (import.meta.env.VITE_API_URL || 'http://localhost:5000/api') +
            '. Please reach out directly via email.',
          errorType: 'OFFLINE',
        }
      }

      return {
        success: false,
        message:
          error.response?.data?.message ||
          'Failed to send message due to a server error. Please use direct email.',
        errorType: 'SERVER_ERROR',
      }
    }
  },
}
