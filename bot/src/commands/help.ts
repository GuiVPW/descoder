import { Message } from 'discord.js'

const helpCommand = async (message: Message) => {
	await message.author.send(
		`Oi **<@${message.author.id}>**, a ajuda está a caminho! :owl:`
	)
	await message.author.send(
		'**Aqui está uma lista completinha com todos meus comandos** \nCaso não encontre o quê procura, entre no canal `#tech-suporte` no servidor e peça ajuda ao time de organizadores.'
	)
	await message.author.send(
		'>>> **ajuda, help** ou **comandos** \nEnvia uma lista contendo todos os comandos do Discoder. \nExemplo: ``Você pode me dar uma ajuda?``\n'
	)
	await message.author.send(
		'>>> **agendar mentoria** \nExecute esse comando para iniciar o guia de agendamento de mentoria. \nExemplo: ``Quero agendar uma mentoria``'
	)
}

export default helpCommand
