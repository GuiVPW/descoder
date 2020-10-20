import express from 'express'
import cors from 'cors'
import routes from './src/constants/routes'

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

const PORT = 3333

app.listen(process.env.PORT || PORT, () => {
	console.log(`🚀 Rodando o servidor em: http://localhost:${PORT}`)
})
