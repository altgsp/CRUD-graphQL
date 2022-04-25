const express = require('express');
const cors = require('cors');
const app = express();
const {graphqlHTTP} = require('express-graphql');
const {setupDB} = require('./config/databaseConnection')

const schema = {
    // adc depois
}

app.use(cors());
app.use(
    'graphql',
    graphqlHTTP({
        schema,
        graphql: true,
        pretty: true
    })
);

app.listen(400);
console.log('SERVER OK');
