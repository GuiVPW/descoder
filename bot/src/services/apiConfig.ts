import axios from 'axios'

const baseURL = 'http://localhost:3333'

const api = axios.create({
	baseURL,
	timeout: 5000,
})

export default api
