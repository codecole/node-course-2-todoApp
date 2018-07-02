const {MongoClient, ObjectID} = require ('mongodb');





MongoClient.connect('mongodb://localhost:27017 ', (err, client) =>{
if (err){
   return console.log('Unable to connect to MongoDb server');
}
console.log('connected to MongoDB server');
var db= client.db('TodoApp');

db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b30fb105014e2e4ebd153cc')
// },{
//     $set:{
//         completed: false
//     }
// },{
//     returnOriginal: false
// }).then((result)=>{
//     console.log(result);
// }
// );
},{
    $set:{
        name: 'Solomon'
    },
    $inc:{
        age:1
    }
},{
    returnOriginal: false
}).then((result)=>{
    console.log(result);
});

// client.close();
});