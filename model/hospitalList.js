const mongoose = require ('mongoose');
const hospitalInfo = mongoose.Schema({
    hospitalName: String,
    address: String,
    establishDate: Date,
    email:String,
    phoneNumber: String,
});


module.exports= mongoose.model('hospitalInfo',hospitalInfo);