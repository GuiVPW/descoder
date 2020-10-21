import { Message } from 'discord.js'

const isParticipatingCommand = async (message: Message) => {
	await message.author.send('Hmmmm :thinking: Vamos descobrir!')
	await message.author.send(
		'Para eu ver se seu time está participando do evento, digite o nome do seu time utilizando o comando `Buscar time`' +
			'\nExemplo: `Buscar time Prensa`'
	)
}

export default isParticipatingCommand
