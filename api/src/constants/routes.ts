import { Router } from 'express'
import * as users from '../controllers/UserControllers'

const routes = Router()

routes.get('/users', users.indexAll)
routes.get('/user/:id', users.index)
routes.post('/users', users.store)

export default routes
