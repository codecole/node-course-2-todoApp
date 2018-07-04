var mongoose = require ('mongoose');


var User = mongoose.model('User', {
 
    completed:{
        type:Boolean
    },
    completedAt:{
        type: Number
    },
    User:{
        type:String
    } ,
    Email:{
        type: String,
        require: true,
        trim: true,
        minlength:1
    }
});

module.exports={User};