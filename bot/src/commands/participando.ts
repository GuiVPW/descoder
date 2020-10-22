import { Message } from 'discord.js'

const isParticipatingCommand = async (message: Message) => {
	await message.author.send('Hmmmm :thinking: Vamos descobrir!')
	await message.author.send(
		'Para eu ver se seu time tem um repositório e está participando do evento, digite o nome do seu time utilizando o comando `Buscar repositório {time}`' +
			'\nExemplo: `Buscar repositório Prensa`'
	)
}

export default isParticipatingCommand
