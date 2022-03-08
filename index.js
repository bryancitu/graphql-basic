'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const app = express()
const port = process.env.port || 3001

// definiendo el esquema
const schema = buildSchema(`
    type Query {
        hello: String
        saludo: String
    }
`)

// Configurar los reolvers
const resolvers = {
    hello: () => {
        return "Hola Mundo"
    },
    saludo: () => {
        return "Hola a todos"
    },
}

app.use('/api',graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})

// Ejecutamos el query hello
// graphql({
//     schema: schema, 
//     source: '{ hello, saludo }',
//     rootValue: resolvers
// }).then((data) => {
//     console.log(data);
// })