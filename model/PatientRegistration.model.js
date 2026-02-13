import mongoose from 'mongoose'

const PatientSchema = new mongoose.Schema({
    patientId : Number,
    patientName : String,
    patientNo : Number,
    registrationDateTime : Date,
    age : Number,
    bloodGroup : String,
    gender : String,
    occupation : String,
    address : String,
    hospitalId : Number,
    stateId : Number,
    cityId : Number,
    pinCode : String,
    mobileNo : String,
    referredBy : String,
    description : String,
    userId : Number,
    created : Date,
    modified : Date,
    emergencyContactNo : String
},
    {collection : 'patients'}
)

const patients = mongoose.model('patients',PatientSchema)

export default patients

// async function GetAll(){
//     return "GetAll called from Model Folder"
// }

// async function GetById(id){
//     return "GetBy id is called from Model Folder"
// }

// async function Insert(id){
//     return "Insert called from Model Folder"
// }

// async function Delete(id){
//     return "Delete called from Model Folder"
// }

// async function Update(id){
//     return "Update called from Model Folder"
// }

// export {GetAll,GetById,Insert,Delete,Update}