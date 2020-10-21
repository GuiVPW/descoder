import { Guild, Message } from 'discord.js'
import generateColor from '../../utils/randomColor'

const createTeamCommand = async (message: Message, channel: Guild) => {
	const teamName: string = message.content.replace('!newTeam ', '')

	if (channel.roles.cache.find(role => role.name === teamName))
		return await message.reply('essa equipe já existe :worried:')

	const roleCreate = await channel.roles.create({
		data: {
			name: teamName,
			color: generateColor(),
			position: 1,
			mentionable: true,
			hoist: true,
			permissions: [
				'READ_MESSAGE_HISTORY',
				'SEND_MESSAGES',
				'CONNECT',
				'READ_MESSAGE_HISTORY',
				'VIEW_CHANNEL',
				'ATTACH_FILES',
				'MENTION_EVERYONE',
				'USE_EXTERNAL_EMOJIS',
				'SPEAK',
				'STREAM',
				'EMBED_LINKS',
				'USE_VAD',
			],
		},
	})

	console.log('role', roleCreate)

	if (!roleCreate)
		return await message.reply(
			`não foi possível criar o time ${teamName} :worried:`
		)

	return await message.reply(`time ${teamName} criado com sucesso! :owl:`)
}

export default createTeamCommand
