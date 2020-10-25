import { Router, Request, Response } from 'express'
import * as users from '../controllers/UserControllers'
import * as equipes from '../controllers/EquipeController'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
	res.send('Bem-vindo')
})

routes.get('/users', users.indexAll)
routes.get('/user/:nome', users.index)
routes.get('/mentors', users.findMentors)
routes.post('/users', users.store)

routes.get('/equipes', equipes.indexAll)
routes.get('/equipe/:nome', equipes.index)
routes.post('/equipes', equipes.store)

export default routes
