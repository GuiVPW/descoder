import api from '../express/apiConfig'
import { queryRepo } from './queries'
import { config } from 'dotenv'

config()

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
				Authorization: `Bearer a8545793568d2e0ce2569ce39d1c45f1711516a4`,
			},
		}
	)

	if (!data) return

	return data.data.repository
}
