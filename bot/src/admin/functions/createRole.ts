import { Guild, Role } from 'discord.js'
import generateColor from '../../utils/randomColor'

const createRole = async (channel: Guild, teamName: string): Promise<Role> => {
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

	return roleCreate
}

export default createRole
