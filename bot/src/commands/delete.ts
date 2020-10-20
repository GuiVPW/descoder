import { Message, MessageEmbed } from 'discord.js'

const deleteAllCommand = async (
	message: Message,
	channel: 'dm' | 'text' | 'news'
) => {
	console.log('guild', message.guild!.name)

	// if (channel === 'text' && message.guild.roles.cache.find() {
	const allMessages = await message.channel.messages.channel.bulkDelete(100)
	if (allMessages)
		await message.reply(
			new MessageEmbed({ timestamp: new Date() })
				.setColor('#fafafa')
				.setTitle('Deletado 100 mensagens num piscar de olhos! :star_struck:')
		)
}

export default deleteAllCommand
