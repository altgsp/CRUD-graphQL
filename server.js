// imports
const express = require('express');
    const {graphqlHTTP} = require('express-graphql');
    const {buildSchema} = require('graphql');

// schemas
const schema = buildSchema(`
    type Query {
        hello:String
    }
`);

// Resolvers
const rootValue = {
    hello: () => 'Hello World!'
}

// Setando o servidor
const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        rootValue,
        graphql:true
    }),
);

app.listen(3333, ()=> console.log('ExpressGraphQL Server Now Running On localhost:3333/graphql'));
