import { Request, Response } from 'express'

import { User } from '../models/Schemas'

export const indexAll = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const mentores = await User.find().sort('-createdAt')

		if (!mentores) return res.status(502).json('Erro na solicitação...')

		return res.json(mentores)
	} catch (e) {
		console.log(e)
		return res.status(502).json('Não foi possível criar seu usuário...')
	}
}

export const index = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { nome } = req.params

		const mentor = await User.findOne({
			nome:
				nome.replace(/ .*/, '').replace('_', ' ').charAt(0).toUpperCase() +
				nome.slice(1)
		}).sort('-createdAt')

		if (!mentor) return res.status(502).json('Usuário não encontrado...')

		return res.json(mentor)
	} catch (e) {
		console.log(e)
		return res.status(502).json('Não foi possível criar seu usuário...')
	}
}

export const findMentors = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const now = new Date()

		const { skills, empresa } = req.body

		const findUsers = await User.find({
			skills,
			empresa
		})

		if (!findUsers)
			return res.status(502).json('Não foi possível recuperar o usuário')

		res.json(findUsers)
	} catch (e) {
		console.log(e)
		return res.status(502).json('Não foi possível recuperar seu usuário...')
	}
}

export const store = async (req: Request, res: Response): Promise<Response> => {
	try {
		console.log(req.body)
		const { nome, email, skills, empresa, datas } = req.body

		const newUser = await User.create({
			nome,
			email,
			skills: skills.split(', ').map((skill: string) => skill.trim()),
			empresa,
			datas
		})

		if (!newUser)
			return res.status(502).json('Não foi possível criar seu usuário...')

		return res.json(newUser)
	} catch (e) {
		console.log(e)
		return res.status(502).json('Não foi possível criar seu usuário...')
	}
}
