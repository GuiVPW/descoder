import discord, { DMChannel, MessageEmbed } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const bot = new discord.Client()

const token = process.env.TOKEN

const PREFIX = '!'

bot.login(token)

bot.on('message', async (message: discord.Message) => {
	const { content } = message
	content.toLowerCase()

	if (!content.startsWith('!')) return
	if (!message.guild) return

	const args = content.substring(PREFIX.length).split(' ')

	switch (args[0]) {
		case '!mentoria':
			message.author.send('Olá')
			break
		case '!kell':
			message.reply('Mãe, to online na live!!! CABULOSO')
			break
		case '!deleteAll':
			const allMessages = await message.channel.messages.channel.bulkDelete(100)
			if (allMessages)
				await message.channel.send('máximo de mensagens deletadas')
			break
		case 'help':
			const Embed = new MessageEmbed()
				.setTitle('Ajuda')
				.setColor(0xff0000)
				.setDescription('Utilize o comando !help para ver todos os comandos')

			message.author.send(Embed)
			break
		default:
			console.log('Não entendi sua mensagem')
			break
	}
})

bot.on('error', err => {
	console.warn(err)
})

console.log('Bot funcionando!')
