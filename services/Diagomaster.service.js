// import {GetAll,GetById,Insert,Delete,Update} from "../models/Diagomaster.model.js"
import Diagnosis from "../models/Diagomaster.model.js"
import mongoose from "mongoose"

async function getAll() {
    const data = await Diagnosis.find()
    return data
}

async function getById(id){
    const data = await Diagnosis.findById(id)
    return(data)
}

async function insert(formData){
   try{

        const hos = new Diagnosis(formData)

        await hos.validate()
        await hos.save()

        return(hos)
    }catch(err){
        console.log("Insert err" , err)
    }
}

async function update(id,formData){
     try{
        const editDiagnosis = await Diagnosis.findByIdAndUpdate(id,formData,{new:true})
        if(!editDiagnosis){
            return 0
        }
        return(editDiagnosis)
    }catch(err){
        console.log("Edit Error : ",err)
    }
}

async function deleteById(id){
    try{
        const DeletedDiagonsis = await Diagnosis.findByIdAndDelete(id)

        if(!DeletedDiagonsis){
            return 0
        }

        return (DeletedDiagonsis)
    }catch(err){
        console.log("Error : ",err)
    }
}

export {getAll,getById,insert,update,deleteById}
