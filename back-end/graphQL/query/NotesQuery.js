// retorna todas as notas armazenadas no banco de dados

const { GraphQLList } = require("graphql");

const NotesQuery = {
    type: GraphQLList(noteType),
    args: {},
    resolve: async () => {
        const noteService = new NoteService();
        const notes = await noteService.getAllNotes();

        return notes;
    }
};