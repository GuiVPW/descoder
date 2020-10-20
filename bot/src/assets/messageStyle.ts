import discord, { MessageEmbed } from 'discord.js'

const sendMessage = (
	title: string,
	description: string
): discord.MessageEmbed => {
	return new MessageEmbed({ timestamp: new Date() })
		.setTitle(title)
		.setColor(0xfafafa)
		.setDescription(description)
}

export default sendMessage
