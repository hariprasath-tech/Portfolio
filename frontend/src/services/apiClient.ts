import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

// Optional response interceptor to normalize error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Return formatted error instead of crashing
    return Promise.reject(error)
  }
)

export default apiClient
