import { Message } from 'discord.js'
import { getTeam } from '../services/express/calls'
import { Equipe } from '../types/Equipes'

const findChannelCommand = async (message: Message) => {
	const equipeName = message.content
		.replace('Procurar equipe ', '')
		.replace('procurar equipe ', '')
		.replace(/\s/g, '_')

	const { data } = await getTeam(equipeName)

	const equipe: Equipe = data

	if (!equipe)
		return await message.author.send(
			'Não consegui encontrar sua equipe... :worried:\nTem certeza que você digitou o nome da equipe certo?'
		)

	const equipes: Equipe = equipe

	if (!equipes)
		return await message.reply(
			'Não consegui acessar a API :worried: Procure um organizado na página `#tech-suporte`'
		)

	await message.author.send(
		`Equipe(a) **${equipes.nome}** escolhida  :white_check_mark:`
	)
	await message.author.send(
		'Aqui está a lista de participantes dessa equipe, veja se você é um deles:'
	)
	return await message.author.send(
		`>>> **${equipes.participantes.join('\n')}**`
	)
}

export default findChannelCommand
