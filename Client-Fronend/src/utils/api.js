const BASE_URL = import.meta.env.VITE_API_URL

export const authFetch = (endpoint, options = {}) => {
  const token = localStorage.getItem('token')

  return fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers
    }
  })
}