import { Request, Response } from 'express'

import { Equipe } from '../models/Schemas'

export const indexAll = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const equipes = await Equipe.find()

		if (!equipes) return res.status(502).json('Erro na solicitação...')

		return res.json(equipes)
	} catch (e) {
		console.log(e)
		return res.status(502).json('Não foi possível encontrar sua equipe...')
	}
}

export const index = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { nome } = req.params

		const equipe = await Equipe.findOne({
			nome: nome.replace(/_/g, ' ')
		})

		if (!equipe) return res.status(502).json('Equipe não encontrada...')

		return res.json(equipe)
	} catch (e) {
		console.log(e)
		return res.status(502).json('Não foi possível encontrar sua equipe...')
	}
}

export const store = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { nome, participantes } = req.body

		const newEquipe = await Equipe.create({
			nome,
			participantes: participantes
				.split(', ')
				.map((participante: string) => participante.trim())
		})

		if (!newEquipe)
			return res.status(502).json('Não foi possível criar sua equipe...')

		return res.json(newEquipe)
	} catch (e) {
		console.log(e)
		return res.status(502).json('Não foi possível criar sua equipe...')
	}
}
