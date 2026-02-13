import mongoose from 'mongoose'

const TreatmentSchema = new mongoose.Schema({
    treatmentTypeId : Number,
    treatmentTypeName : String,
    treatmentTypeShortName : String,
    hospitalId : Number,
    description : String,
    userId : Number,
    created : Date,
    modified : Date
},
    {collection : 'treatmentTypes'}
)

const Treatment = mongoose.model('Treatment',TreatmentSchema)

export default Treatment

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