const axios = require('axios').default;

let token: string | null = localStorage.getItem('JWT') !== null ? `Bearer ${localStorage.getItem('JWT')}` : null 
console.log(localStorage.getItem('JWT'))

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {Authorization: token}

})

export default axiosInstance;