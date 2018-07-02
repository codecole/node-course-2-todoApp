const {MongoClient, ObjectID} = require ('mongodb');





MongoClient.connect('mongodb://localhost:27017 ', (err, client) =>{
if (err){
   return console.log('Unable to connect to MongoDb server');
}
console.log('connected to MongoDB server');
//delete Many
// var db= client.db('TodoApp');
// db.collection('Todos').deleteMany({text: 'walk the dog'}).then((result)=>{
// console.log(result);
// });

//deleteOne
// var db= client.db('TodoApp');
// db.collection('Todos').deleteOne({text: 'Something to do'}).then((result)=>{
// console.log(result);
// });


//find one and delete

// var db= client.db('TodoApp');
// db.collection('Todos').findOneAndDelete({compeleted: true}).then((result)=>{
// console.log(result);
// });




// client.close();
});