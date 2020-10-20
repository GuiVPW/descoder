import { Message, MessageEmbed } from 'discord.js'
import { Mentor } from '../types/Mentores'
import findMentorEmbed from '../utils/findMentor'

const chooseCategoryCommand = async (
	message: Message,
	content: string,
	mentores: Mentor[]
) => {
	const categoryMatch = content.toLowerCase().match(/#(.*)$/)

	if (categoryMatch === null)
		return await message.author.send(
			'Desculpe, mas acho que você digitou errado a categoria. :worried:'
		)

	let category = categoryMatch[1]

	const mentors = findMentorEmbed(mentores, category)

	if (mentors.length === 0) {
		return await message.author.send(
			'Desculpe, mas essa categoria não existe :worried: \nTente novamente!'
		)
	} else {
		await message.author.send(
			`Muito bem!! :partying_face:\n Categoria **${
				category === 'ux'
					? category.toUpperCase()
					: category.charAt(0).toUpperCase() + category.slice(1)
			}** escolhida`
		)
	}
	await message.author.send(
		'Agora escolha seu **mentor**, digitando o nome com o comando `Escolher mentor {nome}` \nEx: `Escolher mentor Guilherme Vieira`',
		new MessageEmbed({ timestamp: new Date() })
			.setColor('#fafafa')
			.setTitle(
				`Lista de mentores com a categoria ${
					category === 'ux'
						? category.toUpperCase()
						: category.charAt(0).toUpperCase() + category.slice(1)
				}\n`
			)
			.addFields(mentors)
	)
}

export default chooseCategoryCommand
