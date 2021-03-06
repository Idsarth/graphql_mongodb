import express, { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'

// Import environment
import { Env } from './environment'

// Import resolvers
import { ClientResolver } from './resolvers/client.resolver'
import { PaymentResolver } from './resolvers/payment.resolver'

export class Server {
  public app: Application

  constructor() {
    this.app = express()
  }

  async start (cb: Function): Promise<void> {
    const schema = await buildSchema({
      resolvers: [ClientResolver, PaymentResolver],
      emitSchemaFile: true,
      validate: false
    })
    const server = new ApolloServer({ schema })
    server.applyMiddleware({ app: this.app, path: '/graphql' })

    this.app.listen(Env.PORT, cb())
  }
}