import api from '../express/apiConfig'
import { queryRepo } from './queries'
import { config } from 'dotenv'

config()

export const searchRepository = async (query: string) => {
	const queryString = `apicon-hackathon-2020-${query
		.replace(/ +/g, '-')
		.toLowerCase()}`
	console.log(queryString)

	const { data } = await api.post(
		'https://api.github.com/graphql',
		{
			query: queryRepo,
			variables: {
				queryString: queryString,
			},
		},
		{
			timeout: 5000,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
			},
		}
	)

	if (!data) return false

	return data.data.repository
}
