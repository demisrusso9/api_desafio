import { Request, Response } from 'express'
import { getRepository, Like } from 'typeorm'
import Client from '../models/Client'

class ClientController {
   async add(req: Request, res: Response) {
      const repository = getRepository(Client)

      const client = await repository
         .save(req.body)
         .then(data => data)
         .catch(err => err)

      return res.json(client)
   }

   async findById(req: Request, res: Response) {
      const repository = getRepository(Client)

      const client = await repository.findOne({ where: { id: req.params.id } })

      if (client) return res.json(client)
      return res.status(404).json({ message: 'Client not found' })
   }

   async findByName(req: Request, res: Response) {
      const repository = getRepository(Client)

      const client = await repository.find({
         where: { fullname: Like(`%${req.params.name}%`) }
      })

      if (client.length > 0) return res.json(client)
      return res.status(404).json({ message: 'Client not found' })
   }

   async remove(req: Request, res: Response) {
      const repository = getRepository(Client)

      const client = await repository.findOne(req.params.id)

      if (client) {
         await repository.delete(client)
         return res.json({ message: 'Client removed' })
      }

      return res.status(404).json({ message: 'Client not found' })
   }

   async update(req: Request, res: Response) {
      const { id } = req.params
      const repository = getRepository(Client)

      const client = await repository
         .update(id, { fullname: req.body.fullname })
         .then(data => data)
         .catch(err => err)

      if (client.affected)
         return res.json({ message: 'Client renamed successfully' })

      return res.status(404).json({ message: 'Client not found' })
   }
}

export default new ClientController()
