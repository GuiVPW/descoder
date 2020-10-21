import discord, { Message } from 'discord.js'
import dotenv from 'dotenv'
import helpCommand from './src/commands/help'
import chooseCategoryCommand from './src/commands/categorias'
import askMentoryCommand from './src/commands/mentoria'
import chooseMentorCommand from './src/commands/mentor'
import deleteAllCommand from './src/commands/delete'
import findTerm from './src/utils/findTerm'
import isParticipatingCommand from './src/commands/participando'
import findRepositoryCommand from './src/commands/repositorio'
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
				deleteAllCommand(message)
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

	if (message.channel.type === 'dm' && !message.author.bot) {
		switch (content) {
			case findTerm(content, 'mentoria'):
				return await askMentoryCommand(message)
			case findTerm(content, 'escolher categoria '):
				return await chooseCategoryCommand(message)
			case findTerm(content, 'escolher mentor'):
				return await chooseMentorCommand(message)
			case findTerm(content, 'participando'):
				return await isParticipatingCommand(message)
			case findTerm(content, 'buscar time') ||
				findTerm(content, 'buscar equipe'):
				await message.author.send(
					'Hmmmm, estou procurando seu repositório :mag_right:'
				)
				return await findRepositoryCommand(message)
			case findTerm(content, 'obrigado') || findTerm(content, 'obrigada'):
				return await message.reply(
					'Assim você me deixa sem jeito :blush: \nPor nada'
				)
			case findTerm(content, 'help') ||
				findTerm(content, 'comandos') ||
				findTerm(content, 'ajuda') ||
				findTerm(content, 'socorro'):
				return await helpCommand(message)
			default:
				return await message.reply(
					'Não entendi o quê você disse :frowning2: \nUtilize o comando `ajuda` para ver todos meus comandos :warning:'
				)
		}
	}
})

bot.on('error', err => {
	console.warn(err)
})

console.log('Bot funcionando!')
