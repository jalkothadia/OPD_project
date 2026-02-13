import mongoose from 'mongoose'

const SubtreatmentSchema = new mongoose.Schema({
    subTreatmentTypeId : Number,
    subTreatmentTypeName : String,
    treatmentTypeId : Number,
    rate : Number,
    isActive : Boolean,
    description : String,
    userId  : Number,
    created : Date,
    modified : Date,
    accountId : Number
},
    {collection : 'subTreatmentTypes'}
)

const Subtreatment = mongoose.model('Subtreatment',SubtreatmentSchema)

export default Subtreatment

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