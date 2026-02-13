import mongoose from 'mongoose'

const HospitalMasterSchema = new mongoose.Schema({
    hospitalId : Number,
    hospitalName : String,
    defaultPaymentModelId : Number,
    registrationCharge : Number,
    registrationValidityMonths : Number,
    openingDate : Date,
    openingPatientNo : Number,
    openingOPDNo : Number,
    openingReceiptNo : Number,
    description : String,
    userId : Number,
    created : Date,
    modified : Date,
    address : String,
    isRateEnableInReceipt : Boolean,
    isRegistrationFeeEnableInOPD : Boolean
},
    {collection : 'hospitals'}
)

const Hospitalmaster = mongoose.model('Hospitalmaster',HospitalMasterSchema)

export default Hospitalmaster

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