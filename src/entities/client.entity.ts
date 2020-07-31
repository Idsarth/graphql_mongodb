import { Field, ID, ObjectType } from 'type-graphql'
import { prop as Property, getModelForClass } from '@typegoose/typegoose'
import { ObjectId } from 'mongodb'

@ObjectType({ description: 'Entity client' })
export class Client {
  @Field(() => ID)
  readonly _id: ObjectId

  @Field()
  @Property({ required: true, type: String, unique: true })
  identifier: string

  @Field()
  @Property({ required: true, type: String })
  name: string

  @Field()
  @Property({ required: true, type: String, unique: true })
  phone: string

  @Field()
  @Property({ type: Date, default: new Date() })
  readonly created_at: Date
}

export const ClientEntity = getModelForClass(Client)
