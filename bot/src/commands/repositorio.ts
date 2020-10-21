import { Message } from 'discord.js'
import { searchRepository } from '../services/github/calls'
import { Repository } from '../types/Repository'

const findRepositoryCommand = async (message: Message) => {
	const teamName = message.content.toLowerCase().replace('buscar time ', '')

	const repo: Repository = await searchRepository(teamName)

	if (!repo)
		return await message.author.send(
			'É... não consegui encontrar nada :worried: \nSeu time parece não ter um repositório no github... \nAconselho buscar um organizador pelo canal de texto ***#tech-suporte***'
		)

	await message.author.send(
		'E de forma mágica, encontrei o quê você procurava! :owl:'
	)
	return await message.author.send(
		`Seu time está participando do evento! \nE aqui está o link do seu repositório: ${repo.url} em toda sua glória. :crown:`
	)
}

export default findRepositoryCommand
