import express from 'express'
import cors from 'cors'
import routes from './src/constants/routes'
import BodyParser from 'body-parser'

const app = express()

app.use(BodyParser.json())
app.use(
	BodyParser.urlencoded({
		extended: false
	})
)

app.use(cors())

app.use(routes)

const PORT = 3333

app.listen(process.env.PORT || PORT, () => {
	console.log(`🚀 Rodando o servidor em: http://localhost:${PORT}`)
})
