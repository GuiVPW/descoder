import { Message } from 'discord.js'

const acessoCommand = async (message: Message) => {
	await message.reply(
		'vou te chamar no privado para receber mais alguns dados :wink:'
	)
	await message.author.send(
		`Olá <@${message.author.id}>, para entrar no canal da sua equipe execute o comando: ` +
			'"Entrar no canal {nome da equipe}"' +
			'Exemplo: ``Entrar no canal Prensa``'
	)
	return await message.author.send(
		'Caso não saiba qual é o nome cadastrado da sua equipe, execute o comando: `Ver todas as equipes` :owl:'
	)
}

export default acessoCommand
