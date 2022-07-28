// /* eslint-disable no-else-return */
// import axios from 'axios'

// const parseJwt = (token) => {
//   try {
//     return JSON.parse(atob(token.split('.')[1]))
//   } catch (e) {
//     return null
//   }
// }
// export const useAuth = () => {
//   const token = localStorage.getItem('token')
//   if (token) {
//     const parseToken = parseJwt(token)
//     console.log(parseToken)
//     if (parseToken.exp * 1000 > new Date()) {
//       console.log('access token')
//       return true
//     } else {
//       const refresh = localStorage.getItem('refresh')
//       const refreshParse = parseJwt(refresh)
//       if (refreshParse.exp * 1000 > new Date()) {
//         axios
//           .post('https://checkit24.herokuapp.com/api/token/refresh/', {
//             refresh: JSON.parse(refresh),
//           })
//           .then((res) => {
//             localStorage.setItem('token', res.data.access)
//             console.log(refresh, 'refresh token')
//           })
//         return true
//       } else {
//         return false
//       }
//     }
//   }
//   return false
// }
