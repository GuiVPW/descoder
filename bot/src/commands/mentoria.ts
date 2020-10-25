import { Message } from 'discord.js'

export const categories: string[] = ['técnico', 'business']
export const enterprises: string[] = ['zenvia', 'elo', 'here']

const askMentoryCommand = async (message: Message) => {
	await message.author.send(
		`Olá ${message.author.username}, ` +
			'vamos lá! :grin: \nEscolha uma das **categorias** e uma das **empresas** abaixo para buscar mentorias disponíveis com o comando `Escolher categoria #{categoria} da empresa @{empresa}`. \nExemplo: `Escolher categoria #técnico da empresa @Prensa`.\n\n'
	)
	await message.author.send(`>>> ${categories.join('\n')}`)
	await message.author.send(`>>> ${enterprises.join('\n')}`)
}

export default askMentoryCommand
