import axios from 'axios'
import config from "bootstrap/js/src/util/config.js";



const user = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    }
})

// Add a request interceptor
// some code that is executed before the request is sent
user.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
}, (error) => {
    // Do something with request error
    console.log('Request error:', error)
    return Promise.reject(error)
});

export default user;