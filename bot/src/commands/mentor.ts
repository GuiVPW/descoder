import { Message } from 'discord.js'
import { getUsers } from '../services/express/calls'
import { Mentor } from '../types/Mentores'

const chooseMentorCommand = async (message: Message) => {
	const { data } = await getUsers()

	const mentores: Mentor[] = data

	if (!mentores)
		return await message.reply(
			'Não consegui acessar a API :worried: Procure um organizado na página `#tech-suporte`'
		)

	const name = message.content.toLowerCase().replace('escolher mentor ', '')

	if (name.length === 0) {
		return await message.author.send(
			'Desculpe, mas não tem nenhum mentor com esse nome :worried:'
		)
	} else {
		const mentor = mentores.filter(({ nome }: Mentor) =>
			nome.toLowerCase().includes(name)
		)[0]

		if (mentor === null)
			message.author.send(
				'Não achei nenhum mentor com esse nome :worried: Tente novamente!'
			)

		const mentorName =
			mentor.nome.charAt(0).toUpperCase() + mentor.nome.slice(1)

		await message.author.send(
			`Mentor(a) **${mentorName}** escolhido(a)  :white_check_mark:`
		)
		await message.author.send(
			`Para poder marcar sua mentoria, escolha um horário entre os disponíveis na agenda de ${mentorName} através do link: ${mentor.calendly} e aguarde a confirmação da reunião no seu e-mail :wink:`
		)
		await message.author.send(
			'Após a confirmação, no horário determinado, aguarde o mentor convidar você e seu time para uma sala privada para realizar a mentoria. \nSimples assim :blush:'
		)
	}
}

export default chooseMentorCommand
