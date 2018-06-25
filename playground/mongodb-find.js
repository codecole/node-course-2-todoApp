const {MongoClient, ObjectID} = require ('mongodb');





MongoClient.connect('mongodb://localhost:27017 ', (err, client) =>{
if (err){
   return console.log('Unable to connect to MongoDb server');
}
console.log('connected to MongoDB server');
// var db= client.db('TodoApp');
//  db.collection('Todos').find({
//      _Id:new ObjectID('id number')
//      }).toArray().then((docs) =>{
// console.log('Todos');
// console.log(JSON.stringify(docs, undefined, 2));
//  },(err)=>{
//      console.log('unable to fetch todos', err);
//  })

// 
var db= client.db('TodoApp');
db.collection('Todos').find({name: 'Cole'}).toArray().then((docs) =>{
console.log('Todos');
console.log(JSON.stringify(docs, undefined, 2));
},(err)=>{
    console.log('unable to fetch todos', err);
})
// client.close();
});