import { Router, Request, Response } from 'express'
import * as users from '../controllers/UserControllers'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
	res.send('Bem-vindo')
})

routes.get('/users', users.indexAll)
routes.get('/user/:nome', users.index)
routes.post('/users', users.store)

export default routes
