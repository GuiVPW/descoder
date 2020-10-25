import { Guild, Message, OverwriteResolvable } from 'discord.js'
import createCategory from '../functions/createCategory'
import createRole from '../functions/createRole'
import createChannel from '../functions/createChannel'
import { Canal, ChannelCreateResolve } from '../../types/ChannelCreated'
import { RoleMentor } from '../../configurations/roles'

const rolesId = {
	mentor: '769189273127223316',
	everyone: '740256417151189062',
}

const createTeamCommand = async (message: Message, channel: Guild) => {
	const validate = async (): Promise<string[]> => {
		if (message.content.includes('Everything')) {
			const teamNames =
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
				id: rolesId.everyone,
				deny: ['VIEW_CHANNEL', 'CONNECT'],
			},
			{
				type: 'role',
				id: rolesId.mentor,
				allow: RoleMentor,
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
					return await message.reply(
						`categorias e roles criados com sucesso! :owl:`
					)
				})
			} catch (e) {
				console.log(e)
				return await message.reply(`não consegui criar o canal... :worried:`)
			}
		}
	})
}

export default createTeamCommand
