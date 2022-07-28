/* eslint-disable class-methods-use-this */
class TokenService {
  getLocalRefreshToken() {
    const refresh = JSON.parse(localStorage.getItem('refresh'))
    return refresh
  }

  getLocalAccessToken() {
    const token = JSON.parse(localStorage.getItem('token'))
    return token
  }

  updateLocalAccessToken(token) {
    localStorage.setItem('token', JSON.stringify(token))
  }
}
export default new TokenService()
