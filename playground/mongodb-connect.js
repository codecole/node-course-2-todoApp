// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');






MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
if (err){
   return console.log('Unable to connect to MongoDb server');
}
console.log('connected to MongoDB server');
var db= client.db('Todos');

// how to insert in database
// db.collection('Todos').insertOne({
// text: 'Something to do',
// completed: false
// }, (err, result) =>{
//     if (err){
//         return console,log('unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
// });

client.close();
});