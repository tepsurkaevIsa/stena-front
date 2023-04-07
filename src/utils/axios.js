import axios from 'axios'
const { NODE_ENV } = process.env;

export let serverUrl;

if(NODE_ENV === 'development') {
  serverUrl = 'http://localhost:3020' // адрес сервера на локалке
} else {
  serverUrl = 'https://wall-backend.onrender.com'; // адрес сервера после выгрузки
}

const instance = axios.create({
    baseURL: `${serverUrl}/api`,
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance