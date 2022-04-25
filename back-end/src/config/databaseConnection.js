const MongoClient = require('mongodb').MongoClient;

let mongoDB;

const setupDB = callback => {
    const uri = 'mongodb+srv:gesp:<geisa123>@clustercrud.wiu5j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

    MongoClient.connect(
        uri,
        { userNewParser: true, useUnifiedTopology: true},
        (err, client) => {
            mongoDB = client.db('full-stack-server');

            if (err) {
                return callback(err);
            }else{
                return callback('DB OK');
            }

        }
    )
};

const getDB = () => {
    return mongoDB;
};

module.exports = { setupDB, getDB};

