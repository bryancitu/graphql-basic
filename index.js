'use strict'

const { buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3001

// definiendo el esquema
const schema = buildSchema(
    readFileSync(
        join(__dirname, 'lib', 'schema.graphql'),
        'utf-8'
    )
)

app.use('/api', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})

// Ejecutamos el query hello
// graphql({
//     schema: schema,
//     source: '{ hello, saludo }',
//     rootValue: resolvers
// }).then((data) => {
//     console.log(data);
// })
