import axios from 'axios'

const token = localStorage.getItem('token')
export default axios.create({
  baseURL: 'https://checkit24.herokuapp.com/api/',
  Authorization: token,
})
