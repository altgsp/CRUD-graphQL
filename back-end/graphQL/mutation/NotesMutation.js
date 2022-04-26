// mutação de notas que permite criar uma nota a partir da consulta de mutação.

const CreateNoteMutation = {
    type: noteType,
    args: {
        content: { type: GraphQLString }
    },
    resolve: async (_, {content}) => {
        // classe de serviço para abstrair consultas mongodb
        const noteService = new NoteService();
        const newNote = await noteService.createNote({ content });

        return newNote;
    }
};