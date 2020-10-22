import { Mentor } from '../../types/Mentores'
import { Equipe } from '../../types/Equipes'
import api from './apiConfig'

export const getUsers = async (): Promise<any | Mentor[]> => {
	const users: Mentor[] = await api.get('/users')
	if (!users) return false
	return users
}

export const getUser = async (nome: string): Promise<any | Mentor> => {
	try {
		const user: Mentor = await api.get(`/user/${nome}`)
		if (!user) return false
		return user
	} catch (e) {
		console.log(e)
		return false
	}
}

export const getTeam = async (nome: string): Promise<any | Equipe> => {
	try {
		const equipe = await api.get(`/equipe/${nome}`)

		if (!equipe) return false

		return equipe
	} catch (e) {
		console.log(e)
		return false
	}
}

export const getAllTeams = async (): Promise<any | Equipe[]> => {
	try {
		const equipes = await api.get(`/equipes`)

		if (!equipes) return false

		return equipes
	} catch (e) {
		console.log(e)
		return false
	}
}
