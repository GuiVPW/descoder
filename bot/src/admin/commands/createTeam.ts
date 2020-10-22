import { Guild, Message, OverwriteResolvable } from 'discord.js'
import createCategory from '../functions/createCategory'
import createRole from '../functions/createRole'
import createChannel from '../functions/createChannel'
import { Canal } from '../../types/ChannelCreated'

const createTeamCommand = async (message: Message, channel: Guild) => {
	const teamNames: string[] = message.content
		.replace('!newTeam ', '')
		.split(',')

	teamNames.forEach(async (teamName: string) => {
		if (channel.roles.cache.find(role => role.name === teamName))
			return await message.reply('essa equipe já existe :worried:')

		const roles: OverwriteResolvable[] = [
			{
				type: 'role',
				id: '740257948919660707',
			},
			{
				type: 'role',
				id: '740259203171745814',
			},
			{
				type: 'role',
				id: '768110961445830677',
			},
			{
				type: 'role',
				id: '768111403277090836',
			},
			{
				type: 'role',
				id: '768580642077802496',
				deny: ['VIEW_CHANNEL', 'CONNECT'],
			},
		]

		const roleCreate = await createRole(channel, teamName)

		if (!roleCreate)
			return await message.reply(
				`não foi possível criar o time ${teamName} :worried:`
			)

		if (channel.channels.cache.find(channel => channel.name === teamName))
			return await message.reply('essa equipe já existe :worried:')

		const categoryCreate = await createCategory(
			channel,
			roles,
			teamName,
			roleCreate
		)

		categoryCreate.updateOverwrite(channel.roles.guild.roles.everyone, {
			VIEW_CHANNEL: false,
		})

		if (!categoryCreate) {
			return await message.reply(
				`não foi possível criar a categoria ${teamName} :worried:`
			)
		}

		const canais: Canal[] = [
			{
				name: 'Geral',
				type: 'voice',
				tipo: 'voz',
			},
			{
				name: 'geral',
				type: 'text',
				tipo: 'texto',
			},
		]

		canais.forEach(async ({ name, type, tipo }: Canal) => {
			const canal = await createChannel({
				name,
				channel,
				roles,
				teamName,
				categoryCreate,
				roleCreate,
				tipo,
				type,
			})
			if (!canal)
				return await message.reply(
					`não consegui criar o canal de ${tipo} :worried:`
				)
		})
	})

	return await message.reply(`categorias e roles criados com sucesso! :owl:`)
}

export default createTeamCommand
