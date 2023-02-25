import axios from 'axios'
export default axios.create({
  baseURL: process.env.VUE_APP_ROOT_API !== undefined ? process.env.VUE_APP_ROOT_API : '/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  },
})
