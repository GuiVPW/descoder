import { Guild, Message, TextChannel } from 'discord.js'
import { enterprises, categories } from './mentoria'

const chooseCategoryAndEnterpriseCommand = async (
	message: Message,
	channel: Guild
) => {
	const { content } = message
	const categoryMatch = content.toLowerCase().match(/#(.*)$/)![1]

	const replaced = categoryMatch.replace('da empresa @', '').split(' ')

	const category = replaced[0]
	const enterprise = replaced[1]

	if (!categoryMatch[1])
		return await message.author.send(
			'Desculpe, mas acho que você digitou errado a categoria. :worried:'
		)

	if (!enterprises.includes(enterprise) || !categories.includes(category))
		return await message.author.send(
			'Desculpe, mas acho que você digitou errado a categoria ou o nome da empresa. :worried:'
		)

	if (categoryMatch.length === 0) {
		return await message.author.send(
			'Desculpe, mas não existem disponíveis nessa categoria :worried: \nTente novamente em algumas horas!'
		)
	}

	const uppercaseIt = (message: string) => {
		return message.charAt(0).toUpperCase() + message.slice(1)
	}

	await message.author.send(
		`Muito bem!! :partying_face:\nCategoria **${uppercaseIt(
			category
		)}** e empresa **${uppercaseIt(enterprise)}** escolhida!`
	)

	const getUserId = channel.members.cache.get(message.author.id)!

	const findAuthorRole = getUserId!.roles.cache.find(
		role => role.name !== '@everyone' && role.name !== 'Membros'
	)

	if (!findAuthorRole)
		return message.author.send(
			'Você ainda não faz parte de uma equipe para pedir mentoria...\nUtilize o comando `Entrar no canal` para fazer de uma equipe'
		)

	const findRole = channel.roles.cache.find(
		role =>
			role.name ===
			`Mentor ${uppercaseIt(category)} - ${uppercaseIt(enterprise)}`
	)!

	const findMentorActive = findRole.members.find(
		mentor => mentor.presence.status !== 'offline'
	)!

	if (!findMentorActive)
		return await message.author.send(
			'Não consegui encontrar nenhum mentor disponível, tente novamente durante as horas de mentoria... :worried:'
		)

	findMentorActive.send(
		`Olá <@${findMentorActive.id}>, o usuário <@${getUserId.id}> da equipe **${
			findAuthorRole!.name
		}** acabou de pedir uma mentoria com você! :owl:\n Você pode apertar na mensagem acima e conversar diretamente com ele, ou mandar uma mensagem no chat #geral da equipe dele.`
	)

	return await message.author.send(
		`Mensagem ao mentor ${findMentorActive} enviada :owl:`
	)
}

export default chooseCategoryAndEnterpriseCommand
