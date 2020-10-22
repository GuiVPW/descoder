import {
	CategoryChannel,
	Guild,
	OverwriteResolvable,
	Role,
	TextChannel,
	VoiceChannel,
} from 'discord.js'

export interface Canal {
	name: string
	type: Exclude<
		keyof typeof ChannelType | ChannelType,
		| 'dm'
		| 'group'
		| 'unknown'
		| ChannelType.dm
		| ChannelType.group
		| ChannelType.unknown
	>
	tipo: 'voz' | 'texto'
}

export type ChannelCreate = {
	name: string
	channel: Guild
	roles: OverwriteResolvable[]
	teamName: string
	roleCreate: Role
	categoryCreate: CategoryChannel
	type: Exclude<
		keyof typeof ChannelType | ChannelType,
		| 'dm'
		| 'group'
		| 'unknown'
		| ChannelType.dm
		| ChannelType.group
		| ChannelType.unknown
	>
	tipo: 'voz' | 'texto'
}

export type ChannelCreateResolve = CategoryChannel | TextChannel | VoiceChannel
