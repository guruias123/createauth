var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name:String,
    companyname:String,
    phonenumber:String,
    companytype:String,
    pincode:String,
    email:String,
    password:String,
    role:String
})

mongoose.model('User',UserSchema);
module.exports = mongoose.model('User');