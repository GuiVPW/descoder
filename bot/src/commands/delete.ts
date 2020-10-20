import { Message, MessageEmbed, MessageManager } from 'discord.js'

const deleteAllCommand = async (
	message: Message,
	channel: 'dm' | 'text' | 'news'
) => {
	const deleteMessages = async () => {
		const allMessages = await message.channel.messages.channel.bulkDelete(100)
		if (allMessages)
			await message.reply(
				new MessageEmbed({ timestamp: new Date() })
					.setColor('#fafafa')
					.setTitle('Deletado 100 mensagens num piscar de olhos! :star_struck:')
			)
	}
	if (
		channel === 'text' &&
		message.member?.hasPermission(
			'MANAGE_MESSAGES' || message.member.hasPermission('ADMINISTRATOR')
		)
	)
		deleteMessages()
	else if (channel === 'dm') deleteMessages()
}

export default deleteAllCommand
