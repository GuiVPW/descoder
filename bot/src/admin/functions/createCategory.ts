import { CategoryChannel, Guild, OverwriteResolvable, Role } from 'discord.js'
import { RoleAllowed, RoleDenied } from '../../configurations/roles'

const createCategory = async (
	channel: Guild,
	roles: OverwriteResolvable[],
	teamName: string,
	roleCreate: Role
): Promise<CategoryChannel> => {
	const categoryCreate = await channel.channels.create(
		`😎 Equipe ${teamName} 😎`,
		{
			type: 'category',
			userLimit: 10,
			topic: `Categoria da equipe ${teamName}`,
			nsfw: false,
			reason: `Canal criado para a equipe ${teamName}, aproveitem! :coffee:`,
			permissionOverwrites: [
				{
					type: 'role',
					id: roleCreate.id,
					allow: RoleAllowed,
					deny: RoleDenied,
				},
				...roles,
			],
		}
	)

	return categoryCreate
}

export default createCategory
