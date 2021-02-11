import { Request, Response, Router } from 'express'

import CityController from './api/controllers/CityController'
import ClientController from './api/controllers/ClientController'

const routes = Router()

routes.get('/', (req: Request, res: Response) =>
   res.json({ message: 'Hello There' })
)

// City
routes.post('/city', CityController.add)
routes.get('/city/name/:name', CityController.findByName)
routes.get('/city/state/:state', CityController.findByState)

// Client
routes.post('/client', ClientController.add)
routes.get('/client/id/:id', ClientController.findById)
routes.get('/client/name/:name', ClientController.findByName)
routes.delete('/client/:id', ClientController.remove)
routes.patch('/client/:id', ClientController.update)

export default routes
