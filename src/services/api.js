/* eslint-disable no-underscore-dangle */
import axios from 'axios'
import tokenService from './token.service'

const api = axios.create({
  baseURL: 'https://checkit24.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    const token = tokenService.getLocalAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config
    if (originalConfig.url !== '/users/login/' && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true
        try {
          const rs = await api.post('/token/refresh/', {
            refresh: tokenService.getLocalRefreshToken(),
          })
          const { access } = rs.data
          tokenService.updateLocalAccessToken(access)
          return api(originalConfig)
        } catch (_error) {
          return Promise.reject(_error)
        }
      }
    }
    return Promise.reject(err)
  },
)
export default api
