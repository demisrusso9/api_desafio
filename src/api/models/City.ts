import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
class City {
   @PrimaryColumn('varchar', { length: 30 })
   name: string

   @Column('varchar', { length: 30 })
   state: string
}

export default City
