import { Message } from 'discord.js'

const acessoCommand = async (message: Message) => {
	if (message.channel.id === '768591118534836244') {
		await message.reply(
			'vou te chamar no privado para receber mais alguns dados :wink:'
		)
		return await message.author.send(
			`Olá <@${message.author.id}>, para entrar no canal da sua equipe execute o comando: ` +
				'``Entrar no canal {nome da equipe}``' +
				'Exemplo: ``Entrar no canal Prensa``'
		)
	}
}

export default acessoCommand
