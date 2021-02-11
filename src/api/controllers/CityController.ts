import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import City from '../models/City'

class CityController {
   async add(req: Request, res: Response) {
      const repository = getRepository(City)

      const city = await repository
         .save(req.body)
         .then(data => data)
         .catch(err => err)

      return res.json(city)
   }

   async findByName(req: Request, res: Response) {
      const repository = getRepository(City)

      const name = await repository.findOne({
         where: { name: req.params.name }
      })

      if (name) return res.json(name)
      return res
         .status(404)
         .json({ message: `No city found with the name ${req.params.name}` })
   }

   async findByState(req: Request, res: Response) {
      const repository = getRepository(City)

      const state = await repository.find({
         where: { state: req.params.state }
      })

      if (state.length > 0) return res.json(state)
      return res
         .status(404)
         .json({ message: `No state found with the name ${req.params.state}` })
   }
}

export default new CityController()
