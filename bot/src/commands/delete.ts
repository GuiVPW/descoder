import { Message, MessageEmbed } from 'discord.js'

const deleteAllCommand = async (message: Message) => {
	if (
		message.member?.hasPermission(
			'MANAGE_MESSAGES' || message.member.hasPermission('ADMINISTRATOR')
		)
	) {
		const deleteAllMessages = await message.channel.messages.channel.bulkDelete(
			100
		)
		if (deleteAllMessages)
			await message.reply(
				new MessageEmbed({ timestamp: new Date() })
					.setColor('#fafafa')
					.setTitle('Deletado 100 mensagens num piscar de olhos! :star_struck:')
			)
	}
}

export default deleteAllCommand
