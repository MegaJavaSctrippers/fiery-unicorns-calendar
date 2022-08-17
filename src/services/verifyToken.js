/* eslint-disable no-else-return */
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch (e) {
    return null
  }
}

export const useAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'))
  if (token) {
    const tokenParse = parseJwt(token)
    console.log(tokenParse, 'tokenparse')
    if (tokenParse.exp * 1000 > new Date()) {
      return true
    }
    return true
  } else {
    return false
  }
}
