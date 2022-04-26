const MongoClient = require('mongodb').MongoClient;

const getDbInstance = (config) => new Promise((resolve,reject) => {
    const client = new MongoClient(config.dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    client.connect((error) => {
        if(error){
            console.error(error);
            reject(error);
        }
        let db = client.db(config.dbName);
        resolve(db);
    })
})


const doSomeDbOperations = async() => {
    const config = {
        dbUrl: "mongodb+srv:gesp:<geisa123>@clustercrud.wiu5j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        dbName: "dbCRUD"
    };

    try{
        const db = await getDbInstance(config);

        //do whatever querying you wish here

    }catch(e){
        console.error(`ERROR: `,e);
    }

}

doSomeDbOperations();

// const MongoClient = require('mongodb').MongoClient;

// let mongoDB;

// const setupDB = callback => {
//     const uri = 'mongodb+srv:gesp:<geisa123>@clustercrud.wiu5j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//     const dbName = "dbCRUD"

//     MongoClient.connect(
//         uri,
//         { userNewParser: true, useUnifiedTopology: true},
//         (err, client) => {
//             mongoDB = client.db('full-stack-server');

//             if (err) {
//                 return callback(err);
//             }else{
//                 return callback('DB OK');
//             }

//         }
//     )
// };

// const getDB = () => {
//     return mongoDB;
// };

 module.exports = { setupDB, getDB};

