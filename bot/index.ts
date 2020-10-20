import discord, { GuildMember, Message } from 'discord.js'
import dotenv from 'dotenv'
import { Mentor } from './src/types/Mentores'
import helpCommand from './src/commands/help'
import chooseCategoryCommand from './src/commands/categorias'
import askMentoryCommand from './src/commands/mentoria'
import chooseMentorCommand from './src/commands/mentor'
import deleteAllCommand from './src/commands/delete'
import findTerm from './src/utils/findTerm'
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

	const mentores: Mentor[] = new Array(4).fill({
		nome: 'Guilherme Vieira',
		email: 'guivpw68@gmail.com',
		descrição: 'Topzera',
		calendly: 'https://google.com',
		skill: 'técnica, ux',
		empresa: 'MVP',
	})

	if (message.channel.type === 'dm') {
		switch (content.toLowerCase()) {
			case findTerm(content, 'mentoria'):
				askMentoryCommand(message)
				break
			case findTerm(content, 'escolher categoria '):
				chooseCategoryCommand(message, content, mentores)
				break
			case findTerm(content, 'escolher mentor'):
				chooseMentorCommand(message, mentores)
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
