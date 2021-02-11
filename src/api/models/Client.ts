import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

enum Gender {
   Female = 'Female',
   Male = 'Male',
   Other = 'Other'
}

@Entity()
class Client {
   @PrimaryGeneratedColumn()
   id: number

   @Column('varchar', { length: 30 })
   fullname: string

   @Column({
      name: 'sex',
      type: 'enum',
      enumName: 'Gender',
      enum: Gender
   })
   sex: Gender

   @Column('date')
   dateofbirth: Date

   @Column('int')
   age: number

   @Column('varchar', { length: 30 })
   city: string
}

export default Client
