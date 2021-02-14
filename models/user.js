const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    firstname:String,
    age:Number

});

module.exports=mongoose.model('User',userSchema);