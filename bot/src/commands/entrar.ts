import { Message } from 'discord.js'
import { bot } from '../..'

const enterChannelCommand = async (message: Message) => {
	const equipeName: string = message.content
		.replace('Entrar no canal ', '')
		.replace('entrar no canal ', '')

	const channel = bot.guilds.cache.get('766740925756997634')!

	const user = channel.members.cache.get(message.author.id)

	if (
		!user!.hasPermission('MANAGE_ROLES') &&
		!user!.roles.cache.find(role => role.name === 'Membro')
	)
		return await message.author.send(
			'Você já faz parte de uma equipe! :expressionless:'
		)

	const role = channel.roles.guild.roles.cache.find(
		role => role.name === equipeName
	)!

	if (!role)
		await message.author.send(
			'Acho que essa equipe não existe... :worried: \nVocê tem certeza que digitou o nome certo?'
		)

	const addRole = await user?.roles.add(role.id)

	if (!addRole)
		return await message.author.send(
			'Opa... não consegui te colocar nessa equipe :worried:'
		)

	await message.author.send('Prontinho :owl:')
	return await message.author.send(
		`Agora você faz parte da equipe ${role.name}`
	)
}

export default enterChannelCommand
