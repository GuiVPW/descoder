import { EmbedField } from 'discord.js'
import { Mentor } from '../types/Mentores'

const findMentorEmbed = (
	mentores: Mentor[],
	category: string
): EmbedField[] => {
	const mentor: EmbedField[] = mentores
		.filter(mentor => mentor.skill.includes(category))
		.map(({ nome, descrição, skill, empresa }: Mentor) => ({
			name: nome,
			value: `**Skills**: ${skill}\n***Descrição***: ${descrição}\n***Empresa***: ${empresa}`,
			inline: false,
		}))

	console.log(mentor)

	return mentor
}

export default findMentorEmbed
