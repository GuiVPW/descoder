import { RoleAllowed, RoleDenied } from '../../configurations/roles'
import { ChannelCreate, ChannelCreateResolve } from '../../types/ChannelCreated'

const createChannel = async ({
	name,
	channel,
	roles,
	teamName,
	categoryCreate,
	roleCreate,
	tipo,
	type,
}: ChannelCreate): Promise<ChannelCreateResolve> => {
	const channelCreate = await channel.channels.create(
		`${tipo === 'voz' ? '📣' : '📄'}${name}`,
		{
			type,
			userLimit: 10,
			topic: `Canal de ${tipo} da equipe ${teamName}`,
			nsfw: false,
			reason: `Canal de ${tipo} criado para a equipe ${teamName}.`,
			permissionOverwrites: [
				{
					type: 'role',
					id: roleCreate.id,
					allow: RoleAllowed,
					deny: RoleDenied,
				},
				...roles,
			],
			parent: categoryCreate.id,
		}
	)
	return channelCreate
}

export default createChannel
