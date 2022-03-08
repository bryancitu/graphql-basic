'use strict'

const { graphql, buildSchema } = require('graphql')

// definiendo el esquema
const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

// Ejecutamos el query hello
graphql({
    schema: schema, 
    source: '{ hello }'
}).then((data) => {
    console.log(data);
})