import axios from 'axios'

const baseURL = 'https://discoder-api.herokuapp.com/'

const api = axios.create({
	baseURL,
	timeout: 5000,
})

export default api
