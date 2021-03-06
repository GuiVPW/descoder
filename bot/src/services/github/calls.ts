import api from '../express/apiConfig'
import { queryRepo } from './queries'
import { config } from 'dotenv'
import { Message } from 'discord.js'

config()

const github = '8a2390f8847ad6e4ed29eca6a6351aa5220b01b7'

export const searchRepository = async (query: string) => {
	const queryString = `hackathon-apicon-2020-${query
		.replace(/ +/g, '-')
		.replace('!', '')
		.toLowerCase()}`
	console.log(queryString)

	const { data } = await api.post(
		'https://api.github.com/graphql',
		{
			query: queryRepo,
			variables: {
				queryString,
			},
		},
		{
			timeout: 5000,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${github}`,
			},
		}
	)

	if (!data) return false

	return data.data.repository
}
