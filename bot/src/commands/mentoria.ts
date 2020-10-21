import { Message } from 'discord.js'

const categories: string[] = ['Técnico', 'Business']

const askMentoryCommand = async (message: Message) => {
	await message.author.send(
		`Olá ${message.author.username}, ` +
			'vamos lá! :grin: \nEscolha uma das **categorias** abaixo para buscar mentorias disponíveis com o comando `Escolher categoria #{categoria}`. \nExemplo: `Escolher categoria #técnico`.\n\n'
	)
	await message.author.send(`>>> ${categories.join('\n')}`)
}

export default askMentoryCommand
