const mongoose = require ('mongoose');
const PatientList = mongoose.Schema({
    FullName: String,
    Gender: String,
    DateOfBirth: Date,
    Age:Number,
    Email:String,
    PhoneNumber: Number,
    CreateDate:{
        appoitmentDate: Date,
        appoitmentTime: String
    }
});


module.exports= mongoose.model('patientinfo',PatientList);