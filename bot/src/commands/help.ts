import { Message } from 'discord.js'

const helpCommand = async (message: Message) => {
	const messageSender = async (content: string) => {
		return await message.author.send(content)
	}
	const messages = [
		`Oi **<@${message.author.id}>**, a ajuda está a caminho! :owl:`,
		'**Aqui está uma lista completinha com todos meus comandos** \nCaso não encontre o quê procura, entre no canal `#tech-suporte` no servidor e peça ajuda ao time de organizadores.',
		'>>> **ajuda, help** ou **comandos** \nEnvia uma lista contendo todos os comandos do Discoder. \nExemplo: ``Você pode me dar uma ajuda?``\n',
		'>>> **agendar mentoria** \nExecute esse comando para iniciar o guia de agendamento de mentoria. \nExemplo: ``Quero agendar uma mentoria``',
		'>>> **escolher categoria** \nExecute esse comando para escolher a categoria da mentoria desejada. \nExemplo: ``Escolher categoria #UX``',
		'>>> **escolher mentor** \nExecute esse comando para escolher o mentor disponível, a partir da categoria escolhida. \nExemplo: ``Escolher mentor Guilherme``',
	]

	return messages.forEach((eachMessage: string) => messageSender(eachMessage))
}

export default helpCommand
