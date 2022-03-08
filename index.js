'use strict'

const { graphql, buildSchema } = require('graphql')

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
        return 'Hola Mundo'
    },
    saludo: () => {
        return 'Hola a todos'
    },
}

// Ejecutamos el query hello
graphql({
    schema: schema, 
    source: '{ hello, saludo }',
    rootValue: resolvers
}).then((data) => {
    console.log(data);
})