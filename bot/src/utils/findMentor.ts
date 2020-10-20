import { EmbedField } from 'discord.js'
import { Mentor } from '../types/Mentores'

const findMentorEmbed = (
	mentores: Mentor[],
	category: string
): EmbedField[] => {
	const mentor: EmbedField[] = mentores
		.filter((mentor: Mentor) => mentor.skills.join(',  ').includes(category))
		.map(({ nome, descrição, skills, empresa }: Mentor) => ({
			name: nome,
			value: `***Skills***: ${skills}\n***Descrição***: ${descrição}\n***Empresa***: ${empresa}`,
			inline: false,
		}))

	return mentor
}

export default findMentorEmbed
