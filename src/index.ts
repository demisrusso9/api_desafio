import 'reflect-metadata'
import express from 'express'
import routes from './routes'

import './database'

class App {
   public express: express.Application

   constructor() {
      this.express = express()

      this.init()
      this.middlewares()
      this.routes()
   }

   private middlewares() {
      this.express.use(express.json())
   }

   private routes() {
      this.express.use(routes)
   }

   private init() {
      this.express.listen(3333, () => console.log('👌 Server Running'))
   }
}

export default new App()
