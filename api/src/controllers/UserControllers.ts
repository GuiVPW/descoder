import { Request, Response } from 'express'

import User from '../models/Schemas'

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
		const { id } = req.params

		const mentor = await User.findById(id).sort('-createdAt')

		if (!mentor) return res.status(502).json('Usuário não encontrado...')

		return res.json(mentor)
	} catch (e) {
		console.log(e)
		return res.status(502).json('Não foi possível criar seu usuário...')
	}
}

export const store = async (req: Request, res: Response): Promise<Response> => {
	try {
		console.log(req.body)
		const { nome, email, descrição, calendly, skills, empresa } = req.body

		const newUser = await User.create({
			nome,
			email,
			descrição,
			calendly,
			skills: skills.split(',').map((skill: string) => skill.trim()),
			empresa
		})

		if (!newUser)
			return res.status(502).json('Não foi possível criar seu usuário...')

		return res.json(newUser)
	} catch (e) {
		console.log(e)
		return res.status(502).json('Não foi possível criar seu usuário...')
	}
}
