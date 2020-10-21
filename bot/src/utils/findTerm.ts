const findTerm = (stringOrArray: string, term: string) => {
	if (stringOrArray.toLowerCase().includes(term)) return stringOrArray
}

export default findTerm
