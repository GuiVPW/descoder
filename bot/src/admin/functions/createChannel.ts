import { ChannelCreate, ChannelCreateResolve } from '../../types/ChannelCreated'
import { RoleAllowed, RoleDenied } from '../../configurations/roles'

const createChannel = async ({
	name,
	channel,
	teamName,
	categoryCreate,
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
			parent: categoryCreate.id,
		}
	)

	return channelCreate
}

export default createChannel
