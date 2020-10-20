import { Message } from 'discord.js'

const categories: string[] = ['UX', 'Técnica', 'Business']

const askMentoryCommand = async (message: Message) => {
	await message.author.send(
		'Vamos lá! :grin: \nEscolha uma das **categorias** abaixo para buscar mentorias disponíveis com o comando `Escolher categoria {categoria}`. \nExemplo: `Escolher categoria UX`.\n\n'
	)
	await message.author.send(`>>> ${categories.join('\n')}`)
}

export default askMentoryCommand
