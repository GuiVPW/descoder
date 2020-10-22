import { Message } from 'discord.js'

const askChannelCommand = async (message: Message) => {
	await message.author.send(
		`Olá ${message.author.username}, vamos ver se você está no canal do seu time ou não`
	)
	await message.author.send(
		'Para eu ver se você está no seu time, digite o nome do seu time utilizando o comando `Estou na equipe {nome da equipe}?`\n' +
			'Exemplo: `Estou na equipe Prensa?`'
	)
}

export default askChannelCommand
