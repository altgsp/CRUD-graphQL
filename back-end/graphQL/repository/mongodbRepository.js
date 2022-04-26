// conectando ao banco de dados e expondo operações CRUD nas entradas do banco. 

class MongodbRepo {
    constructor(collectionName) {
        this.collection = getDB().collection(collectionName);
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this.collection.find({}).toArray((err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }

    getById(_id) {
        return new Promise((resolve, reject) => {
            this.collection.findOne({ _id: ObjectId(_id) }, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
}