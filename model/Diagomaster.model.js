import mongoose from 'mongoose'

const DiagoSchema = new mongoose.Schema({

    diagnosisTypeId: Number,
    diagnosisTypeName: String,
    diagnosisTypeShortName: String,
    isActive: Boolean,
    hospitalId: Number,
    description: String,
    userId: Number,
    created: Date,
    modified: Date,
},
    {collection:'diagnosisTypes'}
)

const Diagnosis = mongoose.model('Diagnosis',DiagoSchema)

export default Diagnosis

// async function GetAll(){
//     try{
//         const [newDiagnosis, fields] = await Diagnosis.find()
//         console.log(newDiagnosis)
//         return newDiagnosis
//     }
//     catch(err){
//         return false
//     }
// }

// async function GetById(id){
//     try{
//         const [newDiagnosis, fields] = await Diagnosis.findById(id)
//         console.log(newDiagnosis)
//         return newDiagnosis
//     }
//     catch(err){
//         return false
//     }
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