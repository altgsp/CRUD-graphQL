// criação de tipo de dados de objeto graphql e nota com próprio id e campo para conteúdo.

const { GraphQLInputObjectType, GraphQLID, GraphQLString } = require("graphql");

const noteType = new GraphQLInputObjectType({
    name: 'Note',
    fields: {
        _id: { type: GraphQLID },
        content: { type: GraphQLString }
    }
});