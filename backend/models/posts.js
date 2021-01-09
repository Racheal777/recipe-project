const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
    

    email:{type:String,unique:true},
    password: String,
   
});

 module.exports = mongoose.model('Post', postSchema);