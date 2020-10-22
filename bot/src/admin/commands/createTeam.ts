import { Guild, Message, OverwriteResolvable } from 'discord.js'
import createCategory from '../functions/createCategory'
import createRole from '../functions/createRole'
import createChannel from '../functions/createChannel'
import { Canal, ChannelCreateResolve } from '../../types/ChannelCreated'

const createTeamCommand = async (message: Message, channel: Guild) => {
	const validate = async (): Promise<string[]> => {
		if (message.content.includes('Everything')) {
			const teamNames: string =
				'Union Squad, Team Connect, 42 destinos de um algoritmo, Code4Hope, IPay, Não tenho ainda, AISSI, Unidos do StackOverflow, FloripaHThon, L.L.L., LoveData, Paytrackers, Fênix, MDev - Made by Devs, 56Market, PayMasters, Foxy, Tech ET'
			return teamNames.split(', ')
		} else {
			const split = message.content.replace('!newTeam ', '').split(', ')

			return split
		}
	}
	const teamNames = await validate()

	teamNames.forEach(async (teamName: string) => {
		if (channel.roles.cache.find(role => role.name === teamName))
			return await message.reply('essa equipe já existe :worried:')

		const roles: OverwriteResolvable[] = [
			{
				type: 'role',
				id: '740257948919660707',
				allow: 'ADMINISTRATOR',
			},
			{
				type: 'role',
				id: '740259203171745814',
				allow: 'ADMINISTRATOR',
			},
			{
				type: 'role',
				id: '768110961445830677',
				allow: 'ADMINISTRATOR',
			},
			{
				type: 'role',
				id: '768111403277090836',
				allow: 'ADMINISTRATOR',
			},
			{
				type: 'role',
				id: '768580642077802496',
				deny: ['VIEW_CHANNEL', 'CONNECT'],
			},
			{
				type: 'role',
				id: '766740925756997634',
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

		if (categoryCreate) {
			try {
				canais.forEach(async ({ name, type, tipo }: Canal) => {
					const canal: ChannelCreateResolve = await createChannel({
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
			} catch (e) {
				console.log(e)
			}
		}
	})
	return await message.reply(`categorias e roles criados com sucesso! :owl:`)
}

export default createTeamCommand
