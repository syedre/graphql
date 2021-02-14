const mongoose = require('mongoose');
const schema = mongoose.Schema;

const companySchema = new mongoose.Schema({
  name:String,
   description:String

});

module.exports=mongoose.model('Company',companySchema);