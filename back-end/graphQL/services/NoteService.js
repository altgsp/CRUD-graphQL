// usado pata melhor abstração de dados, usa a clase do mongodbRepo para instanciar um repositório vinculado ao banco de dados "notas" onde possui todas as entrdas de notas.

class NoteService {
    constructor() {
        this.NoteRepository = new MongodbRepo('Notes');
    }

    getAllNotes() {
        return this.NoteRepository.getAll();
    }

    updateNote(_id, opt) {
        return this.NoteRepository.updadeOne(_id, opt);
    }

    deleteNote(_id) {
        return this.NoteRepository.deleteOne(_id);
    }

    createNote(opt) {
        return this.NoteRepository.create(opt);
    }
}