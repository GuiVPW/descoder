import { Message } from 'discord.js'
import { getAllTeams } from '../services/express/calls'
import { Equipe } from '../types/Equipes'

const listTeamsCommand = async (message: Message) => {
	const { data } = await getAllTeams()

	const teams: Equipe[] = data

	if (!teams)
		return await message.reply(
			'Não consegui acessar a API :worried: Procure um organizado na página `#tech-suporte`'
		)

	await message.author.send(
		'Para ver o nome dos integrantes de cada equipe, utilize o comando `Procurar equipe {equipe}` \nEx: `Procurar equipe Prensa`'
	)
	const nomes = teams.map((team: Equipe) => team.nome)

	return await message.author.send(`>>> **${nomes.join('\n')}**`)
}

export default listTeamsCommand
