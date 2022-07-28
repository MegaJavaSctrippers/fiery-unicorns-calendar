const axios = require('axios')

const token = JSON.parse(localStorage.getItem('token'))
console.log(token, 'hello')
export const API = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
