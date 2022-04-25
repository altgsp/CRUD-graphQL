// define esquema raiz do graphql, Query e Mutation, como rotas de API resolvendo consultas no db e outras tarefas do servidor.

const { GraphQLInputObjectType, GraphQLSchema } = require("graphql");

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        notes: NotesQuery
    })
});

const MutationType = new GraphQLInputObjectType({
    name: 'Mutation',
    fields: () => ({
        createNote: CreateNoteMutation,
        deleteNote: DeleteNoteMutation,
        updateNote: UpdateNoteMutation
    })
});

const schema = new GraphQLSchema({ query: QueryType, mutation: MutationType });