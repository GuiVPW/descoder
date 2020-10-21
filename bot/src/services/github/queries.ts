export const queryRepo = `
		query GetRepository($queryString: String!) {
			repository(owner: "apiplaybook", name: $queryString){
				id
				url
			}
		}
`
