import { Message } from 'discord.js'

const helpCommand = async (message: Message) => {
	const messages = [
		`Oi **<@${message.author.id}>**, a ajuda está a caminho! :owl:`,
		'**Aqui está uma lista completinha com todos meus comandos** \nCaso não encontre o quê procura, entre no canal `#tech-suporte` no servidor e peça ajuda ao time de organizadores.',
		'>>> **ajuda, help** ou **comandos** \nEnvia uma lista contendo todos os comandos do Discoder. \nExemplo: ``Você pode me dar uma ajuda?``\n',
		'>>> **agendar mentoria** \nInicia o guia de agendamento de mentoria. \nExemplo: ``Quero agendar uma mentoria``',
		'>>> **escolher categoria** \nEscolhe a categoria da mentoria desejada. \nExemplo: ``Escolher categoria #técnica``',
		'>>> **escolher mentor** \nExibe os mentor disponíveis, a partir da categoria escolhida. \nExemplo: ``Escolher mentor Guilherme``',
		'>>> **participando** \nInicia o guia de validação do time. \nExemplo: ``Estou participando?``',
		'>>> **buscar time**\nBusca pelo repositório da equipe para validar se está participando ou não do evento. \nExemplo: ``Buscar time teste``',
		'>>> **segredos** :shushing_face:\nComandos secretos que poucas pessoas irão descobrir...',
	]

	if (message.channel.type === 'text')
		messages.push(
			`Para utilizar os comandos abaixo, me chame por aqui <@${process.env.BOT_ID}>.\n`
		)

	return messages.forEach(async (eachMessage: string) =>
		message.channel.type === 'dm'
			? await message.author.send(eachMessage)
			: await message.channel.send(eachMessage)
	)
}

export default helpCommand
