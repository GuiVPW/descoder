import { Mentor } from '../types/Mentores'
import api from './apiConfig'

export const getUsers = async (): Promise<any | Mentor[]> => {
	const users: Mentor[] = await api.get('/users')
	if (!users) return false
	return users
}

export const getUser = async (nome: string): Promise<any | Mentor> => {
	const user: Mentor = await api.get(`/user/${nome}`)

	if (!user) return false
	return user
}
