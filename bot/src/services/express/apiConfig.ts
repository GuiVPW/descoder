import axios from 'axios'

const baseURL = 'https://discoder-api.herokuapp.com/'

const api = axios.create({
	baseURL,
})

export default api
