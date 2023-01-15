import ContextStrategy from "./src/base/contextStrategy.js"
import MongoDBStrategy from "./src/strategies/mongoDBStrategy.js"
import PostgresStrategy from "./src/strategies/postegresStrategy.js"

const postgresConnectionString = "postgres://erickwendel:senha0001@localhost:5432/heroes"
const postgresContext = new ContextStrategy(new PostgresStrategy(postgresConnectionString))
await postgresContext.connect()

const mongoDBConnectionString = "mongodb://root:12345678@localhost:27017/heroes" // "mongodb://erickwendel:senhaadmin@localhost:27017/heroes"
const mongoDBContext = new ContextStrategy(new MongoDBStrategy(mongoDBConnectionString))

await mongoDBContext.connect()

const data = [{
    name: 'erickwendel',
    type: 'transaction'
}, {
    name: 'mariasilva',
    type: 'activityLog'
}]

const contextTypes = {
    transaction: postgresContext,
    activityLog: mongoDBContext
}

for(const {type, name} of data) {
    console.log(type, name)
    const context = contextTypes[type]
    await context.create({ name: name + Date.now()})
    console.log('type', type)
    

    console.log(type, context.dbStrategy.constructor.name)
    const [first] = await context.read()

    first && await context.delete(first.id || first._id)
    
    console.log(await context.read())
}