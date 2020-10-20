import discord, { GuildMember, Message } from 'discord.js'
import dotenv from 'dotenv'
import { Mentor } from './src/types/Mentores'
import helpCommand from './src/commands/help'
import chooseCategoryCommand from './src/commands/categorias'
import askMentoryCommand from './src/commands/mentoria'
import chooseMentorCommand from './src/commands/mentor'
import deleteAllCommand from './src/commands/delete'
import findTerm from './src/utils/findTerm'
import { getUsers } from './src/services/calls'
dotenv.config()

export const bot = new discord.Client()

const token = process.env.TOKEN

bot.login(token)

bot.on('message', async (message: Message) => {
	const { content } = message

	if (message.channel.type === 'text') {
		if (!content.startsWith('!')) return
		switch (content) {
			case '!mentoria':
				await message.reply(
					'se você deseja marcar uma mentoria, me chame por aqui <@' +
						process.env.BOT_ID +
						'> e execute o comando `Agendar mentoria` :wink:'
				)
				break
			case '!deleteAll':
				deleteAllCommand(message, 'text')
				break

			case '!help':
				helpCommand(message)
				break
			default:
				await message.reply(
					'Não entendi o quê você disse :frowning2: \nUtilize o comando `!help` para ver todos os comandos :warning:'
				)
				break
		}
	}

	if (message.channel.type === 'dm') {
		const { data: mentores } = await getUsers()

		if (!mentores)
			message.reply(
				'Não consegui acessar a API :worried: Procure um organizado na página `#tech-suporte`'
			)
		switch (content.toLowerCase()) {
			case findTerm(content, 'mentoria'):
				await askMentoryCommand(message)
				break
			case findTerm(content, 'escolher categoria '):
				await chooseCategoryCommand(message, content, mentores)
				break
			case findTerm(content, 'escolher mentor'):
				await chooseMentorCommand(message, mentores)
				break
			default:
				break
		}

		if (
			content.toLowerCase().includes('help') ||
			content.toLowerCase().includes('comandos') ||
			content.toLowerCase().includes('ajuda') ||
			content.toLowerCase().includes('socorro')
		)
			helpCommand(message)
	}
})

bot.on('error', err => {
	console.warn(err)
})

console.log('Bot funcionando!')
