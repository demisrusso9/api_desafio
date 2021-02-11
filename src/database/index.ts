import { createConnection } from 'typeorm'

createConnection()
   .then(() => console.log('👌 Database Running'))
   .catch(err => console.log(err))
